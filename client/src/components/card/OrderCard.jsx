import React, { useState } from "react";
import { textFormat } from "../../utils/textFormat";
import { Button } from "../button/Button";
import { Text } from "../text/Text";

export const OrderCard = ({
  data,
  onClick,
  onCancel,
  onComplete,
  selectedOrder,
  setViewLoading,
}) => {
  const { status } = data;
  const [isComplete, setIsComplete] = useState(status === "complete" ? true : false);
  const [loading, setLoading] = useState(false);

  const firstThreeKeys = Object.keys(data).slice(0, 3);

  //see if the selected order is the same as the order card
  const isSelected = selectedOrder === data;

  const handleComplete = () => {
    setLoading(true);
    setViewLoading(true);
    setTimeout(() => {
      setIsComplete(true);
      setLoading(false);
      setViewLoading(false);
    }, 1000);
    onComplete();
  };

  return (
    <div
      onClick={onClick}
      className={`my-2 flex h-28 justify-between rounded-md border-2 ${
        isSelected ? "border-accent" : "border-neutral-200"
      } bg-foreground p-6`}
    >
      <div className="grid grid-rows-3">
        {firstThreeKeys.map((key) => (
          <div className="flex" key={key}>
            <Text className={"w-44 text-sm text-textColor-light"}>{textFormat(key)}</Text>
            <Text className={"w-36 text-sm font-semibold"}>{data[key]}</Text>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-start gap-2">
        <Button
          className="h-8 w-32"
          loading={loading}
          disabled={isComplete}
          onClick={handleComplete}
        >
          {isComplete ? "Completed" : "Complete"}
        </Button>
        <Button variant="destructive" className="h-8 w-32" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
};
