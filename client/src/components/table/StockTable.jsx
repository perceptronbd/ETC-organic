import React from "react";
import { Text } from "../text/Text";

export const StockTable = ({ data }) => {
  return (
    <>
      {data ? (
        <div className="w-full max-h-96 overflow-y-auto relative">
          <table className="w-full">
            <thead className="text-xs text-textColor uppercase bg-foreground  sticky top-0">
              <tr className="w-[900px]">
                {Object.keys(data[0]).map((item, index) =>
                  item === "id" ? (
                    ""
                  ) : (
                    <th className="p-4 whitespace-nowrap " key={index}>
                      <span className="border-2 px-2 py-1 border-textColor rounded-full">
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
                  className={`border-b-8 border-background font-semibold`}
                >
                  {Object.keys(item).map((key, index) => {
                    if (key === "id") return "";
                    return key === "Product Name" ? (
                      <td
                        className="p-4 text-center bg-foreground rounded-2xl"
                        key={index}
                      >
                        {item[key]}
                      </td>
                    ) : (
                      <td
                        className="p-4 text-center text-textColor-light bg-foreground rounded-2xl"
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
