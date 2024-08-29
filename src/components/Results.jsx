import Pet from "./Pet";

export default function Results(props) {
  const { pets } = props;
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => <Pet key={pet.id} {...pet} />)
      )}
    </div>
  );
}
