import React, { useState } from 'react';
import { LogOut } from 'lucide-react'; // Imported only LogOut icon
import './user-details.css';
import { CSSProperties } from 'react'; // Import CSSProperties from React

// Define User interface
interface User {
  email: string;
  name: string;
}

// Define the props for the component
interface UserDetailProps {
  users: User[]; // Array of users
  onLogout: () => void; // Logout function
  onSwitchUser: (user: User) => void; // Function to switch user
}

export default function UserDetails({ users, onLogout, onSwitchUser }: UserDetailProps) {
  const [selectedUser, setSelectedUser] = useState<User>(users[0]); // Initial user

  // Handle switch user
  const handleSwitchUser = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const user = users.find(u => u.email === event.target.value);
    if (user) {
      setSelectedUser(user);
      onSwitchUser(user); // Notify parent component
    }
  };

  // Define styles
  const styles: { [key: string]: CSSProperties } = {
    body: {
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(180deg, rgb(255, 255, 255) 0%, rgb(234, 221, 255) 100%)',
      padding: '20px',
    },
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      gap: '40px',
      padding: '40px',
      background: '#fff',
      borderRadius: '16px',
      boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
      maxWidth: '800px',
      width: '100%',
    },
    textSection: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    iconSection: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      width: '120px',
      height: '120px',
      backgroundColor: '#6D53AC',
      borderRadius: '50%',
    },
    title: {
      fontSize: '50px',
      fontWeight: '900',
      color: '#6D53AC',
      marginBottom: '10px',
    },
    welcome: {
      fontSize: '36px',
      fontWeight: '800',
      marginBottom: '20px',
      color: '#6D53AC',
    },
    userInfo: {
      fontSize: '18px',
      marginBottom: '20px',
      color: '#333',
    },
    button: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '10px 20px',
      border: 'none',
      backgroundColor: '#6D53AC',
      borderRadius: '50px',
      fontSize: '14px',
      fontWeight: '500',
      color: '#fff',
      cursor: 'pointer',
      marginBottom: '20px',
    },
    logoutIcon: {
      marginRight: '10px',
    },
    addContentButton: {
      padding: '10px 20px',
      backgroundColor: '#6D53AC',
      color: '#fff',
      border: 'none',
      borderRadius: '30px',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: '600',
      marginBottom: '20px',
    },
    switchUserButton: {
      padding: '10px 20px',
      backgroundColor: '#999',
      color: '#fff',
      border: 'none',
      borderRadius: '30px',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: '600',
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <div style={styles.iconSection}>
          <div style={styles.icon}>
            {/* Add the user icon or image here */}
          </div>
        </div>
        <div style={styles.textSection}>
          <h2 style={styles.title}>MyApp</h2>
          <span style={styles.welcome}>Welcome, {selectedUser.name}!</span>
          <div style={styles.userInfo}>
            <p>Date of Account Creation</p>
            <p>Username: {selectedUser.name}</p>
            <p>Email: {selectedUser.email}</p>
          </div>
          <button onClick={onLogout} style={styles.button}>
            <LogOut style={styles.logoutIcon} color="#fff" size={24} strokeWidth={2.5} />
            Logout
          </button>
          <p>Get started by adding some content.</p>
          <button type="button" style={styles.addContentButton}>Add Content</button>
          {/* Switch User Dropdown */}
          <div>
            <label htmlFor="switchUser" style={{ marginRight: '10px' }}>Switch User:</label>
            <select id="switchUser" onChange={handleSwitchUser}>
              {users.map(user => (
                <option key={user.email} value={user.email}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}