//App.jsx

import { useNavigate } from 'react-router-dom';
import './App.css';
import './index.css';
import { getToken } from './getToken';
import { useEffect } from 'react';


import { getDataAuth, authFlow } from "./setup";
function App() {

  const navigate = useNavigate();
  const handleSetup = async () => {
    const code = await getDataAuth();
    authFlow(code)
  }

  /*const getUsers = async () => {
    const url = "http://localhost:3000/api/users";
    const res = await spotifyAPI(url, 'GET', null);
    console.log(res);
  }

  useEffect(() => {
    getUsers();
  }, [])*/

  const handleGetToken = () => {
    getToken();
    navigate('/dashboard');
  }
  return (
    <div className="app-container">
      <h1>Hola Mundo</h1>
      <button onClick={handleSetup}>Start Setup</button>
      <button onClick={handleGetToken}>Get Token</button>
    </div>
  );
}

export default App;

