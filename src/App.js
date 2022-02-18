import "./style.css";
import Dog from "./Dog";

const App = () => {
  return (
    <>
      <h1>Dog App</h1>
      <Dog name="Ruso" breed="Boxer" />
      <Dog name="Jelly" breed="Bulldog" />
    </>
  );
};

export default App;
