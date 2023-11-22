import React from "react";
import SimmerCard from "../SimmerUI/SimmerCard";

function Simmer() {
  const cards = [];

  for (let i = 0; i <= 20; i++) {
    cards.push(<SimmerCard key={i} />);
  }
  return (
    <div className="SimmerUi">
      {cards}

      <SimmerCard></SimmerCard>
    </div>
  );
}

export default Simmer;
