import React, { useState } from "react";
import {
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

export const Retail = () => {
  const [quantity, setQuantity] = useState(0);

  const changeQuantity = (newQuantity) => {
    setQuantity(newQuantity);
    setFormValues({ ...formValues, quantity: newQuantity.toString() });
  };

  const [formValues, setFormValues] = useState({
    productName: "",
    quantity: "",
    price: "",
    discount: "",
    finalPrice: "",
    proprietorName: "",
    shopName: "",
    shopNumber: "",
    shopAddress: "",
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
    <Container className={"h-auto p-0 m-0 3xl:m-0"}>
      <form
        action="submit"
        onSubmit={onSubmit}
        className="w-full bg-foreground rounded-xl rounded-tl-none pb-4"
      >
        <div className="grid grid-cols-2 gap-2 w-full h-[520px]">
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
              label={"Price"}
              placeholder={"Price"}
              pattern={"[0-9]+"}
              name={"price"}
              errorMessage={"Please enter a valid price"}
              className={"bg-background"}
              onChange={onChange}
              required
            />
            <FormInput
              label={"Discount"}
              placeholder={"Discount"}
              pattern={"[0-9]+"}
              name={"discount"}
              errorMessage={"Please enter a discount"}
              className={"bg-background"}
              onChange={onChange}
              required
            />
            <FormInput
              label={"Final Price"}
              placeholder={"Final Price"}
              pattern={"[0-9]+"}
              name={"finalPrice"}
              errorMessage={"Please enter a valid price"}
              className={"bg-background"}
              onChange={onChange}
              required
            />
          </div>
          <div className="bg-foreground rounded-xl w-full p-4">
            <FormInput
              label={"Customer Name"}
              name={"customerName"}
              className={"bg-background"}
              placeholder={"Customer Name"}
              pattern={"[A-Za-z ]+"}
              errorMessage={"Please enter a valid name"}
              onChange={onChange}
              required
            />
            <FormInput
              label={"Customer Number"}
              name={"customerNumber"}
              className={"bg-background"}
              placeholder={"Number"}
              onChange={onChange}
              required
            />
            <FormInput
              label={"Customer ID"}
              placeholder={"ID"}
              name={"customerID"}
              className={"bg-background"}
              errorMessage={"Please enter a ID"}
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
        <div className="w-full flex justify-start px-4 mt-8">
          <Button type={"submit"}>Done</Button>
        </div>
      </form>
    </Container>
  );
};
