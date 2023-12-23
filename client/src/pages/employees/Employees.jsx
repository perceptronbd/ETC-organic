import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Text } from "../../components";
import { employeeData } from "../../const/mockData";
import { EmployeeTable } from "./EmployeeTable";

export const Employees = () => {
  return (
    <Container className={"justify-start"}>
      <div className="mb-2 flex w-full items-center justify-between">
        <Text variant="titleSmall" type="m">
          Employee List
        </Text>
        <Button variant="ghost" asChild>
          <Link to={"add-employee"}>Add Employee</Link>
        </Button>
      </div>
      <EmployeeTable data={employeeData} />
    </Container>
  );
};
