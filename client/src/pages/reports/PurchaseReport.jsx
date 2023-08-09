import React from "react";
import { Container, ListAndView, Text } from "../../components";

const mockData = [
  {
    supplierName: "Abdul Kuddus",
    number: "01712244605",
    purchaseAmount: "1200 BDT",
    transportation: "200 BDT",
    purchasingCost: "200 BDT",
  },
  {
    supplierName: "Ayesha Ahmed",
    number: "01899887766",
    purchaseAmount: "750 BDT",
    transportation: "100 BDT",
    purchasingCost: "150 BDT",
  },
  {
    supplierName: "Rahim Khan",
    number: "01674563210",
    purchaseAmount: "2200 BDT",
    transportation: "300 BDT",
    purchasingCost: "250 BDT",
  },
  {
    supplierName: "Sara Rahman",
    number: "01987654321",
    purchaseAmount: "1500 BDT",
    transportation: "150 BDT",
    purchasingCost: "180 BDT",
  },
  {
    supplierName: "Nasir Uddin",
    number: "01555443322",
    purchaseAmount: "1800 BDT",
    transportation: "250 BDT",
    purchasingCost: "220 BDT",
  },
  {
    supplierName: "John Doe",
    number: "01234567890",
    purchaseAmount: "850 BDT",
    transportation: "100 BDT",
    purchasingCost: "120 BDT",
  },
  {
    supplierName: "Jane Smith",
    number: "01987654321",
    purchaseAmount: "1600 BDT",
    transportation: "180 BDT",
    purchasingCost: "200 BDT",
  },
  {
    supplierName: "David Johnson",
    number: "01555443322",
    purchaseAmount: "2000 BDT",
    transportation: "220 BDT",
    purchasingCost: "270 BDT",
  },
  {
    supplierName: "Emily Brown",
    number: "01711223344",
    purchaseAmount: "1200 BDT",
    transportation: "150 BDT",
    purchasingCost: "180 BDT",
  },
  {
    supplierName: "Michael Wilson",
    number: "01899887766",
    purchaseAmount: "750 BDT",
    transportation: "80 BDT",
    purchasingCost: "100 BDT",
  },
  {
    supplierName: "Jessica Davis",
    number: "01674563210",
    purchaseAmount: "3000 BDT",
    transportation: "350 BDT",
    purchasingCost: "320 BDT",
  },
];

export const PurchaseReport = () => {
  return (
    <Container>
      <Text h1>Purchase Report</Text>
      <ListAndView data={mockData} />
    </Container>
  );
};
