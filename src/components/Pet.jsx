import {  useNavigate } from "react-router-dom";

function Pet(props) {
  const { name, animal, breed, images, city, state, id } = props;
  const navigate = useNavigate() // programmatic navigation

  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";

  if (images.length) {
    hero = images[0];
  }

  return (
    // <Link to={`/details/${id}`}>
      <div className="pet" onClick={() => {
        navigate(`details/${id}`)
      }}>
        <div className="image-container">
          <img src={hero} alt={name} />
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${city}, ${state}`}</h2>
        </div>
      </div>
    // </Link>
  );
}
export default Pet;
