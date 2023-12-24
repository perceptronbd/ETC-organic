import React from "react";
import { Container, ListAndView, Text } from "../../components";
import { ordersData1 } from "../../const/mockData";

export const Orders = () => {
  return (
    <Container className={"justify-start"}>
      <Text variant="titleSmall" type="m" className={"self-start"}>
        Orders
      </Text>

      <ListAndView data={ordersData1} />
    </Container>
  );
};
