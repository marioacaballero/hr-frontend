import React from "react";
import OpinionCard from "./components/OpinionCard";

function Opinions() {
  return (
    <div>
      <h2>Opiniones</h2>
      <OpinionCard
        key={"1"}
        name={"name"}
        image={""}
        opinion={"opinion"}
        position={"position"}
      />
      <OpinionCard
        key={"2"}
        name={"name"}
        image={""}
        opinion={"opinion"}
        position={"position"}
      />
      <OpinionCard
        key={"3"}
        name={"name"}
        image={""}
        opinion={"opinion"}
        position={"position"}
      />
      <OpinionCard
        key={"4"}
        name={"name"}
        image={""}
        opinion={"opinion"}
        position={"position"}
      />
    </div>
  );
}

export default Opinions;
