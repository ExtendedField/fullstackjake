import Button from "./Button";

const SubmissionForm = ({ persons, newNumber, setNewName, setPersons }) => {
  const addNumber = (event) => {
    event.preventDefault();
    if (persons.map((person) => person.name).includes(newNumber)) {
      window.alert(`${newNumber} is already in phonebook`);
      console.log(persons);
      setPersons([...persons]);
    } else {
      setPersons([...persons, { name: newNumber }]);
    }
  };
  const handleNumberChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <form onSubmit={addNumber}>
      <div>
        name: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <Button name="add" type="submit" />
      </div>
    </form>
  );
};

export default SubmissionForm;
