import TableBody from './TableBody'
import Search from './Search'

export default function Table({users}) {
  
  return (
    <div className="Table">
      <Search />

      <TableBody 
          users={users}
      />
    </div>
  );
}