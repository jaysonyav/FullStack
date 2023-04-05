import React, { useRef } from "react";

const FormUnControlled = () => {
  const emailRef = useRef();
  let emailError= false;

  const submitHandler = (e) => {
    e.preventDefault();
    if(emailRef.current.trim()|| emailRef.current.value.includes('@')){
        emailError = false;
    }else{
        emailError = true;
    }
    console.log(emailRef.current.value);
    emailRef.current.value = ''
  };
  return (
    <form
      className="card card-body shadow m-5 w-50 mx-auto"
      onSubmit={submitHandler}
    >
      <h3 className="text-center">Login</h3>
      <div className="mb-3">
        <label htmlFor="email" className={emailError&&'is-invalid'}>Email</label>
        <input
          type="text"
          className={`form-control ${emailError&&'is-invalid'}`}
          name="email"
          id="email"
          ref={emailRef}
        />
        {/* {emailError && <small className="text-danger">Invalid Email</small>}
      </div>
      <div className="mb-3">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className={`form-control ${passwordError && "is-invalid"}`}
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
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
        <label htmlFor="rules">Aggree on the web app rules & aggrement</label> */}
      </div>
      <div className="text-center mb-3">
        <button className="btn btn-warning">Login</button>
      </div>
    </form>
  );
};

export default FormUnControlled;
