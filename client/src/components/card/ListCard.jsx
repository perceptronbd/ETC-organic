import React, { useState } from "react";
import { Text } from "../text/Text";
import { Button } from "../button/Button";

export const ListCard = (props) => {
  const { data, onClick, status } = props;

  const [isDone, setIsDone] = useState(() =>
    status === "complete" ? "deactive" : "secondary"
  );

  return (
    <div className="flex w-[550px] 3xl:w-[740px] h-32 bg-foreground rounded-xl my-2 p-6 border-2 border-neutral-300">
      <div className="w-[60%] 3xl:w-[50%] grid grid-cols-2">
        <div>
          <Text className={"font-medium text-textColor-light"}>
            Customer Name
          </Text>
          <Text className={"font-medium text-textColor-light"}>Number</Text>
          <Text className={"font-medium text-textColor-light"}>
            Order Amount
          </Text>
        </div>
        <div>
          <Text className={"font-semibold"}>{data.customerName}</Text>
          <Text className={"font-semibold"}>{data.customerNumber}</Text>
          <Text className={"font-semibold"}>
            {data.orderAmount}
            <span className="text-accent-secondary"> BDT</span>
          </Text>
        </div>
      </div>
      <div className="w-[40%] 3xl:w-[50%] flex flex-col 3xl:flex-row justify-end items-end">
        <Button className={"h-8 w-44 mb-4  3xl:mb-0"} onClick={onClick}>
          Details
        </Button>
        {status && (
          <Button
            className={"h-8 w-44 3xl:ml-4"}
            variant={isDone}
            onClick={() => {
              setIsDone(isDone === "deactive" ? "secondary" : "deactive");
            }}
          >
            {isDone === "deactive" ? "Done" : "Mark As Done"}
          </Button>
        )}
      </div>
    </div>
  );
};
