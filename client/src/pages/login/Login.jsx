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
    <div className="flex h-screen w-full items-center justify-center bg-muted">
      <div className="flex flex-col items-center justify-center rounded-[40px] bg-foreground p-24">
        <section className="flex flex-col gap-4 ">
          <img src="/logo192.png" alt="ETC Organic" width={100} height={100} />
          <span>
            <Text variant="headerMedium" className={"text-primary"}>
              ETC
            </Text>
            <Text variant="titleLarge" type={"b"} className={"text-secondary"}>
              Organic
            </Text>
          </span>
        </section>
        <form onSubmit={handleSubmit} className="flex w-full flex-col items-center">
          <div className="flex flex-col ">
            <Text variant="bodySmall" className={"text-textColor-light"}>
              Login
            </Text>
            {inputs.map((input) => (
              <FormInput {...input} key={input.id} onChange={onChange} label={input.placeholder} />
            ))}
          </div>
          <hr className="py-1 " />
          <Button type="submit" className={"w-40"}>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};
