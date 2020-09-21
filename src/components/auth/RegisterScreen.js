import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { removeError, setError } from "../../actions/ui";
import { startRegisterWithEmailPassowrd } from "../../actions/auth";

export const RegisterScreen = () => {
  const { msgError } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    name: "Moises",
    email: "moises@gmail.com",
    password: "123456",
    password2: "123456",
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startRegisterWithEmailPassowrd(email, password, name))
    }
  };
  const dispatch = useDispatch();

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("Name is required"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Email is not valid"));
      return false;
    } else if (password !== password2) {
      dispatch(setError("Password´s dont match"));
      return false;
    } else if (password.length < 5) {
      dispatch(setError("Password length should be at least 6 characters"));
      return false
    }

    dispatch(removeError());
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
        

        <input
          className="auth__input"
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <input
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />

        <input
          className="auth__input"
          type="password"
          placeholder="Confirm password"
          name="password2"
          value={password2}
          onChange={handleInputChange}
        />

        <button className="btn btn-primary btn-block mb-5" type="submit">
          Register
        </button>

        {msgError && <div className="auth__alert-error">{msgError}</div>}

        <Link to="/auth/login" className="link">
          Already have a account?
        </Link>
      </form>
    </>
  );
};
