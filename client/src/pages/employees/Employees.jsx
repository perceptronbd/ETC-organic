import React from "react";
import { Container, LinkButton, Text } from "../../components";
import { EmployeeTable } from "./EmployeeTable";

const data = [
  {
    id: 1,
    name: "Employee 1",
    designation: "Manager",
    branch: "Kathmandu",
    phoneNumber: "018999999",
  },
  {
    id: 2,
    name: "Employee 2",
    designation: "Supervisor",
    branch: "Pokhara",
    phoneNumber: "018888888",
  },
  {
    id: 3,
    name: "Employee 3",
    designation: "Staff",
    branch: "Birgunj",
    phoneNumber: "017777777",
  },
  {
    id: 4,
    name: "Employee 4",
    designation: "Manager",
    branch: "Lalitpur",
    phoneNumber: "016666666",
  },
  {
    id: 5,
    name: "Employee 5",
    designation: "Supervisor",
    branch: "Bhaktapur",
    phoneNumber: "015555555",
  },
  {
    id: 6,
    name: "Employee 6",
    designation: "Staff",
    branch: "Butwal",
    phoneNumber: "014444444",
  },
  {
    id: 7,
    name: "Employee 7",
    designation: "Manager",
    branch: "Dharan",
    phoneNumber: "013333333",
  },
  {
    id: 8,
    name: "Employee 8",
    designation: "Supervisor",
    branch: "Nepalgunj",
    phoneNumber: "012222222",
  },
  {
    id: 9,
    name: "Employee 9",
    designation: "Staff",
    branch: "Itahari",
    phoneNumber: "011111111",
  },
  {
    id: 10,
    name: "Employee 10",
    designation: "Manager",
    branch: "Hetauda",
    phoneNumber: "010000000",
  },
  {
    id: 11,
    name: "Employee 11",
    designation: "Supervisor",
    branch: "Dhangadhi",
    phoneNumber: "019999999",
  },
  {
    id: 12,
    name: "Employee 12",
    designation: "Staff",
    branch: "Bharatpur",
    phoneNumber: "019888888",
  },
  {
    id: 13,
    name: "Employee 13",
    designation: "Manager",
    branch: "Janakpur",
    phoneNumber: "019777777",
  },
  {
    id: 14,
    name: "Employee 14",
    designation: "Supervisor",
    branch: "Ghorahi",
    phoneNumber: "019666666",
  },
  {
    id: 15,
    name: "Employee 15",
    designation: "Staff",
    branch: "Siraha",
    phoneNumber: "019555555",
  },
  {
    id: 16,
    name: "Employee 16",
    designation: "Manager",
    branch: "Banepa",
    phoneNumber: "019444444",
  },
  {
    id: 17,
    name: "Employee 17",
    designation: "Supervisor",
    branch: "Tulsipur",
    phoneNumber: "019333333",
  },
  {
    id: 18,
    name: "Employee 18",
    designation: "Staff",
    branch: "Dhankuta",
    phoneNumber: "019222222",
  },
  {
    id: 19,
    name: "Employee 19",
    designation: "Manager",
    branch: "Gaur",
    phoneNumber: "019111111",
  },
  {
    id: 20,
    name: "Employee 20",
    designation: "Supervisor",
    branch: "Jaleshwor",
    phoneNumber: "019000000",
  },
];

export const Employees = () => {
  return (
    <Container>
      <div className="flex justify-between mb-10">
        <Text h1>Employee List</Text>
        <LinkButton to={"add-employee"} className={`h-8`}>
          Add Employee
        </LinkButton>
      </div>
      <EmployeeTable data={data} />
    </Container>
  );
};
