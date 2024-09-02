import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import styles from './styles.module.css';
import React from 'react';

const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate(); // Initialize useNavigate

    const handleChange = ({currentTarget: input}) => {
        setData({...data, [input.name]: input.value });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Simulate login validation (replace this with actual backend request)
        const isLoginSuccessful = true; // Assume login is successful

        if (isLoginSuccessful) {
            navigate("/user/dashboard/2"); // Redirect to user dashboard on successful login
        } else {
            // Handle login failure (show error message, etc.)
            console.error('Login failed. Please check your credentials.');
        }
    }

    return (
        <div className={styles.login_container}>
            <div className={styles.login_form_container}>
                <div className={styles.left}>
                    <h1>New Here?</h1>
                    <Link to="/Signup">
                        <button type='button' className={styles.white_btn}>
                            Create Account
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
                        <h1>Login to your Account</h1>
                        <input
                            type='email'
                            placeholder='Email ID'
                            name='email'
                            onChange={handleChange}
                            value={data.email}
                            required
                            className={styles.input}
                        />
                        <input
                            type='password'
                            placeholder='Password'
                            name='password'
                            onChange={handleChange}
                            value={data.password}
                            required
                            className={styles.input}
                        />
                        {/* Add a return for error message here from handleSubmit */}
                        <button type="submit" className={styles.green_btn}>
                            Log In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
