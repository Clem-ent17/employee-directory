//Import syle sheet
import '../App.css';

export default function Search({ handleSearchChange }) {
  return (
    <div>
      <form >
        <input
          className="Search"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
    </div>
  );
}