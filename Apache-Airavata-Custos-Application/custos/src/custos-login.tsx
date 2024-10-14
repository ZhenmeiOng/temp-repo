// framework/languages used:
// -- typescript
// -- css (both block and inline) mixed with tailwind (inline)
// note: we didn't create a separate style.css file 
// since they are all included here.

//-------------------------------------------------------------

import React, { useState, useEffect } from "react"
import { EyeIcon, EyeOffIcon} from "lucide-react"

interface User {
  email: string;
  name: string;
}

interface LoginPageProps {
  onLogin: (user: User) => void;
}



export default function CustosLogin ({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Simulated authentication logic
    if (email === 'user@example.com' && password === 'password') {
      const user: User = { email, name: 'John Doe' }
      localStorage.setItem('user', JSON.stringify(user))
      onLogin(user)
    } else {
      setError('Invalid email or password')
    }
  }

////////////////////// css styles /////////////////////////////////

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(180deg, rgb(255, 255, 255) 0%, rgb(218, 239, 232) 100%)',
    padding: '20px',
  },
  formContainer: {
    width: '100%',
    maxWidth: '442px',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '20px',
  },
  title: {
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    fontSize: '40px',
    fontWeight: 800,
    textAlign: 'center' as const,
    background: 'linear-gradient(180deg, rgb(14.35, 36, 21.57) 0%, rgb(52.36, 131.37, 108.98) 51.5%, rgb(108, 217.81, 186.7) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '20px',
  },
  inputField: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '8px',
  },
  label: {
    fontFamily: '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif',
    fontSize: '120%',
    textAlign: 'left' as const,
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '14px',
    fontFamily: 'monospace',
    border: '1px solid #b3b3b3',
    borderRadius: '4px',
  },
  forgotPassword: {
    alignSelf: 'flex-start',
    color: '#1e88e5',
    textDecoration: isHovered? 'underline' : 'none',
    fontSize: '14px',
    cursor: 'pointer',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#14ae5ceb',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    fontSize: '16px',
    fontWeight: 700,
    cursor: 'pointer',
    boxShadow: '0px 4px 4px #00000040',
  },
  eyeButton: {
    position: 'absolute' as const,
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
  },
}
////////////////////// jsx section /////////////////////////////////////////

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Custos Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>} {/*not sure*/}
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <div style={styles.inputField}>
            <label htmlFor="email" style={styles.label}>
              Username/Email
            </label>
            <input
              id="email"
              placeholder="username"
              type="email"
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div style={{ ...styles.inputField, marginTop: '20px' }}>
            <label htmlFor="password" style={styles.label}>
              Password
            </label>
            <div style={{position:'relative'}}>
              <input
                id="password"
                placeholder="Enter your password"
                type=/*"password"*/ {showPassword ? "text" : "password"}
                style={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                /*className="absolute inset-y-0 right-0 pr-3 flex items-center"*/
                style={styles.eyeButton}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOffIcon className="h-5 w-5 text-gray-500" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-gray-500" />
                )}
              </button>
            </div>
          </div>
          <div style={{ marginTop: '10px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" style={styles.forgotPassword} 
            onMouseEnter={() => setIsHovered(true)}  // handle hover state
            onMouseLeave={() => setIsHovered(false)}>
              Forgot password?
            </a>
          </div>
          <button type="submit" style={styles.button} >
            Login
          </button>
        </form>
        <p className="mt-8 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="#" style={{ color: '#1e88e5', textDecoration: 'none' }}>
            Sign up
          </a>
        </p>
      </div>
    </div>
  )
}
