import { useToast } from "native-base";
import { StyledToast } from "../components";

export const useCustomToast = () => {
  const toast = useToast();

  const showToast = ({ title, description, variant }) => {
    toast.show({
      render: () => (
        <StyledToast
          title={title}
          description={description}
          variant={variant}
        />
      ),
    });
  };

  return showToast;
};
