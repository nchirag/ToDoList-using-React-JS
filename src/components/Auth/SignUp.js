import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import './SignUp.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();

  const handleSignUp = (e) => {
    e.preventDefault();
    // Replace with actual sign-up logic
    if (email && password) {
      signIn({ email });
      alert('Signed up successfully!');
    }
  };

  return (
    <div className="sign-up-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
