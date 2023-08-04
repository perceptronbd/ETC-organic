import React from "react";

export const ListTable = ({ data }) => {
  return (
    <div className="w-full max-h-[80vh] overflow-y-auto relative scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
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
        <tbody className="">
          {data.map((item, index) => (
            <tr
              key={index}
              className="font-semibold border-b-8 border-background"
            >
              <td className="p-4 text-textColor-light bg-foreground rounded-l-2xl">
                {item.sn}
              </td>
              <td className="p-4 bg-foreground">{item.name}</td>
              <td className="p-4 bg-foreground">{item.imgUrl}</td>
              <td className="p-4 bg-foreground text-accent-secondary font-bold text-center">
                {item.sales_price}
              </td>
              <td className="p-4 bg-foreground text-accent-primary text-center">
                {item.csb}
              </td>
              <td className="p-4 text-white text-center bg-foreground">
                <span className="bg-accent-primary px-4 py-2 rounded-xl">
                  {item.points}
                </span>
              </td>
              <td className="p-4 text-textColor-light text-justify bg-foreground">
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
