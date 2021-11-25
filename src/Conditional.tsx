import React from "react";
import { useState, ChangeEvent } from "react";

const Conditional = () => {
  const [name, setName] = useState("");

  const updateString = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  return (
    <section>
      <section>
        <input type="text" onChange={updateString} />
        <article>{name.length > 5 && name}</article>
      </section>
    </section>
  );
};

export default Conditional;
