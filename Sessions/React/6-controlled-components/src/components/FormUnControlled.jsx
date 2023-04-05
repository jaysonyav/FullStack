import React, { useRef } from "react";

const FormUnControlled = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const roleRef = useRef();
  const checkRef = useRef();
  

  const submitHandler = (e) => {
    e.preventDefault();
   alert(`Email ${emailRef.current.value}, Password: ${passRef.current.value}, role: ${roleRef.current.value}, Checkbox: ${checkRef.current.checked}`)
   
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
          className={`form-control `}
          name="email"
          id="email"
          ref={emailRef}
        />
        
      </div>
      <div className="mb-3">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className={`form-control`}
          name="password"
          id="password"
          ref={passRef}
        />
        
      </div>
      <select
        name="role"
        id="role"
        className="form-select"
        ref={roleRef}
      >
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>
      <div className="form-check my-3">
        <input
          type="checkbox"
          className="form-check-input"
          id="rules"
          ref={checkRef}
        />
        <label htmlFor="rules">Aggree on the web app rules & aggrement</label>
      </div>
      <div className="text-center mb-3">
        <button className="btn btn-warning">Login</button>
      </div>
    </form>
  );
};

export default FormUnControlled;
