import React from "react";

import "./styles.css";

// dataset
import data from "./data/Data";

// components
import Header from "./components/Header";
import Travel from "./components/Travel";

export default function App() {
  const travelCards = data.map((items) => {
    return (
      <div key={items.title}>
        <Travel {...items} />
        {items.title !== "Geirangerfjord" ? <hr /> : ""}
      </div>
    );
  });
  return (
    <div className="App">
      <Header />
      {travelCards}
    </div>
  );
}
