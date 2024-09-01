import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import React from 'react';

const Signup = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });
    

    const navigate = useNavigate();

    const handleChange = ({currentTarget: input}) => {
        setData({...data, [input.name]: input.value });
    };
    
    const handleSubmit = async  (e) => {
        e.preventDefault();
        // Transfer to login page after storing SignUp data in BACKEND 
        // If any backend error occurs Return that error
        navigate("/login")
    }

    return (
    <div className={styles.signup_container}>
        <div className={styles.signup_form_container}>
            <div className={styles.left}>
                <h1>Welcome Back!</h1>
                <Link to="/login">
                    <button type='button' className={styles.white_btn}>
                        Sign In
                    </button>
                </Link>
                <Link to="/admin/login">
                    <button type='button' className={styles.white_btn}>
                        Admin Sign In
                    </button>
                </Link>
            </div>
            <div className={styles.right}>
                <form className={styles.form_container} onSubmit={handleSubmit}>
                    <h1>Create Account</h1>
                    <input
                        type = 'text'
                        placeholder = 'First Name'
                        name = 'firstName'
                        onChange = {handleChange}
                        value = {data.firstName}
                        required
                        className= {styles.input}
                    />
                    <input
                        type = 'text'
                        placeholder = 'Last Name'
                        name = 'lastName'
                        onChange = {handleChange}
                        value = {data.lastName}
                        required
                        className= {styles.input}
                    />
                    <input
                        type = 'email'
                        placeholder = 'Email ID'
                        name = 'email'
                        onChange = {handleChange}
                        value = {data.email}
                        required
                        className= {styles.input}
                    />
                    <input
                        type = 'password'
                        placeholder = 'Password'
                        name = 'password'
                        onChange = {handleChange}
                        value = {data.password}
                        required
                        className= {styles.input}
                    />
                    {/* add a return for error message here from handleSubmit*/}
                    <button type="submit" className={styles.green_btn}>
                        Sign Up
                    </button>
                </form>

            </div>
        </div>
    </div>
  )
}

export default Signup