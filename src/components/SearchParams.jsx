import { useEffect, useState } from "react";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

export default function SearchParams() {
  const [name, setName] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const breeds = [];

  function changeName(e) {
    setName(e.target.value);
  }

  useEffect(() => {
    // side effect
    console.log(name)
  }, [name])

  useEffect(() => {
    // side effect
    console.log(animal)
  }, [animal])


  return (
    <div className="search-params">
      <form>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            placeholder="Search by name"
            value={name}
            onChange={(e) => changeName(e)}
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
        <label htmlFor="breed">
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
        </label>
        <button type="button" onClick={() => console.log("submitted")}>Submit</button>
      </form>
    </div>
  );
}
