const Total = ({ parts }) => {
  return (
    <p>
      <b>
        Number of exercises:{" "}
        {parts.map((part) => part.exercises).reduce((a, b) => a + b, 0)}
      </b>
    </p>
  );
};

export default Total;
