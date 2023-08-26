import React, { useState } from "react";
import { LinkButton, SearchInput } from "../../components";

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
    <div className="w-full p-2 bg-foreground rounded-lg">
      <SearchInput value={searchQuery} onChange={handleSearch} />
      <div className="w-full max-h-[78vh] overflow-y-auto">
        <table className="w-full ">
          <thead className="h-12 bg-foreground text-textColor-light sticky top-0 border-b-2">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="whitespace-nowrap text-left p-4">Designation</th>
              <th className="p-4 text-left">Branch</th>
              <th className="whitespace-nowrap p-4">Phone Number</th>
              <th className="p-4">Actions</th>
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
                  <td className="p-4 bg-foreground rounded-l-2xl">
                    {item.name}
                  </td>
                  <td className={`flex bg-foreground p-4 text-sm`}>
                    <span
                      className={`px-2 py-1  rounded-full ${
                        item.designation === "Manager"
                          ? "text-green-500 bg-green-200"
                          : item.designation === "Supervisor"
                          ? "text-yellow-500 bg-yellow-200"
                          : "text-red-500 bg-red-200"
                      }`}
                    >
                      {item.designation}
                    </span>
                  </td>
                  <td className="p-4 bg-foreground  text-textColor-light">
                    {item.branch}
                  </td>
                  <td className="p-4 bg-foreground  text-textColor-light text-center">
                    {item.phoneNumber}
                  </td>

                  <td className="p-4 bg-foreground rounded-r-2xl flex justify-center">
                    <LinkButton
                      className={`w-14 m-0 h-8 bg-accent-secondary`}
                      to={"update-employee"}
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
