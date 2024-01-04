import { router, useLocalSearchParams } from "expo-router";
import React, { useContext, useEffect } from "react";
import { View } from "react-native";
import {
  DataTable,
  Divider,
  Modal,
  Portal,
  RadioButton,
} from "react-native-paper";
import tailwind from "twrnc";
import { placeOrder } from "../../api";
import { StyledButton, StyledText } from "../../components";
import COLOR from "../../constants/COLOR";
import CartContext from "../../contexts/CartContext";
import { formatNumbers } from "../../utils/formatNumbers";

const confirmOrder = () => {
  const [value, setValue] = React.useState("delivery");

  const [visible, setVisible] = React.useState(false);

  const data = useLocalSearchParams();

  const { cart } = useContext(CartContext);

  useEffect(() => {
    console.log("...confirmOrder useEffect start...");
    cart.products?.map((item) => {
      console.log(item.product);
      console.log(item.product.productName);
      console.log(item.quantity);
      console.log(item.product.salesPrice);
      console.log(item.product.salesPrice * item.quantity);
    });
    console.log("...confirmOrder useEffect end...");
  }, []);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const onConfirm = async () => {
    try {
      placeOrder(data).then((res) => {
        console.log("...confirmOrder onConfirm res:", res);
        const { status } = res;
        if (status === 201) {
          console.log("...confirmOrder onConfirm status:", status);
          showModal();
        } else {
          console.log("...confirmOrder onConfirm status:", status);
        }
      });
    } catch (error) {
      console.log("...confirmOrder onConfirm error:", error);
    }
    showModal();
  };

  const navigateToMyOrder = () => {
    router.push("/(drawer)/(tabs)/home");
    setVisible(false);
  };

  return (
    <View style={tailwind`flex-1 justify-between p-4`}>
      <View style={tailwind`gap-4`}>
        <View style={tailwind`rounded-md bg-white`}>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title style={{ flex: 2 }}>Item Name</DataTable.Title>
              <DataTable.Title numeric>QTY</DataTable.Title>
              <DataTable.Title numeric>Price</DataTable.Title>
              <DataTable.Title numeric>T. Price</DataTable.Title>
            </DataTable.Header>
            {cart.products?.map((item) => {
              return (
                <DataTable.Row key={item._id}>
                  <DataTable.Cell style={{ flex: 2 }}>
                    {item.product.productName}
                  </DataTable.Cell>
                  <DataTable.Cell numeric>
                    {formatNumbers(item.quantity)}
                  </DataTable.Cell>
                  <DataTable.Cell numeric>
                    ৳ {formatNumbers(item.product.salesPrice)}
                  </DataTable.Cell>
                  <DataTable.Cell numeric>
                    ৳ {formatNumbers(item.product.salesPrice * item.quantity)}
                  </DataTable.Cell>
                </DataTable.Row>
              );
            })}
          </DataTable>
          <Divider />
          {/* Total Price */}
          <View style={tailwind`p-4`}>
            <View style={tailwind`mb-4 flex-row justify-between`}>
              <StyledText>Sub Total</StyledText>
              <StyledText type="b">
                ৳ {formatNumbers(cart.totalPrice)}
              </StyledText>
            </View>
            <View style={tailwind`flex-row justify-between`}>
              <StyledText>+Delivery Charge</StyledText>
              <StyledText type="b">৳ {formatNumbers(60)}</StyledText>
            </View>
          </View>
          <Divider />
          {/* Grand Total */}
          <View style={tailwind`p-4`}>
            <View style={tailwind`flex-row justify-between`}>
              <StyledText variant="titleMedium">Grand Total</StyledText>
              <StyledText variant="titleLarge" type="b">
                ৳ {formatNumbers(cart.totalPrice + 60)}
              </StyledText>
            </View>
          </View>
        </View>
        {/* Payment type */}
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
              <RadioButton value="advance" color={COLOR.neutral} disabled />
              <StyledText color={COLOR.neutralDark}>অগ্রিম পেমেন্ট</StyledText>
            </View>
          </RadioButton.Group>
        </View>
      </View>
      {/* Confirm Order */}
      <StyledButton onPress={onConfirm}>কনফার্ম অর্ডার</StyledButton>
      <ConfirmationModel
        visible={visible}
        hideModal={hideModal}
        navigateToMyOrder={navigateToMyOrder}
      />
    </View>
  );
};

const ConfirmationModel = ({ visible, hideModal, navigateToMyOrder }) => {
  return (
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
            আপনার অর্ডার আগামী ৩ দিনের মধ্যে ডেলিভার করা হবে. অর্ডারের প্রোগ্রেস
            দেখতে প্রোফাইল সেকশনে গিয়ে মাই অর্ডার এ ক্লিক করুন।
          </StyledText>
        </View>
        <StyledButton onPress={navigateToMyOrder} width={"sm"}>
          ঠিক আছে
        </StyledButton>
      </Modal>
    </Portal>
  );
};

export default confirmOrder;
