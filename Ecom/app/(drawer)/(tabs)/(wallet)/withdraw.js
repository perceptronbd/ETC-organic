import React from "react";
import { Image, Pressable, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Divider } from "react-native-paper";
import tailwind from "twrnc";
import {
  BankInfoCard,
  GoBack,
  StyledButton,
  StyledInput,
  StyledText,
} from "../../../../components";
import COLOR from "../../../../constants/COLOR";

const withdraw = () => {
  return (
    <View style={tailwind`p-4`}>
      <GoBack route={"/(drawer)/(tabs)/(wallet)"}>উত্তোলন</GoBack>
      <BalanceWithdraw />
      <Divider />
      <PaymentWithdraw />

      <StyledButton>Withdraw Request</StyledButton>
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

const PaymentWithdraw = () => {
  return (
    <View style={tailwind`py-4`}>
      <StyledText variant="titleMedium" type="b">
        পেমেন্ট কিসের মাধ্যমে পেতে চাচ্ছেন?
      </StyledText>
      <View style={tailwind`pb-2 pt-4`}>
        <StyledText variant="bodySmall" type="b" color={COLOR.neutralDark}>
          Digital Withdraw
        </StyledText>
        <View style={tailwind`flex-row gap-4 py-2`}>
          <Pressable>
            <Image
              alt="Image"
              source={require("../../../../assets/img/bKash.png")}
              style={tailwind`h-20 w-28 rounded-lg`}
            />
          </Pressable>
          <Pressable>
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
          <BankInfoCard
            bank={"Islami Bank"}
            branch={"Mirput"}
            acc={"4988459739892"}
          />
          <BankInfoCard
            bank={"Islami Bank"}
            branch={"Mirput"}
            acc={"4988459739892"}
          />
          <BankInfoCard
            bank={"Islami Bank"}
            branch={"Mirput"}
            acc={"4988459739892"}
          />
          <BankInfoCard
            bank={"Islami Bank"}
            branch={"Mirput"}
            acc={"4988459739892"}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default withdraw;
