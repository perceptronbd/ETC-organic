import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Container } from "../../components/container/Container";
import {
  Button,
  FormInput,
  LinkButton,
  SelectInput,
  Text,
  TextInput,
} from "../../components";

const categories = [
  { value: "1", label: "Category 1" },
  { value: "2", label: "Category 2" },
  { value: "3", label: "Category 3" },
  { value: "4", label: "Category 4" },
  { value: "5", label: "Category 5" },
];

export const EditProduct = () => {
  const [formValues, setFormValues] = useState({
    productName: "",
    category: "",
    salesPrice: "",
    purchasePrice: "",
    csb: "",
    points: "",
    unit: "",
    description: "",
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
      <div className="flex items-center justify-between mb-4">
        <Text h1>Edit Product</Text>
        <LinkButton className={`w-auto h-8`} to={-1} icon={IoIosArrowBack}>
          Back
        </LinkButton>
      </div>
      <form action="submit" onSubmit={onSubmit} className="pb-4">
        <FormInput
          className={"w-full "}
          label={"Product Name"}
          name={"productName"}
          required
          onChange={onChange}
        />
        <div className="grid grid-cols-2 gap-x-8 gap-y-2 w-[80%]">
          <div className="col-start-1 col-end-3">
            <SelectInput
              className={"w-[40%]"}
              label={"Category"}
              name={"category"}
              required
              selectOpts={categories}
              onChange={onChange}
            />
          </div>
          <div className="flex">
            <FormInput
              label={"Sales Price"}
              name={"salesPrice"}
              type={"number"}
              pattern={"[0-9]{3}-[0-9]{2}-[0-9]{3}"}
              required
              onChange={onChange}
            />
            <Text className={"flex items-end m-4 text-textColor-light"} h3>
              BDT
            </Text>
          </div>
          <div className="flex">
            <FormInput
              label={"Purchase Price"}
              name={"purchasePrice"}
              type={"number"}
              pattern={"[0-9]{3}-[0-9]{2}-[0-9]{3}"}
              required
              onChange={onChange}
            />
            <Text className={"flex items-end m-4 text-textColor-light"} h3>
              BDT
            </Text>
          </div>
          <FormInput
            label={"CSB"}
            name={"csb"}
            type={"number"}
            pattern={"[0-9]{3}-[0-9]{2}-[0-9]{3}"}
            required
            onChange={onChange}
          />
          <FormInput
            label={"Points"}
            name={"points"}
            type={"number"}
            pattern={"[0-9]{3}-[0-9]{2}-[0-9]{3}"}
            required
            onChange={onChange}
          />
          <SelectInput
            label={"Unit"}
            name={"unit"}
            type={"number"}
            required
            selectOpts={categories}
            onChange={onChange}
          />
        </div>
        <TextInput
          className={"mb-4"}
          name={"description"}
          label={"Description"}
          required
          onChange={onChange}
        />
        <Button className={`bg-accent-secondary`} type={"submit"}>
          Update
        </Button>
        <span className="p-2" />
        <LinkButton className={"bg-red-500"} to={-1}>
          Delete
        </LinkButton>
      </form>
    </Container>
  );
};
