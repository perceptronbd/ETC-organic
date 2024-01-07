import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, Pressable, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Divider, RadioButton } from "react-native-paper";
import tailwind from "twrnc";
import {
  BankInfoCard,
  ContentModal,
  GoBack,
  Loading,
  StyledButton,
  StyledInput,
  StyledText,
} from "../../../../components";
import COLOR from "../../../../constants/COLOR";
import { bankInfo as bankData } from "../../../../constants/mockData";
import { useCustomToast } from "../../../../hooks";
import { useModal } from "../../../../hooks/useModal";

const withdraw = () => {
  const [balance, setBalance] = useState(0); //state value for balance fetched from the server for the logged in user
  const [withdrawAmount, setWithdrawAmount] = useState(""); //state value for withdraw amount
  const [paymentType, setPaymentType] = useState(""); //state value for payment type selection for withdraw
  const [bankId, setBankId] = useState(""); //state value for group selection of the bank accounts
  const [phoneNumber, setPhoneNumber] = useState(""); //state value for phone number for bkash and nagad withdraw

  const [loading, setLoading] = useState(false); //state value for loading

  const showToast = useCustomToast();

  const {
    visible: isBkash,
    showModal: showBkash,
    hideModal: hideBkash,
  } = useModal();
  const {
    visible: isNagad,
    showModal: showNagad,
    hideModal: hideNagad,
  } = useModal();
  const {
    visible: isConfirmModal,
    showModal: showConfirmModal,
    hideModal: hideConfirmModal,
  } = useModal();

  useEffect(() => {
    setLoading(true);
    async function fetch() {
      console.log("...index redeem fetching...");
      AsyncStorage.getItem("user-data").then((data) => {
        const userData = JSON.parse(data);
        console.log("...index redeem userData", userData);
        setBalance(userData?.taka);
        setLoading(false);
      });
    }
    fetch();
  }, []);

  const openConfirmModal = async () => {
    if (!withdrawAmount && paymentType === "bank") {
      showToast({
        description: "দয়া করে Withdraw Amount প্রদান করুন​।",
        variant: "warning",
      });
      return;
    }

    if (paymentType === "bkash") {
      showBkash();
    } else if (paymentType === "nagad") {
      showNagad();
    } else if (paymentType === "bank") {
      showConfirmModal();
    } else {
      showToast({
        description: "দয়া করে Payment সিলেক্ট করুন​।",
        variant: "warning",
      });
    }
  };

  const handlePhoneNumber = (value) => {
    console.log(value);
    setPhoneNumber(value);
  };

  const goHome = () => {
    const data = {
      withdrawAmount,
      paymentType,
      phoneNumber,
      bankId,
    };

    console.log("...withdraw goHome data:", data);

    if (!withdrawAmount || !paymentType) {
      showToast({
        description: "দয়া করে Withdraw Amount প্রদান করুন​।",
        variant: "warning",
      });
      return;
    }
    if (withdrawAmount <= 0) {
      showToast({
        description: "Withdraw Amount অবশ্যই 0 এর চেয়ে বড় হতে হবে​।",
        variant: "warning",
      });
      return;
    }
    if (
      (paymentType === "bkash" && !phoneNumber) ||
      (paymentType === "nagad" && !phoneNumber)
    ) {
      showToast({
        description: "দয়া করে সব Phone Number প্রদান করুন​।",
        variant: "warning",
      });
      return;
    }

    console.log("...withdraw openConfirmModal data:", data);
    router.replace("/(drawer)/(tabs)/home");
    hideConfirmModal();
    hideBkash();
    hideNagad();
  };

  return (
    <View style={tailwind`flex-1 justify-between px-3 pt-4`}>
      <View>
        <GoBack route={"/(drawer)/(tabs)/(wallet)"}>উত্তোলন</GoBack>
        <BalanceWithdraw
          setWithdrawAmount={setWithdrawAmount}
          balance={balance}
        />
        <Divider />
        <PaymentWithdraw
          paymentType={paymentType}
          setPaymentType={setPaymentType}
          bankId={bankId}
          setBankId={setBankId}
        />
      </View>
      <ContentModal visible={isBkash} hideModal={hideBkash}>
        <View style={tailwind`flex items-center justify-center`}>
          <StyledText variant="titleLarge" type="b">
            bKash
          </StyledText>
          <StyledText>আপনার পার্সোনাল বিকাশ নাম্বার ইনপুট করুন</StyledText>
          <StyledInput
            mode={"outlined"}
            label={"Phone No."}
            onChangeText={(text) => {
              handlePhoneNumber(text);
            }}
          />
          <StyledButton width={"md"} onPress={goHome}>
            কনফার্ম
          </StyledButton>
        </View>
      </ContentModal>
      <ContentModal visible={isNagad} hideModal={hideNagad}>
        <View style={tailwind`flex items-center justify-center`}>
          <StyledText variant="titleLarge" type="b">
            Nagad
          </StyledText>
          <StyledText>আপনার পার্সোনাল নগদ নাম্বার ইনপুট করুন</StyledText>
          <StyledInput
            mode={"outlined"}
            label={"Phone No."}
            onChangeText={(text) => handlePhoneNumber(text)}
          />
          <StyledButton width={"md"} onPress={goHome}>
            কনফার্ম
          </StyledButton>
        </View>
      </ContentModal>
      <ContentModal visible={isConfirmModal} hideModal={hideConfirmModal}>
        <View style={tailwind`flex items-center justify-between`}>
          <StyledText
            variant="titleMedium"
            type="b"
            style={{ marginBottom: 20 }}
          >
            Cash Withdraw এর জন্য রিকুয়েস্ট আমাদের কাছে এসেছে{" "}
          </StyledText>
          <StyledText style={{ marginBottom: 20 }}>
            আপনার রিকুয়েস্ট টি যাচাই করার পর যত দ্রুত সম্ভব আপনার প্রাপ্য
            ব্যালেন্স পাঠিয়ে দেয়া হবে আপনার দেয়া অ্যাকাউন্ট ইনফরমেশন-এ
          </StyledText>
          <StyledButton width={"md"} onPress={goHome}>
            ঠিক আছে
          </StyledButton>
        </View>
      </ContentModal>
      <StyledButton onPress={openConfirmModal}>Withdraw Request</StyledButton>
      <Loading isLoading={loading} />
    </View>
  );
};

