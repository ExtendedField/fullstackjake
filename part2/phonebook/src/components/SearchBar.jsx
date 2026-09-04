const SearchBar = ({ search, setSearch }) => {
  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearch(searchValue);
  };

  return (
    <div>
      <input value={search} onChange={handleSearch} />
    </div>
  );
};
export default SearchBar;
