import { View } from "native-base";
import React, { useState } from "react";
import { Image, Text } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { ScrollView } from "react-native-gesture-handler";
import { Avatar, Divider } from "react-native-paper";
import tailwind from "twrnc";
import { StyledButton, StyledText } from "../../../components";
import COLOR from "../../../constants/COLOR";

const addressInput = [
  {
    id: 0,
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
    id: 1,
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
];

export default function Page() {
  return (
    <View style={tailwind`flex-1 px-3 py-4`}>
      <View style={tailwind`flex items-center rounded-xl bg-white p-2`}>
        <Profile />
        <CSBandPoints />
        <Divider
          style={tailwind`border-0.5 w-full border border-[${COLOR.neutral}]`}
        />
        <NIDandAddress />
        <StyledButton width={"md"}>তথ্য সেভ করুন</StyledButton>
      </View>
      <StyledText
        variant="titleMedium"
        type="b"
        style={{
          marginTop: 20,
          marginLeft: 10,
        }}
      >
        অর্ডার সমূহ
      </StyledText>
      <ScrollView
        contentContainerStyle={{
          padding: 20,
          alignItems: "center",
          rowGap: 20,
        }}
      >
        <Text>profile</Text>
        <Text>profile</Text>
        <Text>profile</Text>
        <Text>profile</Text>
        <Text>profile</Text>
        <Text>profile</Text>
        <Text>profile</Text>
        <Text>profile</Text>
      </ScrollView>
    </View>
  );
}

const Profile = ({ source }) => {
  return (
    <View style={tailwind`w-full flex-row items-center gap-8 py-4`}>
      {source === undefined ? (
        <Avatar.Icon
          size={80}
          icon="account"
          color="white"
          style={tailwind`bg-[${COLOR.neutral}]`}
        />
      ) : (
        <Avatar.Image size={80} style={tailwind`bg-[${COLOR.neutral}]`} />
      )}
      <View>
        <StyledText variant="bodyLarge" type="b">
          User Name
        </StyledText>
        <StyledText>@userid_008</StyledText>
        <StyledText>Refer Code: 86571</StyledText>
      </View>
    </View>
  );
};

const CSBandPoints = () => {
  return (
    <View style={tailwind`w-full flex-row gap-4 py-4 `}>
      <View
        style={tailwind`w-40 flex-row items-center gap-2 border-2 px-4 py-2 border-[${COLOR.primary}] bg-[${COLOR.primaryLight}] rounded-xl`}
      >
        <StyledText variant="bodyLarge" type="b" color={COLOR.primary}>
          CSB:
        </StyledText>
        <StyledText>850</StyledText>
      </View>
      <View
        style={tailwind`w-40 flex-row items-center gap-2 border-2 px-4 py-2 border-[${COLOR.secondary}] bg-[${COLOR.secondaryLight}] rounded-xl`}
      >
        <StyledText variant="bodyLarge" type="b" color={COLOR.secondary}>
          Points:
        </StyledText>
        <StyledText>100</StyledText>
      </View>
    </View>
  );
};

const NIDandAddress = () => {
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");

  const NIDsrc = require("../../../assets/img/nid.jpg");

  return (
    <View style={tailwind`w-full justify-between py-4`}>
      <View>
        <StyledText variant="bodySmall">জাতীয় পরিচয়পত্রের ছবি</StyledText>
        <Image
          style={tailwind`h-24 w-44 rounded-md bg-[${COLOR.neutral}] border bg-opacity-50 border-[${COLOR.neutralDark}]`}
          source={NIDsrc}
          alt="NID"
        />
      </View>
      <View>
        {addressInput.map((input) => {
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
          ) : null;
        })}
      </View>
    </View>
  );
};
