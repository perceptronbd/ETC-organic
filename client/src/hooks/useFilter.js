import { useState } from "react";

export const useFilter = ({ data }) => {
  console.log(data);
  const [filterQuery, setFilterQuery] = useState("");

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(filterQuery.toLowerCase())
    )
  );

  const handleSearch = (e) => {
    setFilterQuery(e.target.value);
  };

  return {
    filterQuery,
    handleSearch,
    filteredData,
  };
};
