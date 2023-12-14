import { Redirect } from "expo-router";
import React from "react";

const index = () => {
  return <Redirect href={"/checkOut"} />;
};

export default index;
