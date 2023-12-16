import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import tailwind from "twrnc";
import COLOR from "../../constants/COLOR";
import { StyledText } from "../texts/StyledText";

export const BankInfoCard = ({
  id,
  bank,
  branch,
  acc,
  isSelected,
  setSelection,
}) => {
  const handleSelection = () => {
    console.log(`selected ${bank}`);
    console.log(isSelected);
    setSelection(id);
  };
  return (
    <View
      style={tailwind`border bg-white border-[${COLOR.neutral}] w-60 rounded-lg p-2`}
    >
      <View style={tailwind`flex-row justify-between`}>
        <BouncyCheckbox
          size={20}
          fillColor={COLOR.tertiary}
          isChecked={isSelected}
          innerIconStyle={{
            borderWidth: 2,

            borderColor: isSelected ? COLOR.tertiary : COLOR.neutral,
          }}
          textStyle={{
            textDecorationLine: "none",
          }}
          onPress={handleSelection}
        />
        <AntDesign
          name="close"
          size={20}
          color={COLOR.neutralDark}
          onPress={() => {
            console.log(`deleted ${bank}`);
          }}
        />
      </View>
      <View style={tailwind`mb-4 flex items-center justify-center`}>
        <StyledText variant="bodyLarge" type="b">
          {bank}
        </StyledText>
        <StyledText variant="bodySmall" type="b" color={COLOR.neutralDark}>
          Branch: {branch}
        </StyledText>
        <StyledText type="b"> {acc}</StyledText>
      </View>
    </View>
  );
};
