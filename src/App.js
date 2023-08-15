import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:8080/api/candidates/getAll").then(a => setData(a.data.data[0].email))
  },[data])

  return (
    <div className="App">
     
    <h1>{data}</h1>
   
     
    </div>
  );
}

export default App;
