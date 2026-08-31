import js from "@eslint/js";
import { useState } from "react";

const Header = ({ text }) => (
  <div>
    <h1>{text}</h1>
  </div>
);

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Statistics = ({ good, neutral, bad }) => {
  if (good == 0 && neutral == 0 && bad == 0) {
    return <div>No Statistics Available</div>;
  }
  const average = () => {
    return ((good - bad) / (good + neutral + bad)).toFixed(1) || 0;
  };
  const pctPositive = () => {
    const val = ((100 * good) / (good + neutral + bad)).toFixed(1) || "0";
    return `${val} %`;
  };

  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="average" value={average()} />
          <StatisticLine text="percent positive" value={pctPositive()} />
        </tbody>
      </table>
    </div>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <div>
      <Header text="give feedback" />
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />
      <Header text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
