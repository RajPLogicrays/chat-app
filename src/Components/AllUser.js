import axios from 'axios';
import React, { useEffect, useState } from 'react';

function AllUser() {

  const [data, setUseData] = useState([]);

  const ChatData = () => {
    axios.get('http://localhost:3001/chat-user')
      .then(({ data }) => {
        setUseData( data );
      })
      .catch(() => {
        alert("Somthing is wrong");
      })
  }
  
  useEffect(() => {
    ChatData();
  }, []);

  return (
    <ul>
      {data.map((user, index) => (
        <li key={index}>{user.name}</li>
      ))}
    </ul>
  )
}

export default AllUser;