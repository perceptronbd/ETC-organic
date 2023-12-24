import React from "react";
import { Container, ListAndView, Text } from "../../components";
import { userData } from "../../const/mockData";

export const PurchaseReport = () => {
  return (
    <Container className={"justify-start"}>
      <Text variant="titleSmall" type="m" className={"self-start"}>
        Purchase Report
      </Text>
      <ListAndView data={userData} />
    </Container>
  );
};
