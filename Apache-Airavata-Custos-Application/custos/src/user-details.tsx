import React, { useState } from 'react';
import { Divide, LogOut, UserIcon } from 'lucide-react';
// @ts-ignore
import { ReactComponent as Logo } from './user-logo.svg';
import './user-details.css';

interface User {
  email: string;
  name: string;
}

interface UserDetailProps {
  users: User[]; // Add a prop to accept multiple users
  onLogout: () => void;
  onSwitchUser: (user: User) => void; // Function to switch user
}

export default function UserDetails({ users, onLogout, onSwitchUser }: UserDetailProps) {
  const [selectedUser, setSelectedUser] = useState<User>(users[0]); // Set the initial user to the first in the list

  const handleSwitchUser = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const user = users.find(u => u.email === event.target.value);
    if (user) {
      setSelectedUser(user);
      onSwitchUser(user); // Call the parent function to switch user
    }
  };

  const styles = {
    body: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      background: 'linear-gradient(180deg, rgb(255, 255, 255) 0%, rgb(234, 221, 255) 100%)',
    },
    div: {
      background: 'linear-gradient(180deg, rgb(255, 255, 255) 0%, rgb(234, 221, 255) 100%)',
      height: '1024px',
      position: 'relative' as const,
      width: '1440px',
    },
    title: {
      background: 'linear-gradient(180deg, rgb(20.61, 14.35, 36) 0%, rgb(75.2, 52.36, 131.37) 51.5%, rgb(108.91, 83.19, 172.13) 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      color: 'transparent',
      fontSize: '50px',
      fontWeight: '900',
      left: '200px',
      letterSpacing: 'var(--title-page-letter-spacing)',
      lineHeight: 'var(--title-page-line-height)',
      position: 'absolute' as const,
      top: '90px',
    },
    welcome: {
      background: 'linear-gradient(180deg, rgb(20.61, 14.35, 36) 0%, rgb(75.2, 52.36, 131.37) 51.5%, rgb(108.91, 83.19, 172.13) 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      color: 'transparent',
      fontSize: '46px',
      fontWeight: '800',
      left: '200px',
      letterSpacing: 'var(--title-page-letter-spacing)',
      lineHeight: 'var(--title-page-line-height)',
      position: 'absolute' as const,
      top: '200px',
    },
    button: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '8px 16px',
      border: 'none',
      backgroundColor: 'ece6f0',
      borderRadius: '50px',
      fontSize: '14px',
      fontWeight: 500,
      color: '#333',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      boxShadow: '0px 4px 4px #00000040',
      marginRight: '8px', // Space between buttons
    },
    stateLayer: {
      display: 'flex',
      alignItems: 'center',
    },
    logOut: {
      marginRight: '8px',
    },
    labelText: {
      fontFamily: 'sans-serif',
      lineHeight: 1,
    },
    addContent: {
      padding: '10px',
      backgroundColor: '#e8def8',
      color: 'rgb(75.2, 52.36, 131.37)',
      border: '1px solid',
      borderColor: '#79747e',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      fontSize: '12px',
      fontWeight: 700,
      cursor: 'pointer',
    },
    select: {
      padding: '8px 16px',
      border: '1px solid #ccc',
      borderRadius: '50px',
      fontSize: '14px',
      marginRight: '8px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.div}>
        <h2 style={styles.title}>MyApp</h2>
        <span style={styles.welcome}>Welcome, {selectedUser.name}</span>

        <div className="text-column">
          <div className="headline-supporting">
            <div className="headline">User Info</div>
            <div className="published-date">Date of Account Creation</div>
            <div className="supporting-text">
              Username: {selectedUser.name}
              <br />
              Email: {selectedUser.email}
            </div>
          </div>
        </div>
        <Logo className="my-logo" />
        <div className="extended-FAB">
          <div className="state-layer">
            <select value={selectedUser.email} onChange={handleSwitchUser} style={styles.select}>
              {users.map(user => (
                <option key={user.email} value={user.email}>
                  {user.name}
                </option>
              ))}
            </select>
            <button
              onClick={onLogout}
              style={styles.button}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(109, 83, 172, 0.1)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              onFocus={(e) => e.currentTarget.style.boxShadow = '0 0 0 2px rgba(109, 83, 172, 0.5)'}
              onBlur={(e) => e.currentTarget.style.boxShadow = 'none'}
            >
              <div style={styles.stateLayer}>
                <LogOut style={styles.logOut} color="#6D53AC" size={24} strokeWidth={2.5} />
                <span style={styles.labelText}>Logout</span>
              </div>
            </button>
          </div>
        </div>
        <p className="text-wrapper">Get started by adding some content.</p>
        <button type="button" style={styles.addContent}>
          Add Content
        </button>
      </div>
    </div>
  );
}