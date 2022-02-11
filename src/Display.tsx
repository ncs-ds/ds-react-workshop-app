import { FC } from "react";

export interface DisplayProps {
  totalCost: number;
}

interface Display {
  totalCost: number;
}

const ButtonRouter: FC<DisplayProps> = ({ totalCost }) => {
  return <p>So far that's cost you £{totalCost}</p>;
};

export default ButtonRouter;
