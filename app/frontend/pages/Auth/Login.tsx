import React, { useState } from "react";
import { Link, Head } from "@inertiajs/react";
import "./Auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt with", email, password);
    // Submit login data here...
  };

  return (
    <>
      <Head>
        <title>Login - ChatRoom</title>
        <meta name="description" content="Login to ChatRoom" />
      </Head>
      <div className="auth-container">
        <div className="auth-glass-panel">
          <div className="auth-header">
            <h1>Welcome Back</h1>
            <p>Log in to access your chatrooms</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
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
              Sign In
            </button>
          </form>

          <div className="auth-footer">
            Don't have an account?
            <Link href="/signup" className="auth-link">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
