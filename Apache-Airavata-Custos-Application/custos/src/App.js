import React, { useState, useEffect } from 'react'
import LoginPage from './LoginPage.tsx'
import LandingPage from './Landing.tsx'
import CustosLogin from './custos-login.tsx'
import UserDetails from './user-details.tsx'

export default function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser)
  }

  const handleLogout = () => {
    localStorage.removeItem('user')
    setUser(null)
  }

  return (
    <div className="App">
      {user ? (
        <UserDetails user={user} onLogout={handleLogout} />
      ) : (
        <CustosLogin onLogin={handleLogin} />
      )}
    </div>
  )
}