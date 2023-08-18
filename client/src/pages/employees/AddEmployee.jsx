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

export const AddEmployee = () => {
  const [fullAccess, setFullAccess] = useState(false);

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    designation: "",
    branch: "",
    permissions: {
      productManagement: false,
      inputSales: false,
    },
  });

  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const onChangeCheckbox = (e) => {
    const { name, checked } = e.target;

    if (name === "fullAccess") {
      setFullAccess(checked);
      const updatedPermissions = Object.fromEntries(
        Object.keys(formValues.permissions).map((permission) => [
          permission,
          checked,
        ])
      );
      setFormValues({ ...formValues, permissions: updatedPermissions });
    } else {
      setFormValues({
        ...formValues,
        permissions: { ...formValues.permissions, [name]: checked },
      });
      // Update the fullAccess state based on the status of individual permissions
      const hasUncheckedPermission = Object.values({
        ...formValues.permissions,
        [name]: checked,
      }).some((permission) => !permission);
      setFullAccess(!hasUncheckedPermission);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ form: formValues });
  };

  return (
    <Container>
      <div className="flex items-center justify-between mb-4">
        <Text h1>Add Employee</Text>
        <LinkButton className={`w-auto h-8`} to={-1} icon={IoIosArrowBack}>
          Back
        </LinkButton>
      </div>
      <form
        action="submit"
        onSubmit={onSubmit}
        className="bg-white rounded-lg p-4"
      >
        <div className="grid grid-cols-2 gap-x-8 w-[80%]">
          <FormInput
            id={"name"}
            label={"Employee Name"}
            name={"name"}
            placeholder={"Employee Name"}
            required
            onChange={onChange}
          />
          <FormInput
            id={"email"}
            label={"Email Address"}
            name={"email"}
            type={"email"}
            placeholder={"Email Address"}
            required
            onChange={onChange}
          />

          <FormInput
            id={"phone"}
            label={"Phone Number"}
            name={"phone"}
            placeholder={"Employee Number"}
            type={"number"}
            pattern={"[0-9]{11}"}
            required
            onChange={onChange}
          />
          <SelectInput
            id={"designation"}
            label={"Designation"}
            name={"designation"}
            required
            selectOpts={categories}
            onChange={onChange}
          />
        </div>
        <div className="grid grid-rows-2">
          <FormInput
            id={"password"}
            label={"Password"}
            name={"password"}
            placeholder={"Password"}
            type={"password"}
            required
            onChange={onChange}
          />
          <SelectInput
            label={"Branch"}
            name={"branch"}
            required
            selectOpts={categories}
            onChange={onChange}
          />
        </div>
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
              checked={fullAccess}
              onChange={onChangeCheckbox}
            />
            <Checkbox
              label={"Product Management"}
              name={"productManagement"}
              checked={formValues.permissions.productManagement}
              onChange={onChangeCheckbox}
            />
            <Checkbox
              label={"Input Sales"}
              name={"inputSales"}
              checked={formValues.permissions.inputSales}
              onChange={onChangeCheckbox}
            />
          </div>
        </section>

        <Button className={`bg-accent-secondary mt-4`} type={"submit"}>
          Add
        </Button>
      </form>
    </Container>
  );
};
