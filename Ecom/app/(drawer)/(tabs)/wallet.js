import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Divider } from "react-native-paper";
import tailwind from "twrnc";
import { StyledButton, StyledText } from "../../../components";
import COLOR from "../../../constants/COLOR";
import { formatNumbers } from "../../../utils/formatNumbers";

export default function Page() {
  return (
    <View style={tailwind.style(`flex-1 gap-4  p-4`, {})}>
      <CSBbalance />
      <Divider />
      <ScrollView>
        <StyledText>Card</StyledText>
      </ScrollView>
    </View>
  );
}

const CSBbalance = () => {
  return (
    <View style={tailwind`gap-2 `}>
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
        <StyledButton width={"20"}>Redeem</StyledButton>
        <StyledButton width={"72"} disabled>
          Request to Withdraw
        </StyledButton>
      </View>
    </View>
  );
};
