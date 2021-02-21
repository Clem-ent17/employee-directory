export default function SearchBox({ handleSearchChange }) {
  return (
    <div >
      <form >
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
    </div>
  );
}