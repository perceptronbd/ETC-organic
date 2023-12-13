// useCustomToast.js
import { useToast } from "native-base";
import React from "react";
import { StyledToast } from "../components";

export const useCustomToast = () => {
  const toast = useToast();

  const closeToast = (props) => {
    console.log("close toast");
    console.log(props.id);
    toast.close(props.id);
  };

  const showToast = ({ title, description, variant }) => {
    const toastOptions = {
      render: (props) => (
        <StyledToast
          {...props}
          title={title}
          description={description}
          variant={variant}
          onClose={closeToast(props)}
        />
      ),
    };

    toast.show(toastOptions);
  };

  return showToast;
};
