import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import {
  Button,
  Container,
  FormInput,
  ImgInput,
  LinkButton,
  SelectInput,
  Text,
  TextInput,
} from "../../components";
import { selectItem } from "../../const/mockData";

export const AddProduct = () => {
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
      <div className="mb-4 flex items-center justify-between">
        <Text h1>Add Product</Text>
        <LinkButton className={`h-8 w-auto`} to={-1} icon={IoIosArrowBack}>
          Back
        </LinkButton>
      </div>
      <form action="submit" onSubmit={onSubmit} className="rounded-lg bg-white p-4">
        <></>
        <div className="grid w-[80%] grid-cols-2 gap-x-8 gap-y-2">
          <FormInput
            id={"productName"}
            label={"Product Name"}
            placeholder={"Product Name"}
            name={"productName"}
            required
            onChange={onChange}
          />{" "}
          <SelectInput {...selectItem} />
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
          <SelectInput {...selectItem} />
        </div>
        <div className="mb-4">
          <ImgInput file={file} label={"Upload Image"} id={"img"} onChange={onChange} />
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
        <Button className={`bg-accent-secondary`} type={"submit"}>
          Add Product
        </Button>
      </form>
    </Container>
  );
};
