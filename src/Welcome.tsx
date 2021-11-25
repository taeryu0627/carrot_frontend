import React from "react";
import { useState, ChangeEvent } from "react";

const welcome = () => {
  const [name, setName] = useState("");

  const updateString = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  return (
    <section>
      <section>반갑습니다, {name}님</section>
      <section>
        <input type="text" onChange={updateString} />
      </section>
    </section>
  );
};

export default welcome;
