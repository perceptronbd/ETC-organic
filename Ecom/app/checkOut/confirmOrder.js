import { router } from "expo-router";
import React from "react";
import { View } from "react-native";
import {
  DataTable,
  Divider,
  Modal,
  Portal,
  RadioButton,
} from "react-native-paper";
import tailwind from "twrnc";
import { StyledButton, StyledText } from "../../components";
import COLOR from "../../constants/COLOR";
import { formatNumbers } from "../../utils/formatNumbers";

const confirmOrder = () => {
  const [value, setValue] = React.useState("delivery");

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const onConfirm = () => {
    showModal();
  };

  const navigateToMyOrder = () => {
    router.push("checkOut/myOrders");
    setVisible(false);
  };

  return (
    <View style={tailwind`flex-1 justify-between p-4`}>
      <View style={tailwind`gap-4`}>
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
              <StyledText variant="titleMedium">Grand Total</StyledText>
              <StyledText variant="titleLarge" type="b">
                ৳ {formatNumbers(1840)}
              </StyledText>
            </View>
          </View>
        </View>
        <View style={tailwind`rounded-md bg-white p-4`}>
          <StyledText type="b">পেমেন্ট-এর মাধ্যম: ক্যাশ অন ডেলিভারি</StyledText>
          <RadioButton.Group
            onValueChange={(newValue) => setValue(newValue)}
            value={value}
          >
            <View style={tailwind`flex-row items-center`}>
              <RadioButton value="delivery" color={COLOR.tertiary} />
              <StyledText>ক্যাশ অন ডেলিভারি</StyledText>
            </View>
            <View style={tailwind`flex-row items-center`}>
              <RadioButton value="advance" color={COLOR.tertiary} />
              <StyledText>অগ্রিম পেমেন্ট</StyledText>
            </View>
          </RadioButton.Group>
        </View>
      </View>
      <StyledButton onPress={onConfirm}>কনফার্ম অর্ডার</StyledButton>

      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={{
            height: "40%",
            backgroundColor: "white",
            borderRadius: 10,
            padding: 50,
            margin: 20,
            justifyContent: "space-between",
          }}
        >
          <StyledText variant="titleLarge" type="b">
            অর্ডার কনফার্মেশন
          </StyledText>
          <View>
            <StyledText
              variant="titleMedium"
              type="b"
              style={{
                marginBottom: 2,
              }}
            >
              আপনার অর্ডার টি গ্রহণ করা হয়েছে
            </StyledText>
            <StyledText>
              অর্ডারের প্রোগ্রেস দেখতে প্রোফাইল সেকশনে গিয়ে মাই অর্ডার এ ক্লিক
              করুন
            </StyledText>
          </View>
          <StyledButton
            onPress={navigateToMyOrder}
            contentStyle={{
              width: 260,
            }}
          >
            মাই অর্ডার
          </StyledButton>
        </Modal>
      </Portal>
    </View>
  );
};

export default confirmOrder;
