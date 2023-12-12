import { Link, router } from "expo-router";
import { View } from "react-native";
import { Avatar } from "react-native-paper";
import { StyledButton, StyledInput, StyledText } from "../components";
import COLOR from "../constants/COLOR";

const inputFeilds = [
  {
    label: "Phone Number",
    mode: "outlined",
  },
  {
    label: "Name",
    mode: "outlined",
  },
  {
    label: "New Password",
    mode: "outlined",
  },
  {
    label: "Confirm Password",
    mode: "outlined",
  },
  {
    label: "Enter Ref Code",
    mode: "outlined",
  },
];

const signUp = () => {
  const onSignUp = () => {
    console.log("signUp");
    router.replace("/login");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLOR.background,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: 250,
        }}
      >
        <Avatar.Image
          size={100}
          style={{ backgroundColor: "none " }}
          source={require("../assets/logo/ETC.png")}
        />
        <StyledText type="b" variant="headlineSmall">
          ETC Organic
        </StyledText>
      </View>
      <View>
        <StyledText variant="titleMedium" type="b">
          Sign Up
        </StyledText>
        {inputFeilds.map((inputFeild, index) => (
          <StyledInput key={index} {...inputFeild} />
        ))}
      </View>
      <StyledButton
        style={{
          width: 300,
        }}
        onPress={onSignUp}
      >
        Sign Up
      </StyledButton>

      <StyledText className="pt-2">
        Already have an account?{" "}
        <Link replace={true} href={"login"}>
          <StyledText
            style={{ color: COLOR.secondary }}
            type="b"
            className={`underline`}
          >
            Login
          </StyledText>
        </Link>
      </StyledText>
    </View>
  );
};
export default signUp;
