import React from "react";

export const ListTable = ({ data }) => {
  return (
    <div className="w-full max-h-[80vh] overflow-y-auto relative">
      <table className="w-full">
        <thead className="h-12 bg-background  sticky top-0">
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
            <tr
              key={index}
              className={`border-b-8 border-background font-semibold `}
            >
              <td className="p-4 text-textColor-light bg-foreground rounded-l-2xl">
                {item.sn}
              </td>
              <td className="p-4 bg-foreground ">{item.name}</td>
              <td className="p-4 bg-foreground ">{item.imgUrl}</td>
              <td className="p-4 bg-foreground  text-accent-secondary font-bold text-center">
                {item.sales_price}
              </td>
              <td className="p-4 bg-foreground  text-accent-primary text-center">
                {item.csb}
              </td>
              <td className="p-4 bg-foreground  text-white text-center">
                <span className="border-2 border-accent-primary bg-accent-primary bg-opacity-60 px-4 py-1 rounded-full">
                  {item.points}
                </span>
              </td>
              <td className="p-4 bg-foreground  text-textColor-light text-justify">
                {item.description}
              </td>
              <td className="p-4 bg-foreground rounded-r-2xl">Edit</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
