import React from "react";
import "./App.css";
import { CharCard } from "../../../features/characters/components/charCard/charCard";
import { CardContainer } from "../../../features/characters/components/cardContainer/cardContainer";

function App() {
  return (
    <div className="app container">
      <CardContainer></CardContainer>
    </div>
  );
}

export default App;
