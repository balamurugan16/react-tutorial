import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  const { id } = useParams();
  const [pet, setPet] = useState();

  async function fetchPet() {
    const response = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
    const data = await response.json();
    setPet(data.pets[0]);
  }

  useEffect(() => {
    fetchPet();
  }, []);

  if (!pet) {
    return (
        <p>Loading...</p>
    )
  }

  return (
    <div className="details">
      <div>
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
        <button>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </div>
    </div>
  );
}
