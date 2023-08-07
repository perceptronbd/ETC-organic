import React from "react";
import { Container, Text } from "../../components";
import { Tabs } from "./Tabs";
import { Retail } from "./Retail";
import { Wholesale } from "./Wholesale";

const tabs = [
  {
    label: "Retail",
    content: <Retail />,
  },
  {
    label: "Wholesale",
    content: <Wholesale />,
  },
];

export const Sales = () => {
  return (
    <Container>
      <Text h1>Sales</Text>
      <Tabs tabs={tabs} />
    </Container>
  );
};
