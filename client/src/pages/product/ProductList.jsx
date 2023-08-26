import React from "react";
import { LinkButton, Text } from "../../components";
import { Container } from "../../components/container/Container";
import { Table } from "./Table";

export const ProductList = () => {
  const data = [
    {
      sn: 1,
      name: "Product 1",
      imgUrl: "",
      "sales price": 500,
      csb: 100,
      points: 40,
      description:
        "Loremipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      sn: 2,
      name: "Product 2",
      imgUrl: "",
      "sales price": 500,
      csb: 100,
      points: 40,
      description:
        "Loremipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      sn: 3,
      name: "Product 3",
      imgUrl: "https://picsum.photos/200/300",
      "sales price": 500,
      csb: 100,
      points: 40,
      description:
        "Loremipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      sn: 4,
      name: "Product 4",
      imgUrl: "",
      "sales price": 500,
      csb: 100,
      points: 40,
      description:
        "Loremipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      sn: 5,
      name: "Product 5",
      imgUrl: "",
      "sales price": 500,
      csb: 100,
      points: 40,
      description:
        "Loremipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    // Add more products here...
    {
      sn: 6,
      name: "Product 6",
      imgUrl: "",
      "sales price": 500,
      csb: 100,
      points: 40,
      description:
        "Loremipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      sn: 7,
      name: "Product 7",
      imgUrl: "",
      "sales price": 500,
      csb: 100,
      points: 40,
      description:
        "Loremipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      sn: 8,
      name: "Product 8",
      imgUrl: "",
      "sales price": 500,
      csb: 100,
      points: 40,
      description:
        "Loremipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      sn: 9,
      name: "Product 9",
      imgUrl: "",
      "sales price": 500,
      csb: 100,
      points: 40,
      description:
        "Loremipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      sn: 10,
      name: "Product 10",
      imgUrl: "",
      "sales price": 500,
      csb: 100,
      points: 40,
      description:
        "Loremipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      sn: 11,
      name: "Product 11",
      imgUrl: "",
      "sales price": 500,
      csb: 100,
      points: 40,
      description:
        "Loremipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      sn: 12,
      name: "Product 12",
      imgUrl: "",
      "sales price": 500,
      csb: 100,
      points: 40,
      description:
        "Loremipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      sn: 13,
      name: "Product 13",
      imgUrl: "",
      "sales price": 500,
      csb: 100,
      points: 40,
      description:
        "Loremipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      sn: 14,
      name: "Product 14",
      imgUrl: "",
      "sales price": 500,
      csb: 100,
      points: 40,
      description:
        "Loremipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      sn: 15,
      name: "Product 15",
      imgUrl: "",
      "sales price": 500,
      csb: 100,
      points: 40,
      description:
        "Loremipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      sn: 16,
      name: "Product 16",
      imgUrl: "",
      "sales price": 500,
      csb: 100,
      points: 40,
      description:
        "Loremipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      sn: 17,
      name: "Product 17",
      imgUrl: "",
      "sales price": 500,
      csb: 100,
      points: 40,
      description:
        "Loremipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      sn: 18,
      name: "Product 18",
      imgUrl: "",
      "sales price": 500,
      csb: 100,
      points: 40,
      description:
        "Loremipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      sn: 19,
      name: "Product 19",
      imgUrl: "",
      "sales price": 500,
      csb: 100,
      points: 40,
      description:
        "Loremipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      sn: 20,
      name: "Product 20",
      imgUrl: "",
      "sales price": 500,
      csb: 100,
      points: 40,
      description:
        "Loremipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
  ];

  return (
    <Container className="w-full m-4 3xl:mx-28">
      <div className="flex justify-between mb-10">
        <Text h1>Product List</Text>
        <LinkButton to={"add-product"} className={`h-8`}>
          Add Product
        </LinkButton>
      </div>
      <Table data={data} />
    </Container>
  );
};
