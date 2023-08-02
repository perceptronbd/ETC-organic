import React, { useState } from "react";
import { Button, FormInput } from "../../components";

export const Login = () => {
  const [values, setValues] = useState({
    phoneNumber: "",
    password: "",
  });

  const inputs = [
    {
      id: "phoneNumber",
      name: "phoneNumber",
      type: "tel",
      placeholder: "Phone Number",
      required: true,
      pattern: "[0-9]{3}-[0-9]{2}-[0-9]{3}",
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
    console.log(values);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="bg-foreground w-[40%] h-[70%] p-8 rounded-xl flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full h-full justify-between items-center"
        >
          <div className="w-32 h-32 bg-accent-secondary rounded-md flex justify-center items-center">
            LOGO
          </div>
          <div className="flex flex-col ">
            <div className="font-semibold text-lg">Login</div>
            {inputs.map((input) => (
              <FormInput {...input} key={input.id} onChange={onChange} />
            ))}
          </div>
          <Button type="submit" className={"mb-6"}>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};
