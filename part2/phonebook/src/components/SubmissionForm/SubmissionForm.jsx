import Button from "./Button";
import FormField from "./FormField";

// I think the crux of my woes is that this feels to specific to be reusable
// that feels antithetical to the React conceptual framework
const SubmissionForm = ({
  persons,
  search,
  setFiltered,
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
      const newPhonebook = [...persons, { name: newName, number: newNumber }];
      setPersons(newPhonebook);
      setFiltered(
        newPhonebook.filter((person) => person.name.includes(search)),
      );
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
