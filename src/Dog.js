import useBreedImages from "./hooks/useBreedImages";

const Dog = ({ dog }) => {
  const [images] = useBreedImages(dog.breed);
  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <div className="card">
      <div className="header">
        <h2>{dog.name}</h2>
      </div>
      <div className="row">
        <div className="avatar-container">
          <div className="photo">
            <img className="avatar" alt="avatar" src={randomImage} />
          </div>
        </div>
        <div className="details-container">
          <div className="content">
            <h3>{dog.breed}</h3>
            <p>
              Voluptate esse mollit magna aliquip ex est excepteur dolor
              incididunt elit pariatur deserunt cillum. Proident incididunt et
              laborum ex aliqua ex eu fugiat in eiusmod nulla. Proident officia
              aute mollit dolore proident ullamco ex aliqua. Ipsum aliqua irure
              reprehenderit voluptate ut minim excepteur deserunt consectetur
              quis. Id aliquip sint do aliqua sunt sit elit non ex. Do nisi eu
              amet id. Veniam dolore tempor ipsum laborum sit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dog;
