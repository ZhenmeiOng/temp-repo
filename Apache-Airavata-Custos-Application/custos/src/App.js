import React, { useState, useEffect } from 'react';
import LoginPage from './LoginPage';
import LandingPage from './Landing';
import CustosLogin from './custos-login';
import UserDetails from './user-details';

// Sample list of users
const users = [
  { email: 'user1@gatech.edu', name: 'User One' },
  { email: 'user2@gatech.edu', name: 'User Two' },
  { email: 'user3@gatech.edu', name: 'User Three' },
];

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
    localStorage.setItem('user', JSON.stringify(loggedInUser)); // Store user in localStorage
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const handleSwitchUser = (newUser) => {
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser)); // Update localStorage with new user
  };

  return (
    <div className="App">
      {user ? (
        <UserDetails user={user} onLogout={handleLogout} onSwitchUser={handleSwitchUser} users={users} />
      ) : (
        <CustosLogin onLogin={handleLogin} />
      )}
    </div>
  );
}