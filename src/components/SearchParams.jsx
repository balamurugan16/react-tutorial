import { useEffect, useState } from "react";
import Results from "./Results";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

export default function SearchParams() {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [pets, setPets] = useState([]);
  // const [breed, setBreed] = useState("");
  // const breeds = [];

  function changeLocation(e) {
    setLocation(e.target.value);
  }

  async function fetchPets() {
    const response = await fetch("http://pets-v2.dev-apis.com/pets")
    const data = await response.json();
    setPets(data.pets)
  }

  useEffect(() => {
    fetchPets();
  }, []);

  async function onSubmit(e) {
    e.preventDefault();
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?location=${location}&animal=${animal}`);
    const body = await res.json();
    setPets(body.pets)
  }

  return (
    <div className="search-params">
      <form onSubmit={onSubmit}>
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            placeholder="Location"
            value={location}
            onChange={(e) => changeLocation(e)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        {/* <label htmlFor="breed">
          Breed
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
        </label> */}
        <button type="submit">Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
}
