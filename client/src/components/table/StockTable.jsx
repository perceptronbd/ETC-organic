import React from "react";
import { Text } from "../text/Text";

export const StockTable = ({ data }) => {
  return (
    <>
      {data ? (
        <article className=" rounded-lg bg-foreground pt-4 pl-1 pb-1">
          <Text h3 className={"mx-6"}>
            Stock Quantity
          </Text>
          <div className="w-full max-h-[480px] 3xl:max-h-[780px] overflow-y-auto rounded-lg">
            <table className="w-full border-collapse">
              <thead className="text-xs text-textColor-light uppercase border-b-2 border-background  bg-foreground  sticky top-0">
                <tr className="w-[900px]">
                  {Object.keys(data[0]).map((item, index) =>
                    item === "id" ? (
                      ""
                    ) : (
                      <th
                        className="p-4 font-medium whitespace-nowrap text-left"
                        key={index}
                      >
                        {item}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr
                    key={index}
                    className={`border-b-2 border-background font-semibold `}
                  >
                    {Object.keys(item).map((key, index) => {
                      if (key === "id") return "";
                      return (
                        <td className="p-4 text-left" key={index}>
                          {item[key]}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
      ) : (
        <div className="flex w-full h-full justify-center items-center bg-foreground rounded-lg">
          <Text h1 className={"text-textColor-light"}>
            No Data to Show
          </Text>
        </div>
      )}
    </>
  );
};
