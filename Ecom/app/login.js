import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { Avatar } from "react-native-paper";
import tailwind from "twrnc";
import { loginUser } from "../api";
import {
  ContentModal,
  Loading,
  StyledButton,
  StyledInput,
  StyledText,
} from "../components";
import COLOR from "../constants/COLOR";
import { useModal } from "../hooks/useModal";

const inputFeilds = [
  {
    id: "mobileNumber",
    label: "Phone Number",
    mode: "outlined",
  },

  {
    id: "password",
    label: "Password",
    mode: "outlined",
  },
];

const login = () => {
  const [data, setData] = useState({
    mobileNumber: "",
    password: "",
  });

  const [errorMessages, setErrorMessages] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    visible: isError,
    hideModal: hideError,
    showModal: showError,
  } = useModal();

  useEffect(() => {
    const validateForm = () => {
      const validationErrors = {};

      if (!data.mobileNumber.trim()) {
        validationErrors.mobileNumber = "Mobile Number is required";
        setError(true);
      } else if (data.mobileNumber.length !== 11) {
        validationErrors.mobileNumber = "Mobile Number must be 11 digits";
        setError(true);
      } else if (data.mobileNumber[0] !== "0" || data.mobileNumber[1] !== "1") {
        validationErrors.mobileNumber = "Invalid Mobile Number";
        setError(true);
      } else {
        validationErrors.mobileNumber = null;
        setError(false);
      }

      if (!data.password.trim()) {
        validationErrors.password = "Password is required";
        setError(true);
      } else if (data.password.length < 6) {
        validationErrors.password = "Password must be at least 6 characters";
        setError(true);
      } else {
        validationErrors.password = null;
        setError(false);
      }

      setErrorMessages((prev) => ({
        ...prev,
        ...validationErrors,
      }));
    };
    validateForm();
  }, [data]);

  const handleChange = (id, text) => {
    setData((prev) => ({
      ...prev,
      [id]: text,
    }));
  };

  const onLogin = () => {
    if (error) return showError();
    console.log("onLogin data", data);
    try {
      loginUser(data).then((res) => {
        console.log("onLogin", res);
      });
    } catch (error) {
      console.log(error);
    }

    //router.push("/(drawer)/(tabs)/home");
  };

  return loading ? (
    <Loading />
  ) : (
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
        {inputFeilds.map((inputFeild, index) => (
          <StyledInput
            key={index}
            {...inputFeild}
            onChangeText={(text) => handleChange(inputFeild.id, text)}
          />
        ))}
      </View>

      <StyledButton width="md" height={"md"} onPress={onLogin}>
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
      <ContentModal visible={isError} hideModal={hideError}>
        <View style={tailwind`flex-row items-center gap-2 self-center`}>
          <MaterialIcons
            name="error-outline"
            size={24}
            style={tailwind`text-red-500`}
          />
          <StyledText
            variant="bodyLarge"
            type="b"
            style={{
              color: `red`,
            }}
          >
            Error!
          </StyledText>
        </View>
        {
          <>
            {Object.values(errorMessages).map(
              (error, index) =>
                error && (
                  <StyledText key={index} style={tailwind`text-center`}>
                    {error}
                  </StyledText>
                ),
            )}
          </>
        }
      </ContentModal>
    </View>
  );
};
export default login;
