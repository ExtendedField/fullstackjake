const SearchBar = ({ search, setSearch, persons, setFiltered }) => {
  const handleSearch = (event) => {
    const searchValue = event.target.value;
    const peopleToShow =
      search.length === 0
        ? [...persons]
        : persons.filter((person) => person.name.includes(searchValue));
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
