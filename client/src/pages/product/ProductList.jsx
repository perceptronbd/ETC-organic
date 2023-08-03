import React from "react";
import { Button, Text } from "../../components";

export const ProductList = () => {
  return (
    <div className="w-full m-4 3xl:mx-28">
      <div className="flex justify-between">
        <Text h1>Product List</Text>
        <Button className={`h-8`}>Add Product</Button>
      </div>
      <div className="bg-red-500 w-full flex">
        <div className="h-8 bg-green-100 opacity-40 w-[4%]"></div>
        <div className="h-8 bg-green-200 opacity-40 w-[14%]"></div>
        <div className="h-8 bg-green-300 opacity-40 w-[16%]"></div>
        <div className="h-8 bg-green-400 opacity-40 w-[10%]"></div>
        <div className="h-8 bg-green-500 opacity-40 w-[7%]"></div>
        <div className="h-8 bg-green-600 opacity-40 w-[43%]"></div>
        <div className="h-8 bg-green-700 opacity-40 w-[6%]"></div>
      </div>
    </div>
  );
};
