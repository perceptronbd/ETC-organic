import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import {
  Button,
  FormInput,
  LinkButton,
  SelectInput,
  Text,
  TextInput,
  Container,
  ImgInput,
} from "../../components";

const categories = [
  { value: "1", label: "Category 1" },
  { value: "2", label: "Category 2" },
  { value: "3", label: "Category 3" },
  { value: "4", label: "Category 4" },
  { value: "5", label: "Category 5" },
];

export const EditProduct = () => {
  const [file, setFile] = useState();
  const [formValues, setFormValues] = useState({
    productName: "",
    category: "",
    salesPrice: "",
    purchasePrice: "",
    csb: "",
    points: "",
    unit: "",
    description: "",
    image: null,
  });

  const onChange = (e) => {
    if (e.target.name === "image") {
      const selectedFile = e.target.files[0];
      if (selectedFile) {
        setFormValues({ ...formValues, [e.target.name]: selectedFile });
        setFile(URL.createObjectURL(selectedFile));
      } else {
        setFormValues({ ...formValues, [e.target.name]: null });
        setFile(null);
      }
    } else {
      setFormValues({ ...formValues, [e.target.name]: e.target.value });
    }
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
      <form
        action="submit"
        onSubmit={onSubmit}
        className="bg-white p-4 rounded-lg"
      >
        <></>
        <div className="grid grid-cols-2 gap-x-8 gap-y-2 w-[80%]">
          <FormInput
            id={"productName"}
            label={"Product Name"}
            placeholder={"Product Name"}
            name={"productName"}
            required
            onChange={onChange}
          />{" "}
          <SelectInput
            className={"w-[40%]"}
            label={"Category"}
            name={"category"}
            required
            selectOpts={categories}
            onChange={onChange}
          />
          <>
            <FormInput
              id={"salesPrice"}
              label={"Sales Price"}
              placeholder={"Sales Price"}
              name={"salesPrice"}
              type={"number"}
              pattern={"[0-9]{3}-[0-9]{2}-[0-9]{3}"}
              required
              onChange={onChange}
            />
          </>
          <>
            <FormInput
              id={"purchasePrice"}
              label={"Purchase Price"}
              placeholder={"Purchase Price"}
              name={"purchasePrice"}
              type={"number"}
              pattern={"[0-9]{3}-[0-9]{2}-[0-9]{3}"}
              required
              onChange={onChange}
            />
          </>
          <FormInput
            id={"csb"}
            label={"CSB"}
            placeholder={"CSB"}
            name={"csb"}
            type={"number"}
            pattern={"[0-9]{3}-[0-9]{2}-[0-9]{3}"}
            required
            onChange={onChange}
          />
          <FormInput
            id={"points"}
            label={"Points"}
            placeholder={"Points"}
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
        <div className="mb-4">
          <ImgInput
            file={file}
            label={"Upload Image"}
            id={"img"}
            onChange={onChange}
          />
        </div>
        <TextInput
          id={"description"}
          className={"mb-4"}
          name={"description"}
          label={"Description"}
          placeholder={"Description"}
          required
          onChange={onChange}
        />
        <Button className={`bg-accent-secondary mr-2`} type={"submit"}>
          Update Product
        </Button>
        <Button className={`bg-red-500`} type={"submit"}>
          Delete
        </Button>
      </form>
    </Container>
  );
};
