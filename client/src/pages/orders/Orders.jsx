import React from "react";
import { Container, ListAndView, Text } from "../../components";

const orders = [
  {
    customerName: "Abdul Kuddus",
    customerNumber: "01711223344",
    orderAmount: "1200",
    date: "02 Jan 2023",
    address: "86, R.K Tower, Sonargaon Road, Banglamotor, Dhaka",
    status: "incomplete",
  },
  {
    customerName: "Ayesha Ahmed",
    customerNumber: "01899887766",
    orderAmount: "750",
    date: "10 Jan 2023",
    address: "42, Green Avenue, Gulshan, Dhaka",
    status: "complete",
  },
  {
    customerName: "Rahim Khan",
    customerNumber: "01674563210",
    orderAmount: "2200",
    date: "15 Jan 2023",
    address: "28, Red Plaza, Dhanmondi, Dhaka",
    status: "complete",
  },
  {
    customerName: "Sara Rahman",
    customerNumber: "01987654321",
    orderAmount: "1500",
    date: "20 Jan 2023",
    address: "10, Blue Tower, Uttara, Dhaka",
    status: "complete",
  },
  {
    customerName: "Nasir Uddin",
    customerNumber: "01555443322",
    orderAmount: "1800",
    date: "25 Jan 2023",
    address: "5, Yellow Lane, Mirpur, Dhaka",
    status: "complete",
  },
  {
    customerName: "John Doe",
    customerNumber: "01234567890",
    orderAmount: "850",
    date: "28 Jan 2023",
    address: "123 Main Street, Cityville, Dhaka",
    status: "complete",
  },
  {
    customerName: "Jane Smith",
    customerNumber: "01987654321",
    orderAmount: "1600",
    date: "05 Feb 2023",
    address: "456 Elm Avenue, Townsville, Dhaka",
    status: "complete",
  },
  {
    customerName: "David Johnson",
    customerNumber: "01555443322",
    orderAmount: "2000",
    date: "12 Feb 2023",
    address: "789 Oak Road, Villagetown, Dhaka",
    status: "incomplete",
  },
  {
    customerName: "Emily Brown",
    customerNumber: "01711223344",
    orderAmount: "1200",
    date: "18 Feb 2023",
    address: "101 Pine Lane, Countryside, Dhaka",
    status: "complete",
  },
  {
    customerName: "Michael Wilson",
    customerNumber: "01899887766",
    orderAmount: "750",
    date: "25 Feb 2023",
    address: "555 Maple Street, Suburbia, Dhaka",
    status: "complete",
  },
  {
    customerName: "Jessica Davis",
    customerNumber: "01674563210",
    orderAmount: "3000",
    date: "03 Mar 2023",
    address: "777 Birch Avenue, Metroville, Dhaka",
    status: "complete",
  },
];

export const Orders = () => {
  return (
    <Container>
      <Text h1>Sales Report</Text>

      <ListAndView data={orders} />
    </Container>
  );
};
