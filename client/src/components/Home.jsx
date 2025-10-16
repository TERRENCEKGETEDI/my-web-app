import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login'); // If no token, redirect to login
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
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