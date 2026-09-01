import Button from "./Button";
import FormField from "./FormField";

const SubmissionForm = ({
  persons,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  setPersons,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (persons.map((person) => person.name).includes(newName)) {
      window.alert(`${newName} is already in phonebook`);
      console.log(persons);
      setPersons([...persons]);
    } else {
      setPersons([...persons, { name: newName, number: newNumber }]);
    }
  };
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormField name="name" value={newName} onChange={handleNameChange} />
      <FormField
        name="number"
        value={newNumber}
        onChange={handleNumberChange}
      />
      <div>
        <Button name="add" type="submit" />
      </div>
    </form>
  );
};

export default SubmissionForm;
