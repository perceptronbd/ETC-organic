import React, { useState } from "react";
import {
  Container,
  FormInput,
  IncDecButton,
  SelectInput,
  Button,
} from "../../components";
const branch = [
  { id: "1", name: "Dagon" },
  { id: "2", name: "Feni" },
];

const products = [
  {
    id: "1",
    name: "Product 1",
    price: "1000",
  },
  {
    id: "2",
    name: "Product 2",
    price: "2000",
  },
  {
    id: "3",
    name: "Product 3",
    price: "3000",
  },
  {
    id: "4",
    name: "Product 4",
    price: "4000",
  },
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
    <Container className={"h-auto p-0 m-0 3xl:m-0"}>
      <form
        action="submit"
        onSubmit={onSubmit}
        className="w-full bg-foreground rounded-xl pb-4"
      >
        <div className="grid grid-cols-2 gap-2 w-full h-[400px]">
          <div className="bg-foreground grid grid-rows-6 gap-2 rounded-xl w-full p-4">
            <SelectInput
              id={"productName"}
              label={"Product Name"}
              name={"productName"}
              selectOpts={products}
              onChange={onChange}
              required
            />
            <IncDecButton
              name={"quantity"}
              value={quantity}
              onChange={changeQuantity}
              label={"Quantity :"}
              required
            />
            <FormInput
              id={"price"}
              label={"Price"}
              placeholder={"Price"}
              pattern={"[0-9]+"}
              name={"price"}
              errorMessage={"Please enter a valid price"}
              onChange={onChange}
              required
            />
            <FormInput
              id={"discount"}
              label={"Discount"}
              placeholder={"Discount"}
              pattern={"[0-9]+"}
              name={"discount"}
              errorMessage={"Please enter a discount"}
              onChange={onChange}
              required
            />
            <FormInput
              id={"finalPrice"}
              label={"Final Price"}
              placeholder={"Final Price"}
              pattern={"[0-9]+"}
              name={"finalPrice"}
              errorMessage={"Please enter a valid price"}
              onChange={onChange}
              required
            />
          </div>
          <div className="bg-foreground grid grid-rows-6 gap-2 rounded-xl w-full p-4">
            <SelectInput
              label={"Branch"}
              name={"branch"}
              selectOpts={branch}
              className={"border-accent-primary"}
              onChange={onChange}
              required
            />
            <FormInput
              id={"proprietorName"}
              label={"Proprietor Name"}
              placeholder={"Proprietor Name"}
              pattern={"[A-Za-z ]+"}
              name={"proprietorName"}
              errorMessage={"Please enter a name"}
              onChange={onChange}
              required
            />
            <FormInput
              id={"shopName"}
              label={"Shop Name"}
              name={"shopName"}
              placeholder={"Shop Name"}
              pattern={"[A-Za-z ]+"}
              errorMessage={"Please enter a valid name"}
              onChange={onChange}
              required
            />
            <FormInput
              id={"shopNumber"}
              label={"Shop Number"}
              name={"shopNumber"}
              placeholder={"Number"}
              onChange={onChange}
              required
            />
            <FormInput
              id={"shopAddress"}
              label={"Shop Address"}
              name={"shopAddress"}
              placeholder={"Address"}
              errorMessage={"Please enter a valid phone number"}
              type={"tel"}
              onChange={onChange}
              required
            />
          </div>
        </div>
        <div className="w-full flex justify-start px-4">
          <Button type={"submit"}>Done</Button>
        </div>
      </form>
    </Container>
  );
};
