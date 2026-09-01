import Button from "./Button";

const SubmissionForm = ({ persons, newNumber, setNewName, setPersons }) => {
  const addName = (event) => {
    event.preventDefault();
    if (persons.map((person) => person.name).includes(newNumber)) {
      window.alert(`${newNumber} is already in phonebook`);
      console.log(persons);
      setPersons([...persons]);
    } else {
      setPersons([...persons, { name: newNumber }]);
    }
  };
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <form onSubmit={addName}>
      <div>
        name: <input value={newNumber} onChange={handleNameChange} />
      </div>
      <div>
        <Button name="add" type="submit" />
      </div>
    </form>
  );
};

export default SubmissionForm;
