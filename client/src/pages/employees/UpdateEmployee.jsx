import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Checkbox, Container, FormInput, SelectInput, Text } from "../../components";
import { selectBranch, selectDesignation } from "../../const/mockData";

export const UpdateEmployee = () => {
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
        Object.keys(formValues.permissions).map((permission) => [permission, checked])
      );
      setFormValues({ ...formValues, permissions: updatedPermissions });
    } else {
      setFormValues({
        ...formValues,
        permissions: { ...formValues.permissions, [name]: checked },
      });
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
    <Container className={"justify-start"}>
      <div className="mb-2 flex w-full items-center justify-between">
        <Text variant="titleSmall" type="m">
          Update Employee
        </Text>
        <Button asChild>
          <Link to={-1}>Go Back</Link>
        </Button>
      </div>
      <form action="submit" onSubmit={onSubmit} className="w-full rounded-lg bg-white p-4">
        <div className="grid w-[80%] grid-cols-2 gap-x-8">
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
          <SelectInput {...selectDesignation} />
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
          <SelectInput {...selectBranch} />
        </div>
        <section className="relative my-4 w-72 rounded-lg border p-4">
          <Text className={"absolute -top-3 bg-white px-1 text-sm text-textColor-light "}>
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

        <Button className={`mr-2`} type={"submit"}>
          Update Employee
        </Button>
        <Button className={`mt-4 bg-red-500`} type={"submit"}>
          Delete
        </Button>
      </form>
    </Container>
  );
};
