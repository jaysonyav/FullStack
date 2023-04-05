import React, { useState } from "react";

const FormValidation = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [role, setRole] = useState("");
  const [rules, setRules] = useState(false);

  const emailError =
    (email.trim() === " ") & emailTouched
      ? "Email Filed is required"
      : !email.includes("@") && emailTouched
      ? "Invalid Email Format"
      : null;

  const passwordError =
    (password === "" || password.length < 5) && passwordTouched;
  const FormIsValid =
    !passwordError && !emailError && passwordTouched && emailTouched && rules;

  const submitHandler = (e) => {
    e.preventDefault();
    login();
  };
  const emailHandler = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);
    setEmailTouched(true);
  };
  const passwordHandler = (e) => {
    const enteredPassword = e.target.value;
    setPassword(enteredPassword);
    setPasswordTouched(true);
  };

  return (
    <form
      className="card card-body shadow m-5 w-50 mx-auto"
      onSubmit={submitHandler}
    >
      <h3 className="text-center">Login</h3>
      <div className="mb-3">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          className={`form-control ${emailError && "is-invalid"}`}
          name="email"
          id="email"
          onBlur={(e) => {
            setEmailTouched(true);
          }}
          onChange={emailHandler}
        />
        {emailError && <small className="text-danger">Invalid Email</small>}
      </div>
      <div className="mb-3">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className={`form-control ${passwordError && "is-invalid"}`}
          name="password"
          id="password"
          onBlur={() => {
            setPasswordTouched(true);
          }}
          onChange={passwordHandler}
        />
        {passwordError && (
          <small className="text-danger">Invalid Password</small>
        )}
      </div>
      <select
        name="role"
        id="role"
        className="form-select"
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>
      <div className="form-check my-3">
        <input
          type="checkbox"
          className="form-check-input"
          id="rules"
          onChange={() => setRules((prev) => !prev)}
        />
        <label htmlFor="rules">Aggree on the web app rules & aggrement</label>
      </div>
      <div className="text-center mb-3">
        <button className="btn btn-warning" disabled={!FormIsValid}>
          Login
        </button>
      </div>
    </form>
  );
};

export default FormValidation;
