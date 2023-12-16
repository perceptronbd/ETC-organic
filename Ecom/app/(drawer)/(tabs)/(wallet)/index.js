import { router } from "expo-router";
import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Divider } from "react-native-paper";
import tailwind from "twrnc";
import {
  ContentModal,
  ReferredEarnCard,
  StyledButton,
  StyledText,
} from "../../../../components";
import COLOR from "../../../../constants/COLOR";
import { earnedCSB } from "../../../../constants/mockData";
import { useModal } from "../../../../hooks";
import { formatNumbers } from "../../../../utils/formatNumbers";

export default function Page() {
  const {
    visible: visibleRedeem,
    showModal: showRedeem,
    hideModal: hideRedeem,
  } = useModal();

  const onWithdraw = () => {
    //router.push("/withdraw");
    console.log("withdraw");
    router.push("/withdraw");
  };

  return (
    <View style={tailwind.style(`flex-1 gap-4  p-4`, {})}>
      <CSBbalance onRedeem={showRedeem} onWithdraw={onWithdraw} />
      <ContentModal visible={visibleRedeem} hideModal={hideRedeem}>
        <StyledText>Redeem Modal</StyledText>
      </ContentModal>

      <Divider />
      <ScrollView
        contentContainerStyle={{
          columnGap: 10,
          rowGap: 8,
        }}
      >
        {earnedCSB.map((item) => (
          <ReferredEarnCard
            key={item.id}
            date={item.date}
            time={item.time}
            csb={item.csb}
            percentage={item.percentage}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const CSBbalance = ({ onRedeem, onWithdraw }) => {
  return (
    <View style={tailwind`gap-2`}>
      <StyledText type="b">বর্তমান CSB ব্যালেন্স</StyledText>
      {/* CSB and BDT */}
      <View style={tailwind`flex-row justify-between`}>
        <View style={tailwind`flex-row gap-2`}>
          <StyledText type="b" variant="displaySmall">
            {formatNumbers(1000)}
          </StyledText>
          <StyledText variant="bodySmall">CSB</StyledText>
        </View>
        <View style={tailwind`flex-row gap-2`}>
          <StyledText type="b" variant="displaySmall">
            {formatNumbers(200)}
          </StyledText>
          <StyledText variant="bodySmall">BDT</StyledText>
        </View>
      </View>
      {/* instrucitons */}
      <StyledText variant="bodySmall" color={COLOR.neutralDark}>
        টাকা তে রুপান্তর করতে Redeem করুন
      </StyledText>
      {/* Buttons */}
      <View style={tailwind`flex-row justify-between gap-2`}>
        <StyledButton width={"20"} onPress={onRedeem}>
          Redeem
        </StyledButton>
        <StyledButton width={"72"} onPress={onWithdraw}>
          Request to Withdraw
        </StyledButton>
      </View>
    </View>
  );
};