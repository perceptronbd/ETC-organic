import React, { useState } from "react";
import { Button, FormInput, Text } from "../../components";
import { useAuth } from "../../context/AuthContext";

export const Login = () => {
  const [values, setValues] = useState({
    phoneNumber: "",
    password: "",
  });

  const { login } = useAuth();

  const inputs = [
    {
      id: "phoneNumber",
      name: "phoneNumber",
      type: "tel",
      placeholder: "Phone Number",
      required: true,
      pattern: "[0-9]{11}",
      errorMessage: "Please enter a valid phone number",
    },
    {
      id: "password",
      name: "password",
      type: "password",
      placeholder: "Password",
      required: true,
      errorMessage: "Please enter a valid password",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    login(values);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="bg-foreground w-[50%] h-[90%] 3xl:w-[752px] 3xl:h-[630px] p-8 rounded-[40px] flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full h-full items-center"
        >
          <div className="w-32 h-32 m-16 bg-accent-secondary rounded-md flex justify-center items-center">
            LOGO
          </div>
          <div className="flex flex-col ">
            <Text h3>Login</Text>
            {inputs.map((input) => (
              <FormInput
                {...input}
                key={input.id}
                onChange={onChange}
                label={input.placeholder}
              />
            ))}
          </div>
          <hr className="py-4 " />
          <Button type="submit" className={"mb-6"}>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};
