import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "./Modal";

const CreateDog = ({ setDogList, dogList }) => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [breeds, setBreeds] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBreeds();
  }, []);

  async function fetchBreeds() {
    const res = await fetch("https://dog.ceo/api/breeds/list/all");
    const json = await res.json();

    setBreeds(Object.keys(json.message));
  }

  const onSubmit = (e) => {
    e.preventDefault();
    toggleModal();
  };

  const saveDog = () => {
    setDogList([...dogList, { name, breed, id: Date.now() }]);
    setBreed("");
    setName("");
    toggleModal();
    navigate("/");
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <label htmlFor="name">Name of dog</label>
        <input
          type="text"
          id="name"
          value={name}
          placeholder="Name of dog"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="breed">Breed of dog</label>
        <select
          disabled={!breeds.length}
          id="breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        >
          <option />
          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
        <button className="button-default">Save Dog</button>
      </form>
      <button>
        <Link to="/">Back</Link>
      </button>
      {showModal ? (
        <Modal>
          <div>
            <p>Do you want to add this dog to the list?</p>
            <button className="button-default" onClick={saveDog}>
              Yes
            </button>
            <button className="button-default" onClick={toggleModal}>
              No
            </button>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default CreateDog;
