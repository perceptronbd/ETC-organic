import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";
import { View } from "native-base";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { ScrollView } from "react-native-gesture-handler";
import { Avatar, Button, DataTable, Divider } from "react-native-paper";
import tailwind from "twrnc";
import { updateProfile } from "../../../api/user/authUser";
import {
  Loading,
  MessageModal,
  StyledButton,
  StyledText,
} from "../../../components";
import COLOR from "../../../constants/COLOR";
import { useImage } from "../../../hooks";
import { useAuth } from "../../../hooks/useAuth";
import { useModal } from "../../../hooks/useModal";
import { formatNumbers } from "../../../utils/formatNumbers";

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
  const [data, setData] = useState({
    image: null,
    nationalImage: null,
    division: "",
    district: "",
  });

  const { user, loading } = useAuth();
  const { imageUrl: profileImage, setImage: setProfileImage } = useImage(
    user?.userDetails.image,
  );
  const { imageUrl: nationalIdImage, setImage: setNationalIdImage } = useImage(
    user?.userDetails.nationalIdImage,
  );

  const { visible, showModal, hideModal, isError, modalMessage } = useModal();

  const pickAndUploadImage = async () => {
    console.log("openImagePickerAsync...");
    try {
      let permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (permissionResult.granted === false) {
        alert("Permission to access camera roll is required!");
        return;
      }
      let pickerResult = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      if (!pickerResult.canceled) {
        AsyncStorage.getItem("user-token").then((token) => {
          FileSystem.uploadAsync(
            "http://192.168.0.110:5000/mobile/update-image",
            pickerResult.assets[0].uri,
            {
              httpMethod: "POST",
              uploadType: FileSystem.FileSystemUploadType.MULTIPART,
              fieldName: "image",
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          ).then((uploadResult) => {
            const body = uploadResult.body;
            const imageURL = JSON.parse(body).imagePath;
            console.log("uploadResult:", imageURL);
            setProfileImage(imageURL);
          });
        });
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  const pickAndUploadNID = async () => {
    console.log("openImagePickerAsync...");
    try {
      let permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (permissionResult.granted === false) {
        alert("Permission to access camera roll is required!");
        return;
      }
      let pickerResult = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [6, 3],
        quality: 1,
      });
      if (!pickerResult.canceled) {
        console.log("pickerResult:", pickerResult);
        AsyncStorage.getItem("user-token").then((token) => {
          FileSystem.uploadAsync(
            "http://192.168.0.110:5000/mobile/update-national-image",
            pickerResult.assets[0].uri,
            {
              httpMethod: "POST",
              uploadType: FileSystem.FileSystemUploadType.MULTIPART,
              fieldName: "nationalIdImage",
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          ).then((uploadResult) => {
            const body = uploadResult.body;
            const imageURL = JSON.parse(body).imagePath;
            console.log("uploadResult:", imageURL);
            setNationalIdImage(imageURL);
          });
        });
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  const handleSubmit = async () => {
    console.log("handleSubmit:", data);

    //validate checks before submitting the form
    if (data.image === null) {
      showModal("Please select profile image ", true);
      return;
    }
    if (data.nationalImage === null) {
      showModal("Please select NID ", true);
      return;
    }
    if (data.division === "") {
      showModal("Please select a division", true);
      return;
    }
    if (data.district === "") {
      showModal("Please select a district", true);
      return;
    }

    try {
      AsyncStorage.getItem("user-token").then((token) => {
        try {
          const formData = new FormData();
          console.log(formData);
          formData.append("image", {
            uri: data.image.uri,
            type: data.image.type,
            name: "image",
          });
          formData.append("nationalIdImage", {
            uri: data.nationalImage.uri,
            type: data.nationalImage.type,
            name: "nationalIdImage",
          });
          formData.append("division", data.division);
          formData.append("district", data.district);
          console.log(formData);

          updateProfile(token, formData).then((res) => {
            console.log("updateProfile res:", res);
          });
        } catch (error) {
          console.log(error);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return loading ? (
    <Loading isLoading={loading} />
  ) : (
    <ScrollView style={tailwind`flex-1 px-3 py-4`}>
      <View style={tailwind`flex items-center rounded-xl bg-white p-2`}>
        <Profile
          source={profileImage}
          name={user?.name}
          phone={user?.mobileNumber}
          refCode={user?.referralCode}
          CSB={user?.CSB}
          points={user?.points}
          pickImage={pickAndUploadImage}
        />
        <Divider style={tailwind`w-full border border-[${COLOR.neutral}]`} />
        <NIDandAddress
          pickNID={pickAndUploadNID}
          nidImage={nationalIdImage}
          setData={setData}
        />
        <StyledButton width={"md"} onPress={handleSubmit}>
          তথ্য সেভ করুন
        </StyledButton>
      </View>
      <Orders />
      <MessageModal
        isError={isError}
        visible={visible}
        hideModal={hideModal}
        modalMessag={modalMessage}
      />
    </ScrollView>
  );
}

const Profile = ({ source, name, phone, refCode, CSB, points, pickImage }) => {
  return (
    <View style={tailwind`w-full flex-row items-start gap-8 py-1`}>
      <View style={tailwind`flex`}>
        {source === undefined || source === null ? (
          <Avatar.Icon
            size={80}
            icon="account"
            color="white"
            style={tailwind`bg-[${COLOR.neutral}]`}
          />
        ) : (
          <Avatar.Image
            size={80}
            style={tailwind`bg-[${COLOR.neutral}]`}
            //source={{ uri: `data:image/jpeg;base64,${source}` }}
            source={{ uri: source }}
          />
        )}
        <Button onPress={pickImage}>
          Edit <Feather name="edit" size={15} color={COLOR.primary} />
        </Button>
      </View>
      <View style={tailwind`flex gap-1`}>
        <StyledText variant="bodyLarge" type="b">
          {name}
        </StyledText>
        <StyledText>{phone}</StyledText>
        <View
          style={tailwind`flex-row items-center justify-between gap-2 px-2 bg-[${COLOR.primaryLight}] rounded-md`}
        >
          <StyledText variant="bodySmall">Refer Code:</StyledText>
          <StyledText type="b" color={COLOR.primary}>
            {refCode}
          </StyledText>
        </View>
        <View
          style={tailwind`w-32 flex-row items-center justify-between gap-2 px-2 bg-[${COLOR.secondaryLight}] rounded-md`}
        >
          <StyledText variant="bodySmall">CSB:</StyledText>
          <StyledText type="b" color={COLOR.secondary}>
            {CSB === undefined ? 0 : CSB}
          </StyledText>
        </View>
        <View
          style={tailwind`w-32 flex-row items-center justify-between gap-2  px-2 bg-[${COLOR.secondaryLight}] rounded-md`}
        >
          <StyledText variant="bodySmall">Points:</StyledText>
          <StyledText type="b" color={COLOR.secondary}>
            {points === undefined ? 0 : points}
          </StyledText>
        </View>
      </View>
    </View>
  );
};

const NIDandAddress = ({ pickNID, setData, nidImage }) => {
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");

  useEffect(() => {
    setData((prev) => ({
      ...prev,
      division,
      district,
    }));
  }, [division, district]);

  return (
    <View style={tailwind`w-full justify-between py-4`}>
      <View style={tailwind`flex items-start`}>
        <StyledText variant="bodySmall">জাতীয় পরিচয়পত্রের ছবি</StyledText>
        <Image
          style={tailwind`h-52 w-full rounded-md bg-[${COLOR.neutral}] border bg-opacity-50 border-[${COLOR.neutralDark}]`}
          source={{ uri: nidImage }}
          alt="NID"
        />
        <Button onPress={pickNID}>
          Upload NID <Feather name="edit" size={15} color={COLOR.primary} />
        </Button>
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

const Orders = () => {
  return (
    <View>
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
      <View
        style={{
          paddingHorizontal: 10,
          paddingTop: 10,
          maxHeight: 700,
          rowGap: 20,
        }}
      >
        <StyledText
          variant="bodySmall"
          style={{
            marginBottom: -10,
          }}
        >
          পেন্ডিং অর্ডার
        </StyledText>
        <ScrollView
          contentContainerStyle={{
            rowGap: 10,
          }}
        >
          <OrderCard />
          <OrderCard />
          <OrderCard />
        </ScrollView>
        <StyledText
          variant="bodySmall"
          style={{
            marginBottom: -10,
          }}
        >
          কমপ্লিটেড অর্ডার
        </StyledText>
        <ScrollView
          contentContainerStyle={{
            rowGap: 10,
          }}
        >
          <OrderCard />
          <OrderCard />
          <OrderCard />
        </ScrollView>
      </View>
    </View>
  );
};

const OrderCard = () => {
  return (
    <View style={tailwind`rounded-md bg-white`}>
      <DataTable>
        <DataTable.Header style={{}}>
          <DataTable.Title style={{ flex: 2 }}>Item Name</DataTable.Title>
          <DataTable.Title numeric>QTY</DataTable.Title>
          <DataTable.Title numeric>Price</DataTable.Title>
          <DataTable.Title numeric>T. Price</DataTable.Title>
        </DataTable.Header>
        <DataTable.Row>
          <DataTable.Cell style={{ flex: 2 }}>তুলশী বীজ জুস</DataTable.Cell>
          <DataTable.Cell numeric>{formatNumbers(2)}</DataTable.Cell>
          <DataTable.Cell numeric>৳ {formatNumbers(420)}</DataTable.Cell>
          <DataTable.Cell numeric>৳ {formatNumbers(840)}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell style={{ flex: 2 }}>তুলশী বীজ জুস</DataTable.Cell>
          <DataTable.Cell numeric>{formatNumbers(2)}</DataTable.Cell>
          <DataTable.Cell numeric>৳ {formatNumbers(420)}</DataTable.Cell>
          <DataTable.Cell numeric>৳ {formatNumbers(840)}</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
      <Divider />
      <View style={tailwind`p-4`}>
        <View style={tailwind`mb-4 flex-row justify-between`}>
          <StyledText>Sub Total</StyledText>
          <StyledText type="b">৳ {formatNumbers(1840)}</StyledText>
        </View>
        <View style={tailwind`flex-row justify-between`}>
          <StyledText>+Delivery Charge</StyledText>
          <StyledText type="b">৳ {formatNumbers(60)}</StyledText>
        </View>
      </View>
      <Divider />
      <View style={tailwind`p-4`}>
        <View style={tailwind`flex-row justify-between`}>
          <StyledText variant="titleSmall" type="b">
            Grand Total
          </StyledText>
          <StyledText variant="titleMedium" type="b">
            ৳ {formatNumbers(1840)}
          </StyledText>
        </View>
      </View>
    </View>
  );
};
