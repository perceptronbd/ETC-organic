import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Container,
  FormInput,
  LinkButton,
  SelectInput,
  Text,
} from "../../components";
import { IoIosArrowBack } from "react-icons/io";

const categories = [
  { value: "1", label: "Category 1" },
  { value: "2", label: "Category 2" },
  { value: "3", label: "Category 3" },
  { value: "4", label: "Category 4" },
  { value: "5", label: "Category 5" },
];

export const UpdateEmployee = () => {
  const [formValues, setFormValues] = useState({
    employeeName: "",
    employeeNumber: "",
    designation: "",
    branch: "",
    productManagement: false,
    inputSales: false,
  });

  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const onChangeCheckbox = (e) => {
    const { name, checked } = e.target;

    if (name === "fullAccess") {
      setFormValues((prevValues) => ({
        ...prevValues,
        productManagement: checked,
        inputSales: checked,
      }));
    } else {
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: checked,
      }));
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ form: formValues });
  };

  return (
    <Container>
      <div className="flex items-center justify-between mb-4">
        <Text h1>Update Employee</Text>
        <LinkButton className={`w-auto h-8`} to={-1} icon={IoIosArrowBack}>
          Back
        </LinkButton>
      </div>
      <form
        action="submit"
        onSubmit={onSubmit}
        className="bg-white rounded-lg p-4"
      >
        <section className="grid grid-cols-2 gap-x-8 w-[80%]">
          <FormInput
            id={"employeeName"}
            label={"Employee Name"}
            name={"employeeName"}
            placeholder={"Employee Name"}
            required
            onChange={onChange}
          />

          <FormInput
            id={"employeeNumber"}
            label={"Employee Number"}
            name={"employeeNumber"}
            placeholder={"Employee Number"}
            type={"number"}
            pattern={"[0-9]{11}"}
            required
            onChange={onChange}
          />
          <SelectInput
            label={"Designation"}
            name={"designation"}
            required
            selectOpts={categories}
            onChange={onChange}
          />
          <SelectInput
            label={"Branch"}
            name={"branch"}
            required
            selectOpts={categories}
            onChange={onChange}
          />
        </section>
        <section className="relative border rounded-lg p-4 w-72 my-4">
          <Text
            className={
              "absolute -top-3 px-1 text-sm text-textColor-light bg-white "
            }
          >
            Permissions
          </Text>
          <div className="flex flex-col">
            <Checkbox
              label={"Full Access"}
              name={"fullAccess"}
              checked={formValues.fullAccess}
              onChange={onChangeCheckbox}
            />
            <Checkbox
              label={"Product Management"}
              name={"productManagement"}
              checked={formValues.productManagement}
              onChange={onChangeCheckbox}
            />
            <Checkbox
              label={"Input Sales"}
              name={"inputSales"}
              checked={formValues.inputSales}
              onChange={onChangeCheckbox}
            />
          </div>
        </section>

        <Button className={`bg-accent-secondary mt-4`} type={"submit"}>
          Add
        </Button>
        <span className="p-2" />
        <LinkButton className={"bg-red-500"} to={-1}>
          Delete
        </LinkButton>
      </form>
    </Container>
  );
};
