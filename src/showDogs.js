import { Link } from "react-router-dom";
import Dog from "./Dog";

const ShowDogs = (props) => {
  const dogs = props.dogs.map((dog) => {
    return <Dog key={dog.id} dog={dog} />;
  });

  return (
    <div>
      {dogs}
      <button className="button-default">
        <Link to="/new">Add Dog</Link>
      </button>
    </div>
  );
};

export default ShowDogs;
