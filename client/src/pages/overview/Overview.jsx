import React from "react";
import {
  Container,
  DonutChart,
  Dropdown,
  SalesCard,
  StockTable,
  Text,
} from "../../components";
import { TbCurrencyTaka } from "react-icons/tb";
import { HiOutlineStatusOnline, HiOutlineStatusOffline } from "react-icons/hi";

const mostSold = [
  { name: "Product A", value: 500 },
  { name: "Product B", value: 600 },
  { name: "Product C", value: 300 },
  { name: "Product D", value: 900 },
  { name: "Product E", value: 100 },
];

const data = [
  {
    id: 1,
    "Product Title": "Product 1",
    Dagon: 100,
    Feni: 200,
    "Total Stock": 300,
  },
  {
    id: 2,
    "Product Title": "Product 2",
    Dagon: 150,
    Feni: 180,
    "Total Stock": 330,
  },
  {
    id: 3,
    "Product Title": "Product 3",
    Dagon: 120,
    Feni: 250,
    "Total Stock": 370,
  },
  {
    id: 4,
    "Product Title": "Product 4",
    Dagon: 90,
    Feni: 280,
    "Total Stock": 370,
  },
  {
    id: 5,
    "Product Title": "Product 5",
    Dagon: 200,
    Feni: 150,
    "Total Stock": 350,
  },
  {
    id: 6,
    "Product Title": "Product 6",
    Dagon: 170,
    Feni: 220,
    "Total Stock": 390,
  },
  {
    id: 7,
    "Product Title": "Product 7",
    Dagon: 110,
    Feni: 260,
    "Total Stock": 370,
  },
  {
    id: 8,
    "Product Title": "Product 8",
    Dagon: 130,
    Feni: 240,
    "Total Stock": 370,
  },
  {
    id: 9,
    "Product Title": "Product 9",
    Dagon: 180,
    Feni: 190,
    "Total Stock": 370,
  },
  {
    id: 10,
    "Product Title": "Product 10",
    Dagon: 160,
    Feni: 210,
    "Total Stock": 370,
  },
  {
    id: 11,
    "Product Title": "Product 11",
    Dagon: 140,
    Feni: 230,
    "Total Stock": 370,
  },
  {
    id: 12,
    "Product Title": "Product 12",
    Dagon: 190,
    Feni: 180,
    "Total Stock": 370,
  },
  {
    id: 13,
    "Product Title": "Product 13",
    Dagon: 200,
    Feni: 170,
    "Total Stock": 370,
  },
  {
    id: 14,
    "Product Title": "Product 14",
    Dagon: 120,
    Feni: 250,
    "Total Stock": 370,
  },
  {
    id: 15,
    "Product Title": "Product 15",
    Dagon: 150,
    Feni: 220,
    "Total Stock": 370,
  },
  {
    id: 16,
    "Product Title": "Product 16",
    Dagon: 170,
    Feni: 200,
    "Total Stock": 370,
  },
  {
    id: 17,
    "Product Title": "Product 17",
    Dagon: 180,
    Feni: 190,
    "Total Stock": 370,
  },
  {
    id: 18,
    "Product Title": "Product 18",
    Dagon: 130,
    Feni: 240,
    "Total Stock": 370,
  },
  {
    id: 19,
    "Product Title": "Product 19",
    Dagon: 150,
    Feni: 220,
    "Total Stock": 370,
  },
  {
    id: 20,
    "Product Title": "Product 20",
    Dagon: 200,
    Feni: 170,
    "Total Stock": 370,
  },
  {
    id: 21,
    "Product Title": "Product 21",
    Dagon: 150,
    Feni: 220,
    "Total Stock": 370,
  },
  {
    id: 22,
    "Product Title": "Product 22",
    Dagon: 140,
    Feni: 230,
    "Total Stock": 370,
  },
  {
    id: 23,
    "Product Title": "Product 23",
    Dagon: 170,
    Feni: 200,
    "Total Stock": 370,
  },
  {
    id: 24,
    "Product Title": "Product 24",
    Dagon: 180,
    Feni: 190,
    "Total Stock": 370,
  },
  {
    id: 25,
    "Product Title": "Product 25",
    Dagon: 130,
    Feni: 240,
    "Total Stock": 370,
  },
  {
    id: 26,
    "Product Title": "Product 26",
    Dagon: 120,
    Feni: 250,
    "Total Stock": 370,
  },
  {
    id: 27,
    "Product Title": "Product 27",
    Dagon: 150,
    Feni: 220,
    "Total Stock": 370,
  },
  {
    id: 28,
    "Product Title": "Product 28",
    Dagon: 140,
    Feni: 230,
    "Total Stock": 370,
  },
  {
    id: 29,
    "Product Title": "Product 29",
    Dagon: 170,
    Feni: 200,
    "Total Stock": 370,
  },
  {
    id: 30,
    "Product Title": "Product 30",
    Dagon: 180,
    Feni: 190,
    "Total Stock": 370,
  },
];

