import { useState } from "react";

import Header from "./components/Header";
import SubmissionForm from "./components/SubmissionForm/SubmissionForm";
import PhonebookDisplay from "./components/PhonebookDisplay/PhonebookDisplay";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  return (
    <div>
      <Header name="Phonebook" />
      <SubmissionForm
        persons={persons}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        setPersons={setPersons}
      />
      <Header name="Numbers" />
      <PhonebookDisplay persons={persons} />
    </div>
  );
};

export default App;
