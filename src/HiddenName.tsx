import React from "react";
import { useState, ChangeEvent } from "react";

const HiddenName = () => {
  const [name, setName] = useState("");
  const updateString = (event: ChangeEvent<HTMLInputElement>) => {
    let newName = event.currentTarget.value;
    if (newName.length > 2) {
      const first = newName.charAt(0);
      const last = newName.charAt(newName.length - 1);
      const star = "*".repeat(newName.length - 2);
      newName = first + star + last;
    }
    setName(newName);
  };

  return (
    <section>
      <section>
        <input type="text" onChange={updateString} />
        <article>{name}</article>
        <input type="button" />
      </section>
    </section>
  );
};

export default HiddenName;
