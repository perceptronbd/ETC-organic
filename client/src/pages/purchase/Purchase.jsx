import React, { useState } from "react";
import {
  Text,
  Container,
  FormInput,
  IncDecButton,
  SelectInput,
  Button,
} from "../../components";

const branch = [
  {
    value: 1,
    label: "branch 1",
  },
];

export const Purchase = () => {
  const [quantity, setQuantity] = useState(0);

  const changeQuantity = (newQuantity) => {
    setQuantity(newQuantity);
  };
  const [formValues, setFormValues] = useState({
    productName: "",
    quantity: "",
    totalPurchasingPrice: "",
    transportatoinCost: "",
    supplierName: "",
    supplierNumber: "",
    branch: "",
  });

  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ form: formValues });
  };

  return (
    <Container>
      <Text h1>Purchase</Text>
      <form action="submit" onSubmit={onSubmit} className="w-full">
        <div className="grid grid-cols-2 gap-2 w-full h-[500px] p-2">
          <div className="bg-foreground rounded-xl w-full p-4">
            <FormInput
              label={"Product Name"}
              name={"productName"}
              className={"bg-background"}
              onChange={onChange}
            />
            <IncDecButton
              name={"quantity"}
              value={quantity}
              onChange={changeQuantity}
              label={"Quantity"}
            />
            <FormInput
              label={"Total Purchasing Price"}
              name={"totalPurchasingPrice"}
              className={"bg-background"}
              onChange={onChange}
            />
            <FormInput
              label={"Transportation Cost"}
              name={"transportatoinCost"}
              className={"bg-background"}
              onChange={onChange}
            />
          </div>
          <div className="bg-foreground rounded-xl w-full p-4">
            <FormInput
              label={"Supplier Name"}
              name={"supplierName"}
              className={"bg-background"}
              onChange={onChange}
            />
            <FormInput
              label={"Supplier Number"}
              name={"supplierNumber"}
              className={"bg-background"}
              pattern={"[0-9]{3}-[0-9]{2}-[0-9]{3}"}
              errorMessage={"Please enter a valid phone number"}
              type={"tel"}
              onChange={onChange}
              required
            />
            <SelectInput
              label={"Branch"}
              name={"branch"}
              selectOpts={branch}
              onChange={onChange}
              required
            />
          </div>
        </div>
        <div className="w-full flex justify-center mt-8">
          <Button type={"submit"}>Done</Button>
        </div>
      </form>
    </Container>
  );
};
