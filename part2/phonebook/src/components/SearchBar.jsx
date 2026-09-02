const SearchBar = ({ search, setSearch, persons, setFiltered }) => {
  const handleSearch = (event) => {
    const searchValue = event.target.value;
    console.log(searchValue);
    const peopleToShow =
      search.length === 0
        ? [...persons]
        : persons.filter((person) => person.name.includes(searchValue));
    console.log(peopleToShow);
    setSearch(searchValue);
    setFiltered(peopleToShow);
  };

  return (
    <div>
      <input value={search} onChange={handleSearch} />
    </div>
  );
};
export default SearchBar;
