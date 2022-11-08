const Tweet = (props) => (
  <p>
    <b>
      {props.username} {props.date}
    </b>
    <br />
    {props.name}: {props.message}
  </p>
);
