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
  { value: "1", label: "Category 1" },
  { value: "2", label: "Category 2" },
  { value: "3", label: "Category 3" },
  { value: "4", label: "Category 4" },
  { value: "5", label: "Category 5" },
];

export const Purchase = () => {
  const [quantity, setQuantity] = useState(0);

  const changeQuantity = (newQuantity) => {
    setQuantity(newQuantity);
    setFormValues({ ...formValues, quantity: newQuantity.toString() });
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
              placeholder={"Product Name"}
              name={"productName"}
              pattern={"[A-Za-z ]+"}
              errorMessage={"Please enter a valid name"}
              className={"bg-background"}
              onChange={onChange}
              required
            />
            <IncDecButton
              name={"quantity"}
              value={quantity}
              onChange={changeQuantity}
              label={"Quantity"}
              required
            />
            <FormInput
              label={"Total Purchasing Price"}
              placeholder={"Total Price"}
              pattern={"[0-9]+"}
              name={"totalPurchasingPrice"}
              errorMessage={"Please enter a valid price"}
              className={"bg-background"}
              onChange={onChange}
              required
            />
            <FormInput
              label={"Transportation Cost"}
              placeholder={"Total Price"}
              pattern={"[0-9]+"}
              name={"transportatoinCost"}
              errorMessage={"Please enter a valid price"}
              className={"bg-background"}
              onChange={onChange}
              required
            />
          </div>
          <div className="bg-foreground rounded-xl w-full p-4">
            <FormInput
              label={"Supplier Name"}
              placeholder={"Supplier Name"}
              pattern={"[A-Za-z ]+"}
              name={"supplierName"}
              className={"bg-background"}
              errorMessage={"Please enter a name"}
              onChange={onChange}
              required
            />
            <FormInput
              label={"Supplier Number"}
              name={"supplierNumber"}
              className={"bg-background"}
              placeholder={"01xxxxxxxxxx"}
              pattern={"[0-9]{11}"}
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
