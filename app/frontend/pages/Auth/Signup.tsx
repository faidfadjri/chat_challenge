import React, { useState } from 'react';
import { Link, Head } from '@inertiajs/react';
import './Auth.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup attempt with', name, email, password);
    // Submit registration data here...
  };

  return (
    <>
      <Head>
        <title>Sign Up - ChatRoom</title>
        <meta name="description" content="Create a ChatRoom account" />
      </Head>
      <div className="auth-container">
        <div className="auth-glass-panel">
          <div className="auth-header">
            <h1>Create Account</h1>
            <p>Join our real-time messaging platform</p>
          </div>
          
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                className="auth-input"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                className="auth-input"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                className="auth-input"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <button type="submit" className="btn-auth">
              Get Started
            </button>
          </form>
          
          <div className="auth-footer">
            Already have an account? 
            <Link href="/login" className="auth-link">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
