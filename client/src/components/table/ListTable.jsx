import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../button/Button";

export const ListTable = ({ data }) => {
  return (
    <div className="relative max-h-[80vh] w-full overflow-y-auto">
      <table className="w-full">
        <thead className="sticky top-0  h-12 bg-background">
          <tr className="">
            <th className="p-4">SN</th>
            <th className="whitespace-nowrap p-4">Product Name</th>
            <th className="p-4">Image</th>
            <th className="whitespace-nowrap p-4">Price</th>
            <th className="p-4">CSB</th>
            <th className="p-4">Points</th>
            <th className="p-4">Description</th>
            <th className="p-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={`border-b-8 border-background font-semibold`}>
              <td className="rounded-l-2xl bg-foreground p-4 text-textColor-light">{item.sn}</td>
              <td className="bg-foreground p-4 ">{item.name}</td>
              <td className="bg-foreground p-4 ">{item.imgUrl}</td>
              <td className="text-accent-secondary bg-foreground  p-4 text-center font-bold">
                {item.sales_price}
              </td>
              <td className="text-accent-primary bg-foreground  p-4 text-center">{item.csb}</td>
              <td className="text-accent-primary bg-foreground  p-4 text-center">
                <span className="border-accent-primary rounded-full  border-2 bg-opacity-60 px-4 py-1">
                  {item.points}
                </span>
              </td>
              <td className="bg-foreground p-4  text-textColor-light">
                <div className="max-h-12 overflow-hidden text-ellipsis">{item.description}</div>
              </td>
              <td className="rounded-r-2xl bg-foreground p-4">
                <Button asChild>
                  <Link to={"edit-product"}>Edit </Link>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
