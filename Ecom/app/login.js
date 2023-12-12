import { Link, router } from "expo-router";
import { View } from "react-native";
import { Avatar } from "react-native-paper";
import { StyledButton, StyledInput, StyledText } from "../components";
import COLOR from "../constants/COLOR";

const login = () => {
  const onLogin = () => {
    console.log("login");
    router.push("/(tabs)");
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
        <StyledText variant="titleMedium" type="b" className="w-72 ">
          Login
        </StyledText>
        <StyledInput label={"Phone Number"} mode={"outlined"} />
        <StyledInput label={"Password"} mode={"outlined"} />
      </View>

      <StyledButton
        style={{
          width: 300,
        }}
        onPress={onLogin}
      >
        Login
      </StyledButton>

      <StyledText className="pt-2">
        Don&apos;t have an account?{" "}
        <Link
          replace={true}
          href={"signUp"}
          className={`flex items-center justify-center`}
        >
          <StyledText
            style={{ color: COLOR.secondary }}
            type="b"
            className={`underline`}
          >
            Sign Up
          </StyledText>
        </Link>
      </StyledText>
    </View>
  );
};
export default login;
