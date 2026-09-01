import { useState } from "react";

import Header from "./components/Header";
import SubmissionForm from "./components/SubmissionForm";
import PhonebookDisplay from "./components/PhonebookDisplay/PhonebookDisplay";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  return (
    <div>
      <Header name="Phonebook" />
      <SubmissionForm
        persons={persons}
        newNumber={newName}
        setNewName={setNewName}
        setPersons={setPersons}
      />
      <Header name="Numbers" />
      <PhonebookDisplay persons={persons} />
    </div>
  );
};

export default App;
