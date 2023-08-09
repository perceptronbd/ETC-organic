import { useEffect, useState } from "react";
import { Text } from "../text/Text";
import { ListCard } from "../card/ListCard";
import { textFormat } from "../../utils/textFormat";
import { Button } from "../button/Button";

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

export const ListAndView = ({ data }) => {
  const [selectedOrder, setSelectedOrder] = useState(data[0]);

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  return (
    <>
      <div className="flex">
        <div className="w-[560px] 3xl:w-[750px] h-[90vh] overflow-x-auto pr-1 mr-2">
          {data.map((order) => (
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
    </>
  );
};
