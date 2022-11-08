const Person = (props) => {
  const over18 = props.age >= 18;
  let name;
  if (props.name.length > 8) {
    name = props.name.slice(0, 5);
  } else {
    name = props.name;
  }
  return (
    <div>
      <h3>{name}</h3>
      <p>Learn some information about this person.</p>
      <p>Age: {props.age}</p>
      <h3>{over18 ? "Please go vote!" : "You must be 18 to vote!"}</h3>
      <h5>Hobbies</h5>
      <ul>
        {props.hobbies.map((hobby) => (
          <li>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};
