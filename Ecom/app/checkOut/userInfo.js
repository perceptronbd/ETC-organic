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
      { key: "DHK", value: "ঢাকা" },
      { key: "CTG", value: "চট্টগ্রাম" },
      { key: "RAJ", value: "রাজশাহী" },
      { key: "KHL", value: "খুলনা" },
      { key: "BRS", value: "বরিশাল" },
      { key: "RGP", value: "রংপুর" },
      { key: "SLT", value: "সিলেট" },
      { key: "MYM", value: "ময়মনসিংহ" },
    ],
  },
  {
    id: 4,
    label: "জেলা*",
    placeholder: "জেলা সিলেক্ট করুন",
    type: "sub-select",
    items: {
      DHK: [
        { key: "DHA", value: "ঢাকা" },
        { key: "GZP", value: "গাজীপুর" },
        { key: "KRB", value: "কিশোরগঞ্জ" },
        { key: "MUN", value: "মুন্সিগঞ্জ" },
        { key: "NRS", value: "নারায়ণগঞ্জ" },
        { key: "NRY", value: "নরসিংদী" },
        { key: "FRI", value: "ফরিদপুর" },
        { key: "TNG", value: "টাঙ্গাইল" },
        { key: "MYP", value: "মানিকগঞ্জ" },
        { key: "RJB", value: "রাজবাড়ি" },
        { key: "GZP", value: "গাজীপুর" },
        { key: "NRS", value: "নারায়ণগঞ্জ" },
        { key: "NRY", value: "নরসিংদী" },
        { key: "FRI", value: "ফরিদপুর" },
        { key: "TNG", value: "টাঙ্গাইল" },
        { key: "MYP", value: "মানিকগঞ্জ" },
        { key: "RJB", value: "রাজবাড়ি" },
      ],
      CTG: [
        { key: "CTG", value: "চট্টগ্রাম" },
        { key: "BND", value: "বান্দরবান" },
        { key: "BRA", value: "ব্রাহ্মণবাড়িয়া" },
        { key: "CTG", value: "চট্টগ্রাম" },
        { key: "BND", value: "বান্দরবান" },
        { key: "BRA", value: "ব্রাহ্মণবাড়িয়া" },
      ],
      RAJ: [
        { key: "RJS", value: "রাজশাহী" },
        { key: "BGR", value: "বগুড়া" },
        { key: "JSP", value: "যশোর" },
        { key: "NAT", value: "নাটোর" },
        { key: "PBN", value: "পাবনা" },
        { key: "SIR", value: "সিরাজগঞ্জ" },
        { key: "RJS", value: "রাজশাহী" },
        { key: "BGR", value: "বগুড়া" },
        { key: "JSP", value: "যশোর" },
        { key: "NAT", value: "নাটোর" },
        { key: "PBN", value: "পাবনা" },
        { key: "SIR", value: "সিরাজগঞ্জ" },
      ],
      KHL: [
        { key: "KHL", value: "খুলনা" },
        { key: "BGR", value: "বগুড়া" },
        { key: "JSP", value: "যশোর" },
        { key: "NAT", value: "নাটোর" },
        { key: "PBN", value: "পাবনা" },
        { key: "SIR", value: "সিরাজগঞ্জ" },
        { key: "KHL", value: "খুলনা" },
        { key: "BGR", value: "বগুড়া" },
        { key: "JSP", value: "যশোর" },
        { key: "NAT", value: "নাটোর" },
        { key: "PBN", value: "পাবনা" },
        { key: "SIR", value: "সিরাজগঞ্জ" },
      ],
      BRS: [
        { key: "BRS", value: "বরিশাল" },
        { key: "BGR", value: "বগুড়া" },
        { key: "JSP", value: "যশোর" },
        { key: "NAT", value: "নাটোর" },
        { key: "PBN", value: "পাবনা" },
        { key: "SIR", value: "সিরাজগঞ্জ" },
        { key: "BRS", value: "বরিশাল" },
        { key: "BGR", value: "বগুড়া" },
        { key: "JSP", value: "যশোর" },
        { key: "NAT", value: "নাটোর" },
        { key: "PBN", value: "পাবনা" },
        { key: "SIR", value: "সিরাজগঞ্জ" },
      ],
      RGP: [
        { key: "RGP", value: "রংপুর" },
        { key: "BGR", value: "বগুড়া" },
        { key: "JSP", value: "যশোর" },
        { key: "NAT", value: "নাটোর" },
        { key: "PBN", value: "পাবনা" },
        { key: "SIR", value: "সিরাজগঞ্জ" },
        { key: "RGP", value: "রংপুর" },
        { key: "BGR", value: "বগুড়া" },
        { key: "JSP", value: "যশোর" },
        { key: "NAT", value: "নাটোর" },
        { key: "PBN", value: "পাবনা" },
        { key: "SIR", value: "সিরাজগঞ্জ" },
      ],
      SLT: [
        { key: "SLT", value: "সিলেট" },
        { key: "BGR", value: "বগুড়া" },
        { key: "JSP", value: "যশোর" },
        { key: "NAT", value: "নাটোর" },
        { key: "PBN", value: "পাবনা" },
        { key: "SIR", value: "সিরাজগঞ্জ" },
        { key: "SLT", value: "সিলেট" },
        { key: "BGR", value: "বগুড়া" },
        { key: "JSP", value: "যশোর" },
        { key: "NAT", value: "নাটোর" },
        { key: "PBN", value: "পাবনা" },
        { key: "SIR", value: "সিরাজগঞ্জ" },
      ],
      MYM: [
        { key: "MYM", value: "ময়মনসিংহ" },
        { key: "BGR", value: "বগুড়া" },
        { key: "JSP", value: "যশোর" },
        { key: "NAT", value: "নাটোর" },
        { key: "PBN", value: "পাবনা" },
        { key: "SIR", value: "সিরাজগঞ্জ" },
        { key: "MYM", value: "ময়মনসিংহ" },
        { key: "BGR", value: "বগুড়া" },
        { key: "JSP", value: "যশোর" },
        { key: "NAT", value: "নাটোর" },
        { key: "PBN", value: "পাবনা" },
        { key: "SIR", value: "সিরাজগঞ্জ" },
      ],
    },
  },
  {
    id: 5,
    label: "বিস্তারিত ঠিকানা*",
    placeholder: "আপনার বিস্তারিত ঠিকানা",
  },
  {
    id: 6,
    label: "তথ্য গুলো সেভ করুন",
    type: "checkbox",
  },
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
