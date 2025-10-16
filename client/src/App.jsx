import React, { useState } from 'react'; // Import useState
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

function App() {
  // Use state to manage the token, initializing from localStorage
  const [token, setToken] = useState(localStorage.getItem('token'));

  const handleSetToken = (newToken) => {
    setToken(newToken);
    if (newToken) {
      localStorage.setItem('token', newToken);
    } else {
      localStorage.removeItem('token');
    }
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            {!token && <li><Link to="/login">Login</Link></li>}
            {!token && <li><Link to="/register">Register</Link></li>}
          </ul>
        </nav>
        <hr />
        <Routes>
          {/* Pass the setToken function as a prop to the Login component */}
          <Route path="/login" element={<Login setToken={handleSetToken} />} />
          <Route path="/register" element={<Register />} />
          
          {/* The routing logic now uses the state variable 'token' */}
          <Route 
            path="/" 
            element={token ? <Home clearToken={() => handleSetToken(null)} /> : <Navigate to="/login" />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;