import React, { useEffect } from "react";
import { Container, Text } from "../../components";
import { BiLogOut } from "react-icons/bi";
import { useAuth } from "../../context/AuthContext";

export const Overview = () => {
  const { user, logout } = useAuth();

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <Container>
      <div className="flex justify-between items-center rounded-lg">
        <section className="rounded-lg w-fit">
          <Text h2>
            <span className="text-textColor-light">Welcome to</span>{" "}
            <span className="text-accent-secondary"> ETC Organic</span>{" "}
            <span className="text-accent-primary">ERP!</span>
          </Text>
        </section>
        <section className="flex items-center w-fit px-4 py-2 bg-foreground rounded-lg">
          <Text h3>{user.phoneNumber}</Text>
          <button
            onClick={() => {
              logout();
            }}
          >
            <BiLogOut
              className="ml-4 hover:cursor-pointer bg-background hover:bg-accent-secondary hover:text-foreground transition-all ease-in-out duration-300 rounded-md p-1"
              size={"34px"}
            />
          </button>
        </section>
      </div>
    </Container>
  );
};
