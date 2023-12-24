// this is a reusable table component that can be used to display data in a table format. It takes in the following props:
// data: an array of objects that contain the data to be displayed
// headers: an array of strings that contain the headers for the table
// actions: an array of objects that contain the label and link for the action button
// ignoreKeys: an array of strings that contain the keys that should be ignored when displaying the data

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components";

export const Table = ({ data, headers, actions, ignoreKeys = [] }) => {
  return (
    <>
      <div className="max-h-[80vh] w-full overflow-y-auto">
        <table className="w-full border-collapse">
          <thead className="sticky top-0 h-12 border-b-2 bg-foreground">
            <tr>
              {headers.map((header, index) => (
                <th
                  className="whitespace-nowrap p-4 text-left text-sm font-medium uppercase text-textColor-light"
                  key={index}
                >
                  {header}
                </th>
              ))}
              {actions && actions.length > 0 && (
                <th className="whitespace-nowrap p-4 text-left text-sm font-medium uppercase text-textColor-light">
                  Action
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={headers.length + (actions ? 1 : 0)}>
                  <div className="my-8 text-xl font-bold text-textColor-light">No Data</div>
                </td>
              </tr>
            ) : (
              data.map((item, index) => (
                <tr
                  key={index}
                  className={`h-4  bg-foreground text-sm font-normal hover:bg-neutral-200`}
                >
                  {Object.keys(item).map((key, i) => {
                    if (ignoreKeys.includes(key)) {
                      return null;
                    }
                    if (key === "imgUrl") {
                      return (
                        <td
                          className="flex items-center justify-between whitespace-nowrap px-2 py-1"
                          key={i}
                        >
                          {item[key] ? (
                            <img src={item[key]} alt="Img" className="h-8 w-8 rounded border" />
                          ) : (
                            "No Image"
                          )}
                        </td>
                      );
                    }
                    return (
                      <td className=" px-2 py-1" key={i}>
                        {item[key]}
                      </td>
                    );
                  })}
                  {actions && actions.length > 0 && (
                    <td className=" px-2 py-1">
                      {actions.map((action, idx) => (
                        <Button asChild key={idx} className={"h-6"}>
                          <Link to={action.link}> {action.label} </Link>
                        </Button>
                      ))}
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};
