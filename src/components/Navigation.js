import SearchBox from "./SearchBox";;

export default function Navigation({ handleSearchChange }) {
  return (
    <nav>
      <div id="navbarNav">
        <SearchBox/>
      </div>
    </nav>
  );
}