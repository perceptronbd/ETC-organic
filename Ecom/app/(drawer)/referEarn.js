import { router } from "expo-router";
import React from "react";
import { View } from "react-native";
import { Divider } from "react-native-paper";
import tailwind from "twrnc";
import {
  ContentModal,
  GoBack,
  StyledButton,
  StyledText,
} from "../../components";
import COLOR from "../../constants/COLOR";
import { useModal } from "../../hooks";

export default function referEarn() {
  const {
    visible: isAlert,
    showModal: showAlert,
    hideModal: hideAlert,
  } = useModal();

  const onRefer = () => {
    showAlert();
  };

  const gotoProfile = () => {
    router.push("profile");
    hideAlert();
  };

  return (
    <View style={tailwind`flex-1 p-4`}>
      <GoBack route={"/(drawer)/(tabs)/home"}>Refer & Earn</GoBack>
      <View style={tailwind`mt-6 flex items-center`}>
        <StyledButton variant={"outline"}>
          Top 10 Referrer of the Month
        </StyledButton>
        <StyledText
          style={{
            marginTop: 20,
          }}
        >
          আপনার পরিচিত কাউকে অ্যাপ-এ সাইন আপ করানোর জন্য রেফার করুন এবং আর্ন
          করুন লাইফটাইম।
        </StyledText>
        <Divider style={tailwind`mt-6 h-0.5 w-full`} />
        <StyledButton width={"md"} onPress={onRefer}>
          রেফার করুন
        </StyledButton>
      </View>

      <ContentModal visible={isAlert} hideModal={hideAlert} height={250}>
        <View style={tailwind`flex h-full w-full items-center justify-between`}>
          <StyledText variant="bodyLarge" type="b">
            বিজ্ঞপ্তি
          </StyledText>
          <StyledText>
            রেফার অ্যান্ড আর্ন প্রোগ্রামে অন্তর্ভুক্ত হতে আপনার প্রোফাইল সেকশনের
            সকল ইনফরমেশন ফিলআপ করুন
          </StyledText>
          <StyledButton
            width={"md"}
            color={COLOR.primary}
            onPress={gotoProfile}
          >
            প্রোফাইলে যান
          </StyledButton>
        </View>
      </ContentModal>
    </View>
  );
}
