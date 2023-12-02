import { Redirect } from "expo-router";
import React from "react";

const index = () => {
  return <Redirect href={"(drawer)/(tabs)"} />;
};

export default index;
