import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, SearchInput } from "../../components";

export const Table = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filtredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="w-full rounded-lg bg-foreground p-2">
      <SearchInput value={searchQuery} onChange={handleSearch} />
      <div className="3xl:max-h-[80vh] max-h-[75vh] w-full overflow-y-auto">
        <table className="w-full border-collapse">
          <thead className="sticky top-0 h-12 border-b-2 bg-foreground">
            <tr>
              {Object.keys(data[0]).map((item, index) =>
                item === "sn" || item === "imgUrl" ? (
                  ""
                ) : (
                  <th
                    className="whitespace-nowrap p-4 text-left font-medium uppercase text-textColor-light"
                    key={index}
                  >
                    {item}
                  </th>
                )
              )}
              <th className="whitespace-nowrap p-4 text-left font-medium uppercase text-textColor-light">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filtredData.length === 0 ? (
              <div className="my-8 text-xl font-bold text-textColor-light">No Data</div>
            ) : (
              filtredData.map((item, index) => (
                <tr key={index} className={`border-b-2 border-background font-semibold`}>
                  <td className="flex items-center justify-between whitespace-nowrap bg-foreground p-4">
                    <img src={item.imgUrl} alt="Img" className="h-10 w-10 rounded border" />
                    {item.name}
                  </td>
                  <td className="bg-foreground p-4  text-center font-bold text-green-500">
                    {item["sales price"]}
                  </td>
                  <td className="text-accent-primary bg-foreground  p-4 text-center">{item.csb}</td>
                  <td className="bg-foreground p-4  text-center text-foreground">
                    <span className="bg-accent-primary rounded-full px-3 py-1">{item.points}</span>
                  </td>
                  <td className="bg-foreground p-4  text-textColor-light">
                    <div className="max-h-12 overflow-hidden text-ellipsis">{item.description}</div>
                  </td>
                  <td className="rounded-r-2xl bg-foreground p-4">
                    <Button asChild>
                      <Link to={"edit-product"}>Edit</Link>
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
