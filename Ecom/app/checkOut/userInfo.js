import { router } from "expo-router";
import React, { useState } from "react";
import { View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { SelectList } from "react-native-dropdown-select-list";
import tailwind from "twrnc";
import { StyledButton, StyledInput, StyledText } from "../../components";
import COLOR from "../../constants/COLOR";

const userInfoInputFields = [
  {
    id: 1,
    label: "নাম*",
    placeholder: "আপনার নাম",
  },
  {
    id: 2,
    label: "ফোন নাম্বার*",
    placeholder: "আপনার ফোন নাম্বার",
  },
  {
    id: 3,
    label: "বিভাগ*",
    placeholder: "বিভাগ সিলেক্ট করুন",
    type: "select",
    items: [
      { key: "ঢাকা", value: "ঢাকা" },
      { key: "চট্টগ্রাম", value: "চট্টগ্রাম" },
      { key: "রাজশাহী", value: "রাজশাহী" },
      { key: "খুলনা", value: "খুলনা" },
      { key: "বরিশাল", value: "বরিশাল" },
      { key: "রংপুর", value: "রংপুর" },
      { key: "সিলেট", value: "সিলেট" },
      { key: "ময়মনসিংহ", value: "ময়মনসিংহ" },
    ],
  },
  {
    id: 4,
    label: "জেলা*",
    placeholder: "জেলা সিলেক্ট করুন",
    type: "sub-select",
    items: {
      ঢাকা: [
        { key: "ঢাকা", value: "ঢাকা" },
        { key: "গাজীপুর", value: "গাজীপুর" },
        { key: "কিশোরগঞ্জ", value: "কিশোরগঞ্জ" },
        { key: "মুন্সিগঞ্জ", value: "মুন্সিগঞ্জ" },
        { key: "নারায়ণগঞ্জ", value: "নারায়ণগঞ্জ" },
        { key: "নরসিংদী", value: "নরসিংদী" },
        { key: "ফরিদপুর", value: "ফরিদপুর" },
        { key: "টাঙ্গাইল", value: "টাঙ্গাইল" },
        { key: "মানিকগঞ্জ", value: "মানিকগঞ্জ" },
        { key: "রাজবাড়ি", value: "রাজবাড়ি" },
      ],
      চট্টগ্রাম: [
        { key: "চট্টগ্রাম", value: "চট্টগ্রাম" },
        { key: "বান্দরবান", value: "বান্দরবান" },
        { key: "ব্রাহ্মণবাড়িয়া", value: "ব্রাহ্মণবাড়িয়া" },
        { key: "চট্টগ্রাম", value: "চট্টগ্রাম" },
        { key: "বান্দরবান", value: "বান্দরবান" },
        { key: "ব্রাহ্মণবাড়িয়া", value: "ব্রাহ্মণবাড়িয়া" },
      ],
      রাজশাহী: [
        { key: "রাজশাহী", value: "রাজশাহী" },
        { key: "বগুড়া", value: "বগুড়া" },
        { key: "যশোর", value: "যশোর" },
        { key: "নাটোর", value: "নাটোর" },
        { key: "পাবনা", value: "পাবনা" },
        { key: "সিরাজগঞ্জ", value: "সিরাজগঞ্জ" },
      ],
      খুলনা: [
        { key: "খুলনা", value: "খুলনা" },
        { key: "বগুড়া", value: "বগুড়া" },
        { key: "যশোর", value: "যশোর" },
        { key: "নাটোর", value: "নাটোর" },
        { key: "পাবনা", value: "পাবনা" },
        { key: "সিরাজগঞ্জ", value: "সিরাজগঞ্জ" },
      ],
      বরিশাল: [
        { key: "বরিশাল", value: "বরিশাল" },
        { key: "বগুড়া", value: "বগুড়া" },
        { key: "যশোর", value: "যশোর" },
      ],
      রংপুর: [
        { key: "রংপুর", value: "রংপুর" },
        { key: "বগুড়া", value: "বগুড়া" },
        { key: "যশোর", value: "যশোর" },
      ],
      সিলেট: [
        { key: "সিলেট", value: "সিলেট" },
        { key: "বগুড়া", value: "বগুড়া" },
        { key: "যশোর", value: "যশোর" },
      ],
      ময়মনসিংহ: [
        { key: "ময়মনসিংহ", value: "ময়মনসিংহ" },
        { key: "বগুড়া", value: "বগুড়া" },
        { key: "যশোর", value: "যশোর" },
      ],
    },
  },
  {
    id: 5,
    label: "বিস্তারিত ঠিকানা*",
    placeholder: "আপনার বিস্তারিত ঠিকানা",
  },
  // {
  //   id: 6,
  //   label: "তথ্য গুলো সেভ করুন",
  //   type: "checkbox",
  // },
];

const userInfo = () => {
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [isSelected, setSelection] = useState(false);

  const handleSaveAndContinue = () => {
    console.log("Save and continue");
    router.push("/checkOut/confirmOrder");
  };

  return (
    <View style={tailwind`flex-1 px-4 py-4`}>
      <StyledText
        style={{
          marginBottom: 20,
        }}
      >
        দয়া করে সঠিক তথ্য দিন, আপনার দেয়া নাম-ঠিকানাতেই আপনার অর্ডার পাঠানো হবে।
      </StyledText>

      <View style={tailwind`flex-1 justify-between`}>
        <View>
          {userInfoInputFields.map((input) => {
            return input.type === "select" ? (
              <SelectList
                key={input.id}
                placeholder={input.placeholder}
                setSelected={(val) => setDivision(val)}
                data={input.items}
                save={division}
                boxStyles={{
                  marginTop: 8,
                  backgroundColor: "#fff",
                }}
                dropdownStyles={{
                  width: 300,
                }}
              />
            ) : input.type === "sub-select" ? (
              <SelectList
                key={input.id}
                placeholder={input.placeholder}
                setSelected={(val) => setDistrict(val)}
                data={input.items[division] || ["বিভাগ সিলেক্ট করুন"]}
                save={district}
                boxStyles={{
                  marginTop: 8,
                  backgroundColor: "#fff",
                }}
                dropdownStyles={{
                  width: 300,
                }}
              />
            ) : input.type === "checkbox" ? (
              <BouncyCheckbox
                key={input.id}
                size={25}
                text="তথ্য গুলো সেভ করুন"
                fillColor={COLOR.tertiary}
                style={{
                  marginTop: 10,
                  alignSelf: "flex-end",
                }}
                iconStyle={{
                  borderRadius: 5,
                }}
                innerIconStyle={{
                  borderWidth: 2,
                  borderRadius: 5,
                  borderColor: isSelected ? COLOR.tertiary : COLOR.neutral,
                }}
                textStyle={{
                  textDecorationLine: "none",
                }}
                onPress={(isChecked) => {
                  setSelection(isChecked);
                }}
              />
            ) : (
              <StyledInput
                key={input.id}
                mode="outlined"
                label={input.label}
                placeholder={input.placeholder}
                style={{
                  width: "100%",
                }}
              />
            );
          })}
        </View>
        <StyledButton height={"md"} onPress={handleSaveAndContinue}>
          পরের ধাপ
        </StyledButton>
      </View>
    </View>
  );
};

export default userInfo;
