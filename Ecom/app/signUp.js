import { withExpoSnack } from "nativewind";
import { View } from "react-native";
import { StyledComponent } from "nativewind";
import { StyledButton, StyledInput, StyledText } from "../components";
import { Avatar } from "react-native-paper";
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
        <StyledText type="b" variant="headlineSmall">
          ETC Organic
        </StyledText>
      </StyledComponent>
      <StyledComponent
        component={View}
        className="flex-3 w-full items-center my-4 justify-center"
      >
        <StyledText variant="titleMedium" type="b" className="w-72 ">
          Sign Up
        </StyledText>
        <StyledInput label={"Phone Number"} mode={"outlined"} />
        <StyledInput label={"Name"} mode={"outlined"} />
        <StyledInput label={"New Password"} mode={"outlined"} />
        <StyledInput label={"Confirm Password"} mode={"outlined"} />
        <StyledInput label={"Enter Ref Code"} mode={"outlined"} />
      </StyledComponent>
      <StyledButton>Sign Up</StyledButton>

      <StyledText className="pt-2">
        Already have an account?{" "}
        <StyledComponent
          component={Link}
          href={"login"}
          className={`flex justify-center items-center`}
        >
          <StyledText
            style={{ color: COLOR.secondary }}
            type="b"
            className={`underline`}
          >
            Login
          </StyledText>
        </StyledComponent>
      </StyledText>
    </StyledComponent>
  );
};
export default withExpoSnack(signUp);
