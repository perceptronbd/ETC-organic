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
export const Purchase = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);

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
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    if (name === "productName") {
      const selected = products.find((product) => product.name === value);
      setSelectedProduct(selected);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ form: formValues });
  };

  return (
    <Container>
      <Text h1>Purchase</Text>
      <form action="submit" onSubmit={onSubmit} className="w-full">
        <div className="grid grid-cols-2 gap-2 w-full h-[450px] p-2">
          <div className="bg-foreground grid grid-rows-6 gap-y-2 rounded-xl w-full p-4">
            <SelectInput
              id={"productName"}
              label={"Product"}
              name={"productName"}
              selectOpts={products}
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
              id={"totalPurchasingPrice"}
              label={"Total Purchasing Price"}
              placeholder={"Total Price"}
              pattern={"[0-9]+"}
              name={"totalPurchasingPrice"}
              errorMessage={"Please enter a valid price"}
              value={selectedProduct ? selectedProduct.price * quantity : 0}
              readOnly
              required
            />
            <FormInput
              id={"transportatoinCost"}
              label={"Transportation Cost"}
              placeholder={"Total Price"}
              pattern={"[0-9]+"}
              name={"transportatoinCost"}
              errorMessage={"Please enter a valid price"}
              onChange={onChange}
              required
            />
          </div>
          <div className="bg-foreground grid grid-rows-6 gap-y-2 rounded-xl w-full p-4">
            <SelectInput
              label={"Branch"}
              name={"branch"}
              selectOpts={branch}
              className={"border-accent-primary"}
              onChange={onChange}
              required
            />
            <FormInput
              id={"supplierName"}
              label={"Supplier Name"}
              placeholder={"Supplier Name"}
              pattern={"[A-Za-z ]+"}
              name={"supplierName"}
              errorMessage={"Please enter a name"}
              onChange={onChange}
              required
            />
            <FormInput
              id={"supplierNumber"}
              label={"Supplier Number"}
              name={"supplierNumber"}
              placeholder={"01xxxxxxxxxx"}
              pattern={"[0-9]{11}"}
              errorMessage={"Please enter a valid phone number"}
              type={"tel"}
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
