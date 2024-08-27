function Pet(props) {
  return (
    <div>
      <h2>{props.animal}</h2>
      <h3>{props.breed}</h3>
      <h4>{props.name}</h4>
    </div>
  );
}
export default Pet;
