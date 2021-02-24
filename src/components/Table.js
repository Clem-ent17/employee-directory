import React from "react";

import TableBody from './TableBody'
import Search from './Search'

export default function Table({users}) {
  //const [query, setQuery] = useState([])

  // const handleQueryChange = (event) => {
  //   setQuery({...query, query: event.target.value});
  // };

  return (
    <div className="Table">
      <Search />

      <TableBody 
          users={users}
      />
    </div>
  );
}