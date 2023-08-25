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
              <thead className="text-xs text-textColor-light uppercase bg-foreground  sticky top-0">
                <tr className="w-[900px]">
                  {Object.keys(data[0]).map((item, index) =>
                    item === "id" ? (
                      ""
                    ) : (
                      <th className="p-4 whitespace-nowrap " key={index}>
                        <span className="border px-2 py-1 border-textColor-light font-medium rounded-full">
                          {item}
                        </span>
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr
                    key={index}
                    className={`border-b-2 border-foreground font-semibold `}
                  >
                    {Object.keys(item).map((key, index) => {
                      if (key === "id") return "";
                      return key === "Product Name" ? (
                        <td
                          className="p-4 text-center bg-background "
                          key={index}
                        >
                          {item[key]}
                        </td>
                      ) : (
                        <td
                          className="p-4 text-center text-textColor-light bg-background"
                          key={index}
                        >
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
