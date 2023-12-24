import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, SearchInput } from "../../components";

export const EmployeeTable = ({ data }) => {
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
      <div className="max-h-[78vh] w-full overflow-y-auto">
        <table className="w-full ">
          <thead className="sticky top-0 h-12 border-b-2 bg-foreground text-sm font-normal text-neutral-400">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="whitespace-nowrap p-4 text-left">Designation</th>
              <th className="p-4 text-left">Branch</th>
              <th className="whitespace-nowrap p-4">Phone Number</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtredData.length === 0 ? (
              <div className="my-8 text-xl font-bold text-textColor-light">No Data</div>
            ) : (
              filtredData.map((item, index) => (
                <tr key={index} className={`text-sm font-medium hover:bg-neutral-200`}>
                  <td className=" px-2 py-1">{item.name}</td>
                  <td className={`flex px-2 py-1 text-sm`}>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                        item.designation === "Manager"
                          ? "bg-green-200 text-green-500"
                          : item.designation === "Supervisor"
                            ? "bg-yellow-200 text-yellow-500"
                            : "bg-red-200 text-red-500"
                      }`}
                    >
                      {item.designation}
                    </span>
                  </td>
                  <td className=" px-2 py-1  text-textColor-light">{item.branch}</td>
                  <td className=" px-2 py-1  text-center text-textColor-light">
                    {item.phoneNumber}
                  </td>

                  <td className="flex justify-center rounded-r-2xl py-1">
                    <Button asChild className={"h-6"}>
                      <Link to={"update-employee"}>Edit</Link>
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
