import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import './SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();

  const handleSignIn = (e) => {
    e.preventDefault();
    // Replace with actual authentication logic
    if (email && password) {
      signIn({ email });
      alert('Signed in successfully!');
    }
  };

  return (
    <div className="sign-in-form">
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
