import React from "react";
import { Container, ListCard, Text } from "../../components";

const orders = [
  {
    customerName: "Abdul Kuddus",
    customerNumber: "01711223344",
    orderAmount: "1200",
    date: "02 Jan 2023",
    address: "86, R.K Tower, Sonargaon Road, Banglamotor, Dhaka",
  },
  {
    customerName: "Ayesha Ahmed",
    customerNumber: "01899887766",
    orderAmount: "750",
    date: "10 Jan 2023",
    address: "42, Green Avenue, Gulshan, Dhaka",
  },
  {
    customerName: "Rahim Khan",
    customerNumber: "01674563210",
    orderAmount: "2200",
    date: "15 Jan 2023",
    address: "28, Red Plaza, Dhanmondi, Dhaka",
  },
  {
    customerName: "Sara Rahman",
    customerNumber: "01987654321",
    orderAmount: "1500",
    date: "20 Jan 2023",
    address: "10, Blue Tower, Uttara, Dhaka",
  },
  {
    customerName: "Nasir Uddin",
    customerNumber: "01555443322",
    orderAmount: "1800",
    date: "25 Jan 2023",
    address: "5, Yellow Lane, Mirpur, Dhaka",
  },
  // Add more entries...
];

export default orders;

export const SalesReport = () => {
  return (
    <Container>
      <Text h1>Sales Report</Text>
      <div className="flex">
        <div className="h-[90vh] overflow-x-auto pr-1">
          {orders.map((order) => (
            <ListCard key={order.customerName} data={order} />
          ))}
        </div>
        <div>p</div>
      </div>
    </Container>
  );
};
