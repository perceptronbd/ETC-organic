import React, { useEffect, useState } from "react";
import { textFormat } from "../../utils/textFormat";
import { Button, Container, ListCard, Text } from "../../components";

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
  // 10 more entries with status: false
  {
    customerName: "John Doe",
    customerNumber: "01234567890",
    orderAmount: "850",
    date: "28 Jan 2023",
    address: "123 Main Street, Cityville, Dhaka",
  },
  {
    customerName: "Jane Smith",
    customerNumber: "01987654321",
    orderAmount: "1600",
    date: "05 Feb 2023",
    address: "456 Elm Avenue, Townsville, Dhaka",
  },
  {
    customerName: "David Johnson",
    customerNumber: "01555443322",
    orderAmount: "2000",
    date: "12 Feb 2023",
    address: "789 Oak Road, Villagetown, Dhaka",
  },
  {
    customerName: "Emily Brown",
    customerNumber: "01711223344",
    orderAmount: "1200",
    date: "18 Feb 2023",
    address: "101 Pine Lane, Countryside, Dhaka",
  },
  {
    customerName: "Michael Wilson",
    customerNumber: "01899887766",
    orderAmount: "750",
    date: "25 Feb 2023",
    address: "555 Maple Street, Suburbia, Dhaka",
  },
  {
    customerName: "Jessica Davis",
    customerNumber: "01674563210",
    orderAmount: "3000",
    date: "03 Mar 2023",
    address: "777 Birch Avenue, Metroville, Dhaka",
  },
];

const TabContent = ({ selectedOrder }) => {
  const [isDone, setIsDone] = useState(null);

  useEffect(() => {
    setIsDone(() =>
      selectedOrder && selectedOrder.status === "complete"
        ? "deactive"
        : "secondary"
    );
  }, [selectedOrder]);

  return (
    <div className="w-[400px] 3xl:w-[500px] h-[500px] bg-neutral-200 rounded-lg p-4">
      {selectedOrder ? (
        <div className="flex flex-col h-full justify-between">
          <div>
            <Text h2>Details</Text>
            <div className="w-full my-4">
              {Object.entries(selectedOrder).map(([key, value]) => (
                <div
                  key={key}
                  className="flex font-semibold mb-2 3xl:mb-4 3xl:text-lg"
                >
                  <div className="w-40 3xl:w-52 text-textColor-light font-medium">
                    {textFormat(key)}
                  </div>
                  {key === "status" ? (
                    <Button
                      className={"h-8 w-44 "}
                      variant={isDone}
                      onClick={() => {
                        setIsDone(
                          isDone === "deactive" ? "secondary" : "deactive"
                        );
                      }}
                    >
                      {isDone === "deactive" ? "Done" : "Mark As Done"}
                    </Button>
                  ) : (
                    <div className="w-60 pl-4 3xl:pl-0">
                      {key === "status"
                        ? // Display the status from the selectedOrder object
                          selectedOrder.status
                        : // Display other values
                          value}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          <Text h1 className={"text-textColor-light"}>
            Click <span className="text-accent-secondary"> Details</span> to
            View Information
          </Text>
        </>
      )}
    </div>
  );
};

export const SalesReport = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  return (
    <Container>
      <Text h1>Sales Report</Text>
      <div className="flex">
        <div className="w-[560px] 3xl:w-[750px] h-[90vh] overflow-x-auto pr-1 mr-2">
          {orders.map((order) => (
            <ListCard
              key={order.customerName}
              data={order}
              status={order.status}
              onClick={() => handleOrderClick(order)}
            />
          ))}
        </div>
        {<TabContent selectedOrder={selectedOrder} />}
      </div>
    </Container>
  );
};
