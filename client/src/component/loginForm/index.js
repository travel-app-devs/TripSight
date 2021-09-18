import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";

import Auth from "../../utils/auth";
import style from "./style.module.css";

const LoginForm = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }


    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <main className="flex-row justify-center">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className={style.cardHeader}>Login</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You are now logged in
                <Link to={`/dashboard`}></Link>
              </p>
            ) : (
              <form id={style.form} onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  id={style.formSubmitBtn}
                  className="btn btn-block btn-primary"
                  style={{ cursor: "pointer" }}
                  type="submit"
                >
                  Login
                </button>
              </form>
            )}

            {error && (
              <div className= {style.errorMessage}>
                {error.message}
              </div>
            )}
          </div>
          <div class={style.signInContainer}>
              <div className={style.signInSection}>
                <h4>New To Tripsight?</h4>
              </div>
              <div className={style.signInButton}>
                <Link id={style.createBtn} to="/signup">Create An Account</Link>
              </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginForm;
