import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css";

function LoginForm({ onClose }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ email, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data) setErrors(Object.values(data.errors));
      }
    );
  };

  const loginDemoUser = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(
      sessionActions.login({
        email: "demo@demo.io",
        password: "password",
      })
    ).catch(async (res) => {
      const data = await res.json();
      if (data) setErrors(data);
    });
  };

  return (
    <div>
      <form className="form_body" onSubmit={handleSubmit}>
        <span>Log in</span>
        <ul>
          {errors?.map((error, i) => (
            <li key={`loginError` + i}>{error}</li>
          ))}
        </ul>
        <div>
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            maxLength="50"
            // required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            maxLength="50"
            onChange={(e) => setPassword(e.target.value)}
            // required
          />
        </div>
        <button type="submit">Log In</button>
        <button onClick={loginDemoUser}>Demo User</button>
      </form>
    </div>
  );
}

export default LoginForm;
