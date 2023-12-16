import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import tailwind from "twrnc";
import COLOR from "../../constants/COLOR";
import { StyledText } from "../texts/StyledText";
<AntDesign name="closecircleo" size={24} color="black" />;

export const BankInfoCard = ({ bank, branch, acc }) => {
  const [isSelected, setSelection] = React.useState(false);

  return (
    <View
      style={tailwind`border bg-white border-[${COLOR.neutral}] w-60 rounded-lg p-2`}
    >
      <View style={tailwind`flex-row justify-between`}>
        <BouncyCheckbox
          size={20}
          fillColor={COLOR.tertiary}
          innerIconStyle={{
            borderWidth: 2,

            borderColor: isSelected ? COLOR.tertiary : COLOR.neutral,
          }}
          textStyle={{
            textDecorationLine: "none",
          }}
          onPress={(isChecked) => {
            setSelection(isChecked);
          }}
        />
        <AntDesign
          name="close"
          size={20}
          color="black"
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
