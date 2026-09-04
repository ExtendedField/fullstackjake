import { useState, useEffect } from "react";

import Header from "./components/Header";
import SubmissionForm from "./components/SubmissionForm/SubmissionForm";
import PhonebookDisplay from "./components/PhonebookDisplay/PhonebookDisplay";
import SearchBar from "./components/SearchBar";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [search, setSearch] = useState("");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  useEffect(() => {
    console.log("fetching data...");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log(response.length);
      setPersons(response.data);
    });
    console.log("data recovered.");
  }, []);

  return (
    <div>
      <Header name="Phonebook" />
      <SearchBar search={search} setSearch={setSearch} persons={persons} />
      <Header name="add a new number" />
      <SubmissionForm
        persons={persons}
        search={search}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        setPersons={setPersons}
      />
      <Header name="Numbers" />
      <PhonebookDisplay search={search} persons={persons} />
    </div>
  );
};

export default App;
