import React, { useState } from "react";
import { Text } from "../text/Text";
import { Button } from "../button/Button";
import { textFormat } from "../../utils/textFormat";

export const ListCard = (props) => {
  const { data, onClick, status } = props;

  const [isDone, setIsDone] = useState(() =>
    status === "complete" ? "deactive" : "secondary"
  );

  const firstThreeKeys = Object.keys(data).slice(0, 3);

  return (
    <div className="flex w-[550px] 3xl:w-[740px] h-32 bg-foreground rounded-xl my-2 p-6 border-2 border-neutral-300">
      <div className="grid grid-rows-3">
        {firstThreeKeys.map((key) => (
          <div className="flex" key={key}>
            <Text className={"w-44 text-textColor-light"}>
              {textFormat(key)}
            </Text>
            <Text className={"w-36 font-semibold"}>{data[key]}</Text>
          </div>
        ))}
      </div>
      <div className="w-[40%] 3xl:w-[50%] flex flex-col 3xl:flex-row justify-end items-end">
        <Button className={"h-8 w-44  3xl:mb-0"} onClick={onClick}>
          Details
        </Button>
        {status && (
          <Button
            className={"h-8 w-44 3xl:ml-4 mt-4"}
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
