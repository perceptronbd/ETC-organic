import React from "react";
import { Container } from "./container/Container";
import { Input } from "./input/Input";

export const Component = () => {
  return (
    <Container className={"flex justify-center items-center"}>
      <Input />
    </Container>
  );
};
