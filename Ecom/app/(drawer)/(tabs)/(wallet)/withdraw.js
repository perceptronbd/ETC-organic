import { router } from "expo-router";
import React, { useState } from "react";
import { Image, Pressable, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Divider, RadioButton } from "react-native-paper";
import tailwind from "twrnc";
import {
  BankInfoCard,
  ContentModal,
  GoBack,
  StyledButton,
  StyledInput,
  StyledText,
} from "../../../../components";
import COLOR from "../../../../constants/COLOR";
import { bankInfo as bankData } from "../../../../constants/mockData";
import { useModal } from "../../../../hooks/useModal";

const withdraw = () => {
  const [paymentType, setPaymentType] = useState(""); //state value for payment type selection for withdraw

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

  const openConfirmModal = () => {
    showConfirmModal();
  };

  const goHome = () => {
    router.replace("/(drawer)/(tabs)/home");
    hideConfirmModal();
  };

  return (
    <View style={tailwind`flex-1 justify-between px-3 pt-4`}>
      <View>
        <GoBack route={"/(drawer)/(tabs)/(wallet)"}>উত্তোলন</GoBack>
        <BalanceWithdraw />
        <Divider />
        <PaymentWithdraw
          paymentType={paymentType}
          setPaymentType={setPaymentType}
        />
      </View>
      <ContentModal visible={isBkash} hideModal={hideBkash}>
        <View style={tailwind`flex items-center justify-center`}>
          <StyledText variant="titleLarge" type="b">
            bKash
          </StyledText>
          <StyledText>আপনার পার্সোনাল বিকাশ নাম্বার ইনপুট করুন</StyledText>
          <StyledInput mode={"outlined"} label={"Phone No."} />
          <StyledButton width={"md"}>কনফার্ম</StyledButton>
        </View>
      </ContentModal>
      <ContentModal visible={isNagad} hideModal={hideNagad}>
        <View style={tailwind`flex items-center justify-center`}>
          <StyledText variant="titleLarge" type="b">
            Nagad
          </StyledText>
          <StyledText>আপনার পার্সোনাল নগদ নাম্বার ইনপুট করুন</StyledText>
          <StyledInput mode={"outlined"} label={"Phone No."} />
          <StyledButton width={"md"}>কনফার্ম</StyledButton>
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
    </View>
  );
};

const BalanceWithdraw = () => {
  return (
    <View style={tailwind`py-4`}>
      <View style={tailwind`flex-row items-end justify-between py-1`}>
        <StyledText variant="titleMedium">Available Balance :</StyledText>
        <View style={tailwind`flex-row items-end gap-2`}>
          <StyledText variant="titleLarge" type="b">
            {1000}
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
          />
          <StyledText type="b">BDT</StyledText>
        </View>
      </View>
    </View>
  );
};

//BUG: when a bank is selected and then bkash or nagad is selected, the selected bank is still selected

const PaymentWithdraw = ({ paymentType, setPaymentType }) => {
  const [bankInfo, setBankInfo] = React.useState(bankData); //state value for bank info fetched from the server for the logged in user
  const [selectedBank, setSelectedBank] = React.useState(null); //state value for selected bank to withdraw
  const [bank, setBank] = React.useState(""); //state value for group selection of the bank accounts

  const onBkash = () => {
    setPaymentType("bkash"); //set the payment type to bkash
  };

  const onNagad = () => {
    setPaymentType("nagad"); //set the payment type to nagad
  };

  const onSelectBank = (id) => {
    //find the bank info from the bankInfo array with the id
    const selectBank = bankInfo.find((item) => item.id === id);

    setBank(id); //set the value of bank to the id of the selected bank for group selection

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
        <RadioButton.Group onValueChange={onSelectBank} value={bank}>
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
