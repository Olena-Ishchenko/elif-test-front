import css from "./SearchInput.module.css";

const SearchInput = ({
  valueName,
  onSearchName,
  valueEmail,
  onSearchEmail,
}) => {
  return (
    <div className={css.searchContainer}>
      <div>
        <p className={css.searchText}>Find participant by full name</p>
        <input
          className={css.searchInput}
          type="text"
          value={valueName}
          onChange={(e) => onSearchName(e.target.value)}
        />
      </div>
      <div>
        <p className={css.searchText}>Find participant by email</p>
        <input
          className={css.searchInput}
          type="text"
          value={valueEmail}
          onChange={(e) => onSearchEmail(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchInput;
