import { FC } from "react";

export interface MykonosProps {}

interface Mykonos {}

const Mykonos: FC<MykonosProps> = () => {
  return (
    <div>
      <img src="./mykonos.jpg" width={600}></img>
    </div>
  );
};

export default Mykonos;
