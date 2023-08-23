import React from "react";
import {
  CalendarComponent,
  Container,
  DonutChart,
  SalesCard,
  StockTable,
  Text,
} from "../../components";
import { TbCurrencyTaka } from "react-icons/tb";
import { HiOutlineStatusOnline, HiOutlineStatusOffline } from "react-icons/hi";

const data = [
  {
    id: 1,
    "Product Name": "Product 1",
    "DagonBhuiyan Stock": 100,
    "Feni Stock": 200,
    "Total Stock": 300,
  },
  {
    id: 2,
    "Product Name": "Product 2",
    "DagonBhuiyan Stock": 150,
    "Feni Stock": 180,
    "Total Stock": 330,
  },
  {
    id: 3,
    "Product Name": "Product 3",
    "DagonBhuiyan Stock": 120,
    "Feni Stock": 250,
    "Total Stock": 370,
  },
  {
    id: 4,
    "Product Name": "Product 4",
    "DagonBhuiyan Stock": 90,
    "Feni Stock": 280,
    "Total Stock": 370,
  },
  {
    id: 5,
    "Product Name": "Product 5",
    "DagonBhuiyan Stock": 200,
    "Feni Stock": 150,
    "Total Stock": 350,
  },
  {
    id: 6,
    "Product Name": "Product 6",
    "DagonBhuiyan Stock": 170,
    "Feni Stock": 220,
    "Total Stock": 390,
  },
  {
    id: 7,
    "Product Name": "Product 7",
    "DagonBhuiyan Stock": 110,
    "Feni Stock": 260,
    "Total Stock": 370,
  },
  {
    id: 8,
    "Product Name": "Product 8",
    "DagonBhuiyan Stock": 130,
    "Feni Stock": 240,
    "Total Stock": 370,
  },
  {
    id: 9,
    "Product Name": "Product 9",
    "DagonBhuiyan Stock": 180,
    "Feni Stock": 190,
    "Total Stock": 370,
  },
  {
    id: 10,
    "Product Name": "Product 10",
    "DagonBhuiyan Stock": 160,
    "Feni Stock": 210,
    "Total Stock": 370,
  },
  {
    id: 11,
    "Product Name": "Product 11",
    "DagonBhuiyan Stock": 140,
    "Feni Stock": 230,
    "Total Stock": 370,
  },
  {
    id: 12,
    "Product Name": "Product 12",
    "DagonBhuiyan Stock": 190,
    "Feni Stock": 180,
    "Total Stock": 370,
  },
  {
    id: 13,
    "Product Name": "Product 13",
    "DagonBhuiyan Stock": 200,
    "Feni Stock": 170,
    "Total Stock": 370,
  },
  {
    id: 14,
    "Product Name": "Product 14",
    "DagonBhuiyan Stock": 120,
    "Feni Stock": 250,
    "Total Stock": 370,
  },
  {
    id: 15,
    "Product Name": "Product 15",
    "DagonBhuiyan Stock": 150,
    "Feni Stock": 220,
    "Total Stock": 370,
  },
  {
    id: 16,
    "Product Name": "Product 16",
    "DagonBhuiyan Stock": 170,
    "Feni Stock": 200,
    "Total Stock": 370,
  },
  {
    id: 17,
    "Product Name": "Product 17",
    "DagonBhuiyan Stock": 180,
    "Feni Stock": 190,
    "Total Stock": 370,
  },
  {
    id: 18,
    "Product Name": "Product 18",
    "DagonBhuiyan Stock": 130,
    "Feni Stock": 240,
    "Total Stock": 370,
  },
  {
    id: 19,
    "Product Name": "Product 19",
    "DagonBhuiyan Stock": 150,
    "Feni Stock": 220,
    "Total Stock": 370,
  },
  {
    id: 20,
    "Product Name": "Product 20",
    "DagonBhuiyan Stock": 200,
    "Feni Stock": 170,
    "Total Stock": 370,
  },
  {
    id: 21,
    "Product Name": "Product 21",
    "DagonBhuiyan Stock": 150,
    "Feni Stock": 220,
    "Total Stock": 370,
  },
  {
    id: 22,
    "Product Name": "Product 22",
    "DagonBhuiyan Stock": 140,
    "Feni Stock": 230,
    "Total Stock": 370,
  },
  {
    id: 23,
    "Product Name": "Product 23",
    "DagonBhuiyan Stock": 170,
    "Feni Stock": 200,
    "Total Stock": 370,
  },
  {
    id: 24,
    "Product Name": "Product 24",
    "DagonBhuiyan Stock": 180,
    "Feni Stock": 190,
    "Total Stock": 370,
  },
  {
    id: 25,
    "Product Name": "Product 25",
    "DagonBhuiyan Stock": 130,
    "Feni Stock": 240,
    "Total Stock": 370,
  },
  {
    id: 26,
    "Product Name": "Product 26",
    "DagonBhuiyan Stock": 120,
    "Feni Stock": 250,
    "Total Stock": 370,
  },
  {
    id: 27,
    "Product Name": "Product 27",
    "DagonBhuiyan Stock": 150,
    "Feni Stock": 220,
    "Total Stock": 370,
  },
  {
    id: 28,
    "Product Name": "Product 28",
    "DagonBhuiyan Stock": 140,
    "Feni Stock": 230,
    "Total Stock": 370,
  },
  {
    id: 29,
    "Product Name": "Product 29",
    "DagonBhuiyan Stock": 170,
    "Feni Stock": 200,
    "Total Stock": 370,
  },
  {
    id: 30,
    "Product Name": "Product 30",
    "DagonBhuiyan Stock": 180,
    "Feni Stock": 190,
    "Total Stock": 370,
  },
];

export const Overview = () => {
  return (
    <Container className={"3xl:mx-2"}>
      <div className="grid grid-rows-5 grid-cols-6 gap-3 h-full">
        <section className="grid grid-cols-3 3xl:grid-rows-5 grid-rows-4 gap-2 h-full col-span-4 row-span-1">
          <Text h2>Overview</Text>
          <div className="row-start-1 col-start-3 3xl:row-start-2 bg-foreground">
            This Week
          </div>
          <SalesCard
            icon={TbCurrencyTaka}
            type={"Total Sales"}
            amount={10000}
            className={"col-start-1 row-start-2 3xl:row-start-3"}
          />
          <SalesCard
            icon={HiOutlineStatusOnline}
            type={"Online Sales"}
            amount={6500}
            className={"col-start-2 row-start-2 3xl:row-start-3"}
          />
          <SalesCard
            icon={HiOutlineStatusOffline}
            type={"Offline Sales"}
            amount={3500}
            className={"col-start-3 3xl:row-start-3"}
          />
        </section>
        <section className="h-full row-span-4 col-span-4 rounded-lg">
          <StockTable data={data} />
        </section>
        <section className="bg-green-400 row-start-1 col-start-5 row-span-2 col-span-2 h-full rounded-lg"></section>
        <section className="col-start-5 row-span-3 col-span-2 rounded-lg flex items-end"></section>
      </div>
    </Container>
  );
};
