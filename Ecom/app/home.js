import { withExpoSnack } from "nativewind";
import { View } from "react-native";
import { StyledComponent } from "nativewind";
import { StyledButton, StyledInput } from "../components";
import { Avatar, Text } from "react-native-paper";

const Home = () => {
  return (
    <StyledComponent
      component={View}
      className="flex-1 items-center justify-center bg-background"
    >
      <StyledComponent
        component={View}
        className="flex-3 w-full items-center justify-center"
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
        className="flex-3 w-full items-center my-8 justify-center"
      >
        <StyledInput label={"Phone Number"} mode={"outlined"} />
        <StyledInput label={"Password"} mode={"outlined"} />
      </StyledComponent>
      <StyledButton>Login</StyledButton>
    </StyledComponent>
  );
};
export default withExpoSnack(Home);
