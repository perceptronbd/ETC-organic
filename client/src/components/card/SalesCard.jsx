import React, { useEffect, useState } from "react";
import { cw } from "../../utils/cw";
import { Text } from "../text/Text";

export const SalesCard = (props) => {
  const [count, setCount] = useState(0);

  const { className, icon: Icon, type, amount } = props;
  const isValidAmount = typeof amount === "number" && !isNaN(amount);
  const formattedAmount = isValidAmount ? count.toLocaleString() : "N/A";

  useEffect(() => {
    let startCount = 0;
    const endCount = amount;
    const animationDuration = 1000; // Adjust the animation duration as needed
    const totalSteps = 50; // Adjust the number of steps as needed

    const increment = Math.ceil(endCount / totalSteps);

    const timer = setInterval(() => {
      startCount += increment;
      if (startCount >= endCount) {
        clearInterval(timer);
        startCount = endCount;
      }
      setCount(startCount);
    }, animationDuration / totalSteps);

    return () => clearInterval(timer);
  }, [amount]);

  return (
    <div className={cw("bg-foreground rounded-lg px-3 py-2", className)}>
      {Icon && (
        <Icon
          className={cw("w-8 h-8 mb-3 p-1 rounded-lg text-foreground", {
            "bg-yellow-500": type === "Total Sales",
            "bg-green-500": type === "Online Sales",
            "bg-red-500": type === "Offline Sales",
          })}
        />
      )}
      <Text h1>{formattedAmount}</Text>
      <Text className={"text-textColor-light text-sm rounded-full"}>
        {type}
      </Text>
    </div>
  );
};
