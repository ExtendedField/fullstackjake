import { useState } from "react";

import Header from "./components/Header";
import SubmissionForm from "./components/SubmissionForm";
import PhonebookDisplay from "./components/PhonebookDisplay/PhonebookDisplay";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addNumber = (event) => {
    event.preventDefault();
    setPersons([...persons, { name: newName }]);
  };

  const handleNumberChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <Header name="Phonebook" />
      <SubmissionForm
        value={newName}
        handleNumberChange={handleNumberChange}
        addNumber={addNumber}
      />
      <Header name="Numbers" />
      <PhonebookDisplay persons={persons} />
    </div>
  );
};

export default App;
