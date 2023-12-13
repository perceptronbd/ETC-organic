import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useContext, useState } from "react";
import { Image, ScrollView, View } from "react-native";
import { Modal, Portal } from "react-native-paper";
import tailwind from "twrnc";
import { Counter, StyledButton, StyledText } from "../components";
import COLOR from "../constants/COLOR";
import CartContext from "../contexts/CartContext";
import { useCustomToast } from "../hooks";

const productDetails = () => {
  const { updateProductDetails } = useContext(CartContext);
  const showToast = useCustomToast();

  const [quantity, setQuantity] = useState(0);

  const navigate = useNavigation();

  const item = useLocalSearchParams();

  // useEffect(() => {
  //   console.log("item", item);

  //   return () => {
  //     console.log("call API to save the data");
  //   };
  // }, []);

  const onAddToCart = () => {
    if (quantity === 0) {
      showToast({
        description: "Please select quantity",
        variant: "warning",
        placement: "top",
      });
      return;
    }
    showToast({
      description: "Added to cart",
      variant: "success",
    });
    updateProductDetails({ ...item, quantity });

    // updateProductDetails({
    //   id: item.id,
    //   quantity,
    // });

    navigate.goBack();
  };

  return (
    <View style={tailwind`flex-1 items-center justify-between p-4`}>
      <View>
        <ProductImage image={item.img} name={item.name} />
        <Points points={item.points} />
        <ProductDetails
          title={item.name}
          price={item.price}
          details={item.details}
          csb={item.csb}
        />
      </View>
      {/* Add to cart */}
      <View style={tailwind`w-full`}>
        <Counter value={quantity} setValue={setQuantity} />
        <View style={tailwind`mb-8 mt-4 flex-row gap-2`}>
          <StyledText variant="bodyMedium">ডেলিভারি ডেডলাইন:</StyledText>
          <StyledText variant="bodyMedium" type="b">
            2 Days
          </StyledText>
        </View>

        <StyledButton variant={"outline"} onPress={onAddToCart}>
          Add to Cart
        </StyledButton>
      </View>
    </View>
  );
};

const ProductImage = ({ image, name }) => {
  return (
    <View
      style={tailwind`bg-[${COLOR.foreground}] mb-4 h-56 items-center justify-center rounded-md p-2`}
    >
      <Image source={image} alt={name} />
    </View>
  );
};

const Points = ({ points }) => {
  return (
    <View style={tailwind`mb-1 flex-row items-center justify-start gap-1`}>
      <MaterialIcons name="stars" size={15} color={COLOR.tertiary} />
      <StyledText
        type="b"
        variant="titleMedium"
        style={tailwind`text-[${COLOR.tertiary}]`}
      >
        {points}
      </StyledText>
      <StyledText
        variant="bodySmall"
        style={tailwind`text-[${COLOR.tertiary}]`}
      >
        points
      </StyledText>
    </View>
  );
};

const ProductDetails = ({ title, price, details, csb }) => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <>
      <View style={tailwind` mb-4 flex-row items-end justify-between`}>
        {/* Name */}
        <StyledText variant="titleLarge" type="b">
          {title}
        </StyledText>
        <View style={tailwind``}>
          {/* Price */}
          <StyledText variant="titleLarge">৳ {price}</StyledText>
        </View>
      </View>
      {/* Details */}
      <ScrollView
        style={tailwind.style(``, {
          maxHeight: 100,
        })}
      >
        <StyledText variant="bodySmall" type="b">
          Details:
        </StyledText>
        <StyledText variant="bodySmall">{details}</StyledText>
      </ScrollView>

      {/* CSB */}
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={{
            height: "80%",
            backgroundColor: "white",
            borderRadius: 10,
            padding: 20,
            margin: 20,
          }}
        >
          <ScrollView>
            <StyledText
              variant="titleMedium"
              type="b"
              style={{ marginBottom: 10 }}
            >
              CSB সুবিধাসমূহ
            </StyledText>
            <StyledText variant="bodyMedium" style={{ marginBottom: 10 }}>
              অ্যাপ থেকে পারচেজ করলেই মোট CSB এর ৫০% আপনার Wallet এ জমা হয়ে যাবে
            </StyledText>
            <StyledText variant="bodyMedium" style={{ marginBottom: 10 }}>
              পরবর্তিতে সকল CSB খুব সহজেই টাকা তে Redeem করতে পারবেন এবং
              প্রয়োজনে Cash Withdraw করতে পারবেন
            </StyledText>
            <StyledText variant="bodyMedium" style={{ marginBottom: 10 }}>
              আমাদের Refer & Earn প্রোগ্রামের মাধ্যমে কোন User যদি আপনাকে Refer
              করে থাকে, আপনার প্রতি পারচেজে তার Wallet-এ মোট CSB-এর ২৫% জমা হয়ে
              যাবে
            </StyledText>
            <StyledText variant="bodyMedium" style={{ marginBottom: 10 }}>
              ঠিক একই ভাবে আপনি যদি কোন ব্যাক্তি কে আমাদের অ্যাপ-এ Sign Up করার
              জন্য Refer করে থাকেন, তার প্রতি পারচেজে সেই নির্দিষ্ট প্রোডাক্ট এর
              মোট CSB-এর ২৫% জমা হয়ে যাবে আপনার Wallet-এ
            </StyledText>
            <StyledText variant="bodyMedium" style={{ marginBottom: 10 }}>
              এখানেই শেষ নয়, আপনি যাকে Refer করেছেন, তিনিও যদি কাউকে রেফার করেন,
              তবে সেই তৃতীয় ব্যাক্তির প্রতিটি পারচেজে আপনার Wallet-এ ১০% CSB জমা
              হয়ে যাবে।
            </StyledText>
            <StyledText variant="bodyMedium" style={{ marginBottom: 10 }}>
              Refer-এর প্রতিটি ধাপ কে আমরা বলি ‘Generation’, অর্থাৎ প্রথম
              ব্যাক্তি যখন দ্বিতীয় বাক্তি কে Refer করে, সেটা হলো 1st Generation,
              দ্বিতীয় ব্যাক্তি যখন তৃতীয় ব্যাক্তি কে রেফার করে সেটা হলো 2nd
              Generation
            </StyledText>
            <StyledText variant="bodyMedium" style={{ marginBottom: 10 }}>
              1st Generation 25%, 2nd Generation 10%, 3rd Generation 5%, 4th
              Generation 3%, 5th Generation 2%, 6th Generation 1%
            </StyledText>
            <StyledText variant="bodyMedium" style={{ marginBottom: 10 }}>
              এভাবে মোট ৬ টি Generation এর ইনকাম নিশ্চিত করুন আপনার একটি Refer
              এর মাধ্যমে
            </StyledText>
            <StyledText variant="bodyMedium" style={{ marginBottom: 10 }}>
              Wallet Active করতে মিনিমান ১০০ CSB প্রডাক্ট পারচেজ করুন, এবং আজীবন
              ইনকাম করার সুযোগ বুঝে নিন
            </StyledText>
          </ScrollView>
        </Modal>
      </Portal>
      <View style={tailwind`flex-row items-center justify-end gap-2`}>
        <MaterialCommunityIcons
          name="alert-circle-outline"
          size={20}
          color="gray"
          onPress={showModal}
        />
        <StyledText variant="titleLarge">{csb} CSB</StyledText>
      </View>
    </>
  );
};

export default productDetails;
