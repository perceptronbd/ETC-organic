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
    <div
      className={cw(
        "grid grid-rows-5 grid-cols-2 gap-2 bg-foreground rounded-lg px-3 py-2 h-20 3xl:h-40",
        className
      )}
    >
      <Icon
        className={cw(
          "w-6 h-6 3xl:w-10 3xl:h-10 p-1 rounded-lg text-foreground 3xl:row-start-1 ",
          {
            "bg-yellow-500": type === "Total Sales",
            "bg-green-500": type === "Online Sales",
            "bg-red-500": type === "Offline Sales",
          }
        )}
      />
      <Text
        className={"3xl:row-end-6 text-textColor-light text-sm 3xl:text-lg"}
      >
        {type}
      </Text>

      <Text
        h2
        className={"3xl:font-bold 3xl:text-5xl row-end-4 3xl:row-start-3"}
      >
        {formattedAmount}
      </Text>
    </div>
  );
};
