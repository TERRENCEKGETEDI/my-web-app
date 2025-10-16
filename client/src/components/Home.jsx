import React from 'react';
import { useNavigate } from 'react-router-dom';

// Accept 'clearToken' as a prop
function Home({ clearToken }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        clearToken(); // Use the function from props to clear the token
        navigate('/login');
    };

    return (
        <div>
            <h1>Welcome to the Home Page!</h1>
            <p>You are successfully logged in.</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Home;