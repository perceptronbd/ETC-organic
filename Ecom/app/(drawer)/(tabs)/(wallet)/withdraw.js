import { router } from "expo-router";
import React from "react";
import { Image, Pressable, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Divider } from "react-native-paper";
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
import { bankInfo } from "../../../../constants/mockData";
import { useModal } from "../../../../hooks/useModal";

const withdraw = () => {
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

  const onBkash = () => {
    showBkash();
  };

  const onNagad = () => {
    showNagad();
  };

  const openConfirmModal = () => {
    showConfirmModal();
  };

  const goHome = () => {
    router.replace("/(drawer)/(tabs)/home");
    hideConfirmModal();
  };

  return (
    <View style={tailwind`flex-1 justify-between  px-4 pt-4`}>
      <GoBack route={"/(drawer)/(tabs)/(wallet)"}>উত্তোলন</GoBack>
      <BalanceWithdraw />
      <Divider />
      <PaymentWithdraw onBkash={onBkash} onNagad={onNagad} />
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

const PaymentWithdraw = ({ onBkash, onNagad }) => {
  const [selectedBankId, setSelectedBankId] = React.useState(null);

  const handleBankSelection = (bankId) => {
    setSelectedBankId((prev) => (prev === bankId ? null : bankId));
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
              style={tailwind`h-20 w-28 rounded-lg`}
            />
          </Pressable>
          <Pressable onPress={onNagad}>
            <Image
              alt="Image"
              source={require("../../../../assets/img/nagad.png")}
              style={tailwind`h-20 w-28 rounded-lg`}
            />
          </Pressable>
        </View>
      </View>
      <Divider />
      <View style={tailwind`pt-4`}>
        <StyledText variant="bodySmall" type="b" color={COLOR.neutralDark}>
          Bank
        </StyledText>
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
              isSelected={selectedBankId === item.id}
              setSelection={handleBankSelection}
            />
          ))}
        </ScrollView>
        <StyledButton variant={"outline"}>Add New Bank Account</StyledButton>
      </View>
    </View>
  );
};

export default withdraw;
