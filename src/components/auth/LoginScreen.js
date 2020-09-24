import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startLoginEmailPassword, startGoogleLogin } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import { removeError, setError } from "../../actions/ui";

export const LoginScreen = () => {
  const [formValues, handleInputChange] = useForm({
    email: "moises@gmail.com",
    password: "123456",
  });

  const { email, password } = formValues;

  const { msgError, loading } = useSelector((state) => state.ui);

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    if (validForm()) dispatch(startLoginEmailPassword(email, password));
  };

  const handleGoogleSignIn = () => {
    dispatch(startGoogleLogin());
  };

  const validForm = () => {
    if (!validator.isEmail(email)) {
      dispatch(setError("Email is not valid"));
      return false;
    } else if (password.length < 5) {
      dispatch(setError("Password length should be at least 6 characters"));
      return false;
    }

    dispatch(removeError());
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form onSubmit={handleLogin} className="animate__animated animate__fadeIn anime__faster">
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

        <button className="btn btn-primary btn-block" type="submit" disabled={loading}>
          Login
        </button>

        {msgError && <div className="auth__alert-error mt-1">{msgError}</div>}

        <hr />
        <div className="auth__social-networks">
          <p>Login with social networks</p>

          <div className="google-btn" onClick={handleGoogleSignIn}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>

        <Link to="/auth/register" className="link">
          Create new account
        </Link>
      </form>
    </>
  );
};
