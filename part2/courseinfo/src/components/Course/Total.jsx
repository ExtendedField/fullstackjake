const Total = ({ parts }) => {
  // TODO: refactor to make this work for list of abitrary length
  return (
    <p>
      Number of exercises:{" "}
      {parts[0].exercises + parts[1].exercises + parts[2].exercises}
    </p>
  );
};

export default Total;