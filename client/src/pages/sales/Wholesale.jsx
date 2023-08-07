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

export const Wholesale = () => {
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
    <Container className={"h-auto p-0 m-0"}>
      <form
        action="submit"
        onSubmit={onSubmit}
        className="w-full bg-foreground rounded-xl pb-4"
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
              label={"Proprietor Name"}
              placeholder={"Proprietor Name"}
              pattern={"[A-Za-z ]+"}
              name={"proprietorName"}
              className={"bg-background"}
              errorMessage={"Please enter a name"}
              onChange={onChange}
              required
            />
            <FormInput
              label={"Shop Name"}
              name={"shopName"}
              className={"bg-background"}
              placeholder={"Shop Name"}
              pattern={"[A-Za-z ]+"}
              errorMessage={"Please enter a valid name"}
              onChange={onChange}
              required
            />
            <FormInput
              label={"Shop Number"}
              name={"shopNumber"}
              className={"bg-background"}
              placeholder={"Number"}
              onChange={onChange}
              required
            />
            <FormInput
              label={"Shop Address"}
              name={"shopAddress"}
              className={"bg-background"}
              placeholder={"Address"}
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
        <div className="w-full flex justify-start px-4 mt-8">
          <Button type={"submit"}>Done</Button>
        </div>
      </form>
    </Container>
  );
};
