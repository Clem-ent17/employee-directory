import React, { useState, useEffect } from 'react';

//importing components
import Header from './components/Header'
import Table from './components/Table'

//Import syle sheet
import './App.css';

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=100')
        const data = await response.json()
        setUsers([...data.results])
      } catch(err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  useEffect(() => console.log('users ', users))
  
  return (
    <div className="App">
      <Header />

      <Table 
        users={users}
      />
    </div>
  );
}

export default App;
