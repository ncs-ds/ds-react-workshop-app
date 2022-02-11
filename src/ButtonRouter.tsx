import { FC } from "react";

export interface ButtonProps {
  // onClickFunction: () => void;
  destination: string;
  message: string;
}

interface ButtonRouter {
  destination: string;
  message: string;
}

const ButtonRouter: FC<ButtonProps> = ({
  // onClickFunction,
  destination,
  message,
}) => {
  return <button>Go to {message}</button>;
};

export default ButtonRouter;
