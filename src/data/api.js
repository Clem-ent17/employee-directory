import React, { useState, useEffect } from 'react';

export default function Api() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    console.log('useEffect')
  /* 
  Write function to fethc the API data
    try => make api call
      setState of the users []
    catch => console.log error

  invoke the function
  pass in the dependency array BECAUSE it is needed only the first time the component mounts (componentDidMount)
  */

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
}