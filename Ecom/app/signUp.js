import { withExpoSnack } from "nativewind";
import { View } from "react-native";
import { StyledComponent } from "nativewind";
import { StyledButton, StyledInput } from "../components";
import { Avatar, Text } from "react-native-paper";
import { Link } from "expo-router";
import COLOR from "../constants/COLOR";

const signUp = () => {
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
        <Text variant="headlineSmall"> ETC Organic</Text>
      </StyledComponent>
      <StyledComponent
        component={View}
        className="flex-3 w-full items-center my-4 justify-center"
      >
        <StyledComponent
          component={Text}
          variant="titleMedium"
          className="w-72 font-bold"
        >
          Sign Up
        </StyledComponent>
        <StyledInput label={"Phone Number"} mode={"outlined"} />
        <StyledInput label={"Name"} mode={"outlined"} />
        <StyledInput label={"New Password"} mode={"outlined"} />
        <StyledInput label={"Confirm Password"} mode={"outlined"} />
      </StyledComponent>
      <StyledButton>Sign Up</StyledButton>

      <StyledComponent component={Text} className="pt-2">
        Already have an account?{" "}
        <StyledComponent
          component={Link}
          href={"login"}
          className={`flex justify-center items-center`}
        >
          <StyledComponent
            component={Text}
            style={{ color: COLOR.secondary }}
            className={`font-bold underline`}
          >
            Login
          </StyledComponent>
        </StyledComponent>
      </StyledComponent>
    </StyledComponent>
  );
};
export default withExpoSnack(signUp);
