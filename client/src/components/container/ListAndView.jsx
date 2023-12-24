import { useEffect, useState } from "react";
import { textFormat } from "../../utils/textFormat";
import { Button } from "../button/Button";
import { ListCard } from "../card/ListCard";
import { Text } from "../text/Text";

const TabContent = ({ selectedOrder }) => {
  const [isDone, setIsDone] = useState(null);
  const [key, setKey] = useState(0);

  useEffect(() => {
    setIsDone(() =>
      selectedOrder && selectedOrder.status === "complete" ? "deactive" : "secondary"
    );
    setKey((prev) => prev + 1);
  }, [selectedOrder]);

  return (
    <div key={key} className="animate-enterFromLeft h-[500px] w-fit rounded-lg bg-foreground p-4">
      {selectedOrder ? (
        <div className="flex h-full flex-col justify-between">
          <div>
            <Text variant="titleMedium" type="sb" className={"text-neutral-400"}>
              Details
            </Text>
            <div className="my-4 w-full">
              {Object.entries(selectedOrder).map(([key, value]) => (
                <div key={key} className="3xl:mb-4 3xl:text-lg mb-2 flex font-semibold">
                  <div className="3xl:w-52 w-40 font-medium text-textColor-light">
                    {textFormat(key)}
                  </div>
                  {key === "status" ? (
                    <Button
                      className={"h-8 w-44 "}
                      onClick={() => {
                        setIsDone(isDone === "deactive" ? "secondary" : "deactive");
                      }}
                    >
                      {isDone === "deactive" ? "Done" : "Mark As Done"}
                    </Button>
                  ) : (
                    <div className="3xl:pl-0 w-60 pl-4">
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
            Click <span className="text-accent-secondary"> Details</span> to View Information
          </Text>
        </>
      )}
    </div>
  );
};

export const ListAndView = ({ data }) => {
  const [selectedOrder, setSelectedOrder] = useState(data[0]);

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  return (
    <>
      <div className="flex w-full justify-between gap-4">
        <div className="h-[90vh] w-fit overflow-auto overflow-x-hidden">
          {data.map((order, index) => (
            <ListCard
              key={index}
              data={order}
              status={order.status}
              onClick={() => handleOrderClick(order)}
            />
          ))}
        </div>
        {<TabContent selectedOrder={selectedOrder} />}
      </div>
    </>
  );
};
