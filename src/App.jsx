import Pet from "./Pet"

function App() {
  const heading = "Adopt Me"
  const pets = [
    {
      name: "Jack",
      animal: "Rabbit",
      breed: "Havanese"
    },
    {
      name: "Jill",
      animal: "dog",
      breed: "Havanese"
    },
    {
      name: "Luna",
      animal: "dog",
      breed: "Havanese"
    }
  ]
  return (
    <div>
      <h1>{heading}</h1>
      {
        pets.map(pet => (
          <Pet name={pet.name} animal={pet.animal} breed={pet.breed} />
        ))
      }
    </div>
  )
}

export default App
