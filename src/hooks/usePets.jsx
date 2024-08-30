import { useEffect, useState } from "react";

export default function usePets() {
  const [pets, setPets] = useState([]);

  async function fetchPets() {
    const response = await fetch("http://pets-v2.dev-apis.com/pets")
    const data = await response.json();
    setPets(data.pets)
  }

  async function filterPets(location, animal) {
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?location=${location}&animal=${animal}`);
    const body = await res.json();
    setPets(body.pets)
  }

  useEffect(() => {
    fetchPets();
  }, []);

  return [pets, filterPets];
}