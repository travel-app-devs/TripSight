import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import style from './style.module.css';


const SignupForm = () => {
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
      });
      const [addUser, { error, data }] = useMutation(ADD_USER);
    
      const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
        console.log(handleChange);
      };
    
      const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
    
        try {
          const { data } = await addUser({
            variables: { ...formState },
          });
          console.log(data)
    
          Auth.login(data.addUser.token);
        } catch (e) {
          console.error(e);
        }
      };
    
      return (
        <main className="flex-row justify-center mb-4">
          <div className="col-12 col-lg-10">
            <div className="card">
              <h4 className= {style.cardHeader}>Sign Up</h4>
              <div className="card-body">
                {data ? (
                  <p>
                    Success! You are signed in
                    <Link to={`/dashboard`}></Link>
                  </p>
                ) : (
                  <form id={style.form} onSubmit={handleFormSubmit}>
                    <input
                      className="form-input"
                      placeholder="Your username"
                      name="username"
                      type="text"
                      value={formState.username}
                      onChange={handleChange}
                    />
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
                      id= {style.formSubmitBtn}
                      className="btn btn-block btn-primary"
                      style={{ cursor: 'pointer' }}
                      type="submit"
                    >
                      Create your tripsight account
                    </button>
                  </form>
                )}
    
                {error && (
                  <div className= {style.errorMessage}>
                    {error.message}
                  </div>
                )}
              </div>
              <div className={style.loginContainer}>
                    <p>Already have an account? <Link to="/login">Sign-in</Link></p>
              </div>
            </div>
          </div>
        </main>
      );
}

export default SignupForm;