import { FC } from "react";

export interface BeachProps {}

interface Beach {}

const Beach: FC<BeachProps> = () => {
  return (
    <div>
      <img src="./beach.jpg" width={600}></img>
    </div>
  );
};

export default Beach;
