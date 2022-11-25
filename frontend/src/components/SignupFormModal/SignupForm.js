import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import "./SignupForm.css";

function SignupForm({ onClose }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signup({ email, firstName, lastName, password })
      ).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(Object.values(data.errors));
      });
    }
    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
  };

  return (
    <div>
      <form className="sign_up__form" onSubmit={handleSubmit}>
        <span>Welcome to Mybnb</span>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <div>
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            maxLength="30"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            maxLength="30"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            value={email}
            maxLength="50"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            maxLength="50"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            maxLength="50"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupForm;
