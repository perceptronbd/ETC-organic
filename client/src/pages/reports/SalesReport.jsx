import React from "react";
import { Container, ListAndView, Text } from "../../components";
import { ordersData } from "../../const/mockData";

export const SalesReport = () => {
  return (
    <Container className={"justify-start"}>
      <Text variant="titleSmall" type="m" className={"self-start"}>
        Sales Report
      </Text>

      <ListAndView data={ordersData} />
    </Container>
  );
};
