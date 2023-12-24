import React, { useState } from "react";
import { textFormat } from "../../utils/textFormat";
import { Button } from "../button/Button";
import { Text } from "../text/Text";

export const ListCard = (props) => {
  const { data, onClick, status } = props;

  const [isDone, setIsDone] = useState(() => (status === "complete" ? "outline" : "primary"));

  const firstThreeKeys = Object.keys(data).slice(0, 3);

  return (
    <div className="my-2 flex  h-32 w-[550px] rounded-md border border-neutral-200 bg-foreground p-6">
      <div className="grid grid-rows-3">
        {firstThreeKeys.map((key) => (
          <div className="flex" key={key}>
            <Text className={"w-44 text-textColor-light"}>{textFormat(key)}</Text>
            <Text className={"w-36 font-semibold"}>{data[key]}</Text>
          </div>
        ))}
      </div>
      <div className="3xl:w-[50%] 3xl:flex-row flex w-[40%] flex-col items-end justify-end">
        <Button className={"3xl:mb-0 h-8  w-44"} onClick={onClick}>
          Details
        </Button>
        {status && (
          <Button
            className={"3xl:ml-4 mt-4 h-8 w-44"}
            variant={isDone}
            onClick={() => {
              setIsDone(isDone === "outline" ? "primary" : "outline");
            }}
          >
            {isDone === "outline" ? "Done" : "Mark As Done"}
          </Button>
        )}
      </div>
    </div>
  );
};
