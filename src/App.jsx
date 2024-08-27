import Pet from "./Pet"

function App() {
  const heading = "Adopt Me"
  const pets = [
    {
      name: "Luna",
      animal: "Dog",
      breed: "Husky"
    },
    {
      name: "Pepper",
      animal: "Bird",
      breed: "Parrot"
    },
    {
      name: "Ricky",
      animal: "Cat",
      breed: "Mix"
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
