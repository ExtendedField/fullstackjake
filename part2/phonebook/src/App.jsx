import { useState } from "react";

import Header from "./components/Header";
import SubmissionForm from "./components/SubmissionForm/SubmissionForm";
import PhonebookDisplay from "./components/PhonebookDisplay/PhonebookDisplay";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [filtered, setFiltered] = useState([...persons]);
  const [search, setSearch] = useState("");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  return (
    <div>
      <Header name="Phonebook" />
      <SearchBar
        search={search}
        setSearch={setSearch}
        persons={persons}
        setFiltered={setFiltered}
      />
      <Header name="add a new number" />
      <SubmissionForm
        persons={persons}
        search={search}
        setFiltered={setFiltered}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        setPersons={setPersons}
      />
      <Header name="Numbers" />
      <PhonebookDisplay filtered={filtered} />
    </div>
  );
};

export default App;
