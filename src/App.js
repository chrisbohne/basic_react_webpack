import "./style.css";
import CreateDog from "./CreateDog";
import ShowDogs from "./showDogs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const dogs = [
    { id: 1, name: "Ruso", breed: "boxer" },
    { id: 2, name: "Jelly", breed: "bulldog" },
  ];

  const [dogList, setDogList] = useState(dogs);

  return (
    <Router>
      <h1>Dog App</h1>
      <Routes>
        <Route path="/" element={<ShowDogs dogs={dogList} />} />
        <Route
          path="/new"
          element={<CreateDog setDogList={setDogList} dogList={dogList} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
