import TableBody from './TableBody'
import Navigation from './Navigation'

export default function Table({users}) {
  

  return (
    <div className="Table">
      <Navigation/>

      <TableBody 
          users={users}
      />
    </div>
  );
}