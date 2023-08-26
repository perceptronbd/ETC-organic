import React, { useState } from "react";
import { LinkButton, SearchInput } from "../../components";

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
    <div className="w-full p-2 bg-foreground max-h-[80vh] overflow-y-auto relative rounded-lg">
      <SearchInput value={searchQuery} onChange={handleSearch} />
      <div className="w-full max-h-[480px] 3xl:max-h-[780px] overflow-y-auto">
        <table className="w-full border-collapse">
          <thead className="h-12 bg-foreground sticky top-0 border-b-2">
            <tr>
              {Object.keys(data[0]).map((item, index) =>
                item === "sn" || item === "imgUrl" ? (
                  ""
                ) : (
                  <th
                    className="p-4 font-medium whitespace-nowrap text-left text-textColor-light uppercase"
                    key={index}
                  >
                    {item}
                  </th>
                )
              )}
              <th className="p-4 font-medium whitespace-nowrap text-left text-textColor-light uppercase">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filtredData.length === 0 ? (
              <div className="font-bold text-xl text-textColor-light my-8">
                No Data
              </div>
            ) : (
              filtredData.map((item, index) => (
                <tr
                  key={index}
                  className={`border-b-2 border-background font-semibold`}
                >
                  <td className="p-4 bg-foreground whitespace-nowrap flex items-center justify-between">
                    <img
                      src={item.imgUrl}
                      alt="Img"
                      className="border rounded w-10 h-10"
                    />
                    {item.name}
                  </td>
                  <td className="p-4 bg-foreground  text-green-500 font-bold text-center">
                    {item["sales price"]}
                  </td>
                  <td className="p-4 bg-foreground  text-accent-primary text-center">
                    {item.csb}
                  </td>
                  <td className="p-4 bg-foreground  text-foreground text-center">
                    <span className="bg-accent-primary px-3 py-1 rounded-full">
                      {item.points}
                    </span>
                  </td>
                  <td className="p-4 bg-foreground  text-textColor-light">
                    <div className="max-h-12 text-ellipsis overflow-hidden">
                      {item.description}
                    </div>
                  </td>
                  <td className="p-4 bg-foreground rounded-r-2xl">
                    <LinkButton
                      className={`w-14 m-0 h-8 bg-accent-secondary`}
                      to={"edit-product"}
                    >
                      Edit
                    </LinkButton>
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
