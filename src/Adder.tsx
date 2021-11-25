import React from "react";
import { useState, ChangeEvent } from "react";

const Adder = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  const updateNumber1 = (event: ChangeEvent<HTMLInputElement>) => {
    const newNumber = Number.parseInt(event.currentTarget.value);
    setNumber1(newNumber);
  };

  const updateNumber2 = (event: ChangeEvent<HTMLInputElement>) => {
    const newNumber = Number.parseInt(event.currentTarget.value);
    setNumber2(newNumber);
  };

  const cal = number1 + number2;

  return (
    <section>
      <section>실행 결과: {cal}</section>
      <section>
        <input type="text" onChange={updateNumber1} />
        <input type="text" onChange={updateNumber2} />
      </section>
    </section>
  );
};

export default Adder;
