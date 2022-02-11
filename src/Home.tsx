import { FC, useState } from "react";
import ButtonRouter from "./ButtonRouter";
import Display from "./Display";

export interface HomeProps {
  cost: number;
}

interface Home {}

const Home: FC<HomeProps> = ({ cost }) => {
  return (
    <div className="App">
      <Display totalCost={cost}></Display>
      <img src="./home.jpg" width={600}></img>
    </div>
  );
};

export default Home;
