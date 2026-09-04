import Person from "./Person";

const PhonebookDisplay = ({ search, persons }) => {
  return (
    <div>
      {persons
        .filter((person) => person.name.includes(search))
        .map((person) => (
          <Person key={person.name} person={person} />
        ))}
    </div>
  );
};

export default PhonebookDisplay;