const BalanceWithdraw = ({ setWithdrawAmount, balance }) => {
  return (
    <View style={tailwind`py-4`}>
      <View style={tailwind`flex-row items-end justify-between py-1`}>
        <StyledText variant="titleMedium">Available Balance :</StyledText>
        <View style={tailwind`flex-row items-end gap-2`}>
          <StyledText variant="titleLarge" type="b">
            {balance}
          </StyledText>
          <StyledText type="b">BDT</StyledText>
        </View>
      </View>
      <View style={tailwind`flex-row items-center justify-between py-1`}>
        <StyledText variant="titleMedium">Withdraw Amount :</StyledText>
        <View style={tailwind`flex-row items-end gap-2`}>
          <StyledInput
            style={{
              width: 120,
              height: 40,
            }}
            type="number"
            onChangeText={(text) => setWithdrawAmount(text)}
          />
          <StyledText type="b">BDT</StyledText>
        </View>
      </View>
    </View>
  );
};

const PaymentWithdraw = ({
  paymentType,
  setPaymentType,
  bankId,
  setBankId,
}) => {
  const [bankInfo, setBankInfo] = React.useState(bankData); //state value for bank info fetched from the server for the logged in user
  const [selectedBank, setSelectedBank] = React.useState(null); //state value for selected bank to withdraw

  const onBkash = () => {
    setPaymentType("bkash"); //set the payment type to bkash
    setBankId(""); //set the value of bank to empty string for group selection
  };

  const onNagad = () => {
    setPaymentType("nagad"); //set the payment type to nagad
    setBankId(""); //set the value of bank to empty string for group selection
  };

  const onSelectBank = (id) => {
    //find the bank info from the bankInfo array with the id
    const selectBank = bankInfo.find((item) => item.id === id);

    setBankId(id); //set the value of bank to the id of the selected bank for group selection

    setSelectedBank((prev) => (prev === selectBank ? null : selectBank)); //set the selected bank to the selectedBank state
    setPaymentType("bank"); //set the payment type to bank
  };

  const deleteBankInfo = (id) => {
    setBankInfo(bankInfo.filter((item) => item.id !== id));
    if (selectedBank === id) {
      setSelectedBank(null);
    }
  };

  return (
    <View style={tailwind`flex py-4`}>
      <StyledText variant="titleMedium" type="b">
        পেমেন্ট কিসের মাধ্যমে পেতে চাচ্ছেন?
      </StyledText>
      <View style={tailwind`pb-2 pt-4`}>
        <StyledText variant="bodySmall" type="b" color={COLOR.neutralDark}>
          Digital Withdraw
        </StyledText>
        <View style={tailwind`flex-row gap-4 py-2`}>
          <Pressable onPress={onBkash}>
            <Image
              alt="Image"
              source={require("../../../../assets/img/bKash.png")}
              style={tailwind.style(`h-20 w-28 rounded-lg`, {
                borderWidth: paymentType === "bkash" ? 2 : 0,
                borderColor: COLOR.tertiary,
              })}
            />
          </Pressable>
          <Pressable onPress={onNagad}>
            <Image
              alt="Image"
              source={require("../../../../assets/img/nagad.png")}
              style={tailwind.style(`h-20 w-28 rounded-lg`, {
                borderWidth: paymentType === "nagad" ? 2 : 0,
                borderColor: COLOR.tertiary,
              })}
            />
          </Pressable>
        </View>
      </View>
      <Divider />
      <View style={tailwind`pt-4`}>
        <StyledText variant="bodySmall" type="b" color={COLOR.neutralDark}>
          Bank
        </StyledText>
        <RadioButton.Group onValueChange={onSelectBank} value={bankId}>
          <ScrollView
            horizontal
            contentContainerStyle={{
              gap: 10,
            }}
          >
            {bankInfo.map((item) => (
              <BankInfoCard
                key={item.id}
                id={item.id}
                bank={item.bank}
                branch={item.branch}
                acc={item.acc}
                deleteBankInfo={deleteBankInfo}
              />
            ))}
          </ScrollView>
        </RadioButton.Group>
        <StyledButton variant={"outline"}>Add New Bank Account</StyledButton>
      </View>
    </View>
  );
};

export default withdraw;
