import { withExpoSnack } from "nativewind";
import { View } from "react-native";
import { StyledComponent } from "nativewind";
import { StyledButton, StyledInput, StyledText } from "../components";
import { Avatar } from "react-native-paper";
import { Link, router } from "expo-router";
import COLOR from "../constants/COLOR";

const login = () => {
  const onLogin = () => {
    console.log("login");
    router.replace("/home");
  };

  return (
    <StyledComponent
      component={View}
      className="flex-1 items-center justify-center bg-background"
    >
      <StyledComponent
        component={View}
        className="items-center justify-center p-12"
      >
        <Avatar.Image
          size={100}
          style={{ backgroundColor: "none " }}
          source={require("../assets/logo/ETC.png")}
        />
        <StyledText type="b" variant="headlineSmall">
          ETC Organic
        </StyledText>
      </StyledComponent>
      <StyledComponent
        component={View}
        className="flex-3 w-full items-center my-4 justify-center"
      >
        <StyledText variant="titleMedium" type="b" className="w-72 ">
          Login
        </StyledText>
        <StyledInput label={"Phone Number"} mode={"outlined"} />
        <StyledInput label={"Password"} mode={"outlined"} />
      </StyledComponent>

      <StyledButton onPress={onLogin}>Login</StyledButton>

      <StyledText className="pt-2">
        Don't have an account?{" "}
        <StyledComponent
          component={Link}
          replace={true}
          href={"signUp"}
          className={`flex justify-center items-center`}
        >
          <StyledText
            style={{ color: COLOR.secondary }}
            type="b"
            className={`underline`}
          >
            Sign Up
          </StyledText>
        </StyledComponent>
      </StyledText>
    </StyledComponent>
  );
};
export default withExpoSnack(login);
