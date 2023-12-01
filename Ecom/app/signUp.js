import { View } from "react-native";
import { StyledButton, StyledInput, StyledText } from "../components";
import { Avatar } from "react-native-paper";
import { Link, router } from "expo-router";
import COLOR from "../constants/COLOR";

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
        <StyledInput label={"Phone Number"} mode={"outlined"} />
        <StyledInput label={"Name"} mode={"outlined"} />
        <StyledInput label={"New Password"} mode={"outlined"} />
        <StyledInput label={"Confirm Password"} mode={"outlined"} />
        <StyledInput label={"Enter Ref Code"} mode={"outlined"} />
      </View>
      <StyledButton onPress={onSignUp}>Sign Up</StyledButton>

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
