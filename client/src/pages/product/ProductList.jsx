import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Text } from "../../components";
import { productData } from "../../const/mockData";
import { Table } from "./Table";

export const ProductList = () => {
  return (
    <Container className={"flex-col justify-start"}>
      <div className="mb-2 flex w-full items-center justify-between">
        <Text variant="titleSmall" type="m">
          Product List
        </Text>
        <Button variant={"ghost"} asChild>
          <Link to={"add-product"}>Edit Product</Link>
        </Button>
      </div>
      <Table data={productData} />
    </Container>
  );
};