const recentSales = [
  {
    id: 1,
    name: "John Doe",
    productName: "Product 1",
    price: 100,
  },
  {
    id: 2,
    name: "John Doe",
    productName: "Product name is too long, very long",
    price: 100,
  },
  {
    id: 3,
    name: "Name is too long",
    productName: "Product 1",
    price: 100,
  },
  {
    id: 4,
    name: "Name and Product name is too long",
    productName: "Name and Product name is too long",
    price: 100,
  },
  {
    id: 5,

    name: "John Doe",
    productName: "Product 1",
    price: 100,
  },
  {
    id: 6,
    name: "John Doe",
    productName: "Product 1",
    price: 100,
  },
  {
    id: 7,
    name: "John Doe",
    productName: "Product 1",
    price: 100,
  },
];

const listItems = [
  {
    id: 1,
    title: "Today",
  },
  {
    id: 2,
    title: "Yesterday",
  },
  {
    id: 3,
    title: "Last 7 Days",
  },
  {
    id: 4,
    title: "Last 30 Days",
  },
];

export const Overview = () => {
  return (
    <Container className={"3xl:mx-2"}>
      <div className="grid grid-rows-5 grid-cols-6 gap-3 h-full">
        <section className=" grid grid-cols-3 3xl:grid-rows-5 grid-rows-4 gap-2 h-full col-span-4 row-span-1">
          <div className="row-start-1 col-span-3">
            <div className="flex justify-between">
              <Text h2>Overview</Text>
              <Dropdown listItem={listItems} />
            </div>
          </div>
          <SalesCard
            icon={TbCurrencyTaka}
            type={"Total Sales"}
            amount={10000}
            className={"col-start-1 row-start-2 "}
          />
          <SalesCard
            icon={HiOutlineStatusOnline}
            type={"Online Sales"}
            amount={6500}
            className={"col-start-2 row-start-2"}
          />
          <SalesCard
            icon={HiOutlineStatusOffline}
            type={"Offline Sales"}
            amount={3500}
            className={"col-start-3"}
          />
        </section>
        <section className="h-full row-span-4 col-span-4 rounded-lg">
          <StockTable data={data} />
        </section>
        <section className="bg-foreground row-start-1 col-start-5 row-span-3 3xl:row-span-2 3xl:row-start-1 col-span-2 h-full rounded-lg p-2">
          <div>
            <Text h2>Most Sold Products</Text>
            <Text className={"text-textColor-light text-sm"}>
              Piechart of 5 most sold products
            </Text>
          </div>
          <DonutChart data={mostSold} />
        </section>
        <section className="col-start-5 row-span-3 col-span-2 rounded-lg bg-foreground p-2">
          <Text h3>Recent Sales</Text>
          <div className="w-full max-h-[90%] overflow-y-auto">
            {recentSales.map((item, index) => (
              <section
                className="bg-background flex justify-between items-center p-2 rounded-md mb-0.5"
                key={index}
              >
                <Text className={"font-semibold"}>{item.name}</Text>
                <Text className={"text-textColor-light"}>
                  {item.productName}
                </Text>
                <Text className={"text-green-500  font-semibold"}>
                  {item.price}
                </Text>
              </section>
            ))}
          </div>
        </section>
      </div>
    </Container>
  );
};
