import React, { useState } from "react";
import PropTypes from 'prop-types';
import { postDataNoToken } from "../../API/requests.js";
import "./login.css";

const Login = ({ setToken }) => {
    const [error, setError] = useState(false);

    const [formData, setFormData] = useState({
        login: "",
        password: "",
    });
    const [errorText, setErrorText] = useState("Неправильный логин или пароль");

    const handleSubmit = async e => {
        e.preventDefault();

        console.log('formData', formData)
        postDataNoToken('login/', formData).then((response) => {
            console.log('response', response);
            if (response.token) {
                setToken(response);
            } else {
                setErrorText(response.message);
                setError(true);
            }
        })
        .catch(() => setError(true));
    }

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="loginWrapper">
            <div className="login">
                <h1 className="welcome">Login </h1>
                <form className="loginForm" onSubmit={handleSubmit}>
                    <input
                        className="loginInput"
                        type="text"
                        onChange={handleInput}
                        placeholder="Логин"
                        name="login"
                        required
                    />
                    <br />
                    <input
                        className="loginInput"
                        type="password"
                        placeholder="Пароль"
                        onChange={handleInput}
                        name="password"
                        required
                    />
                    {error ? (
                        <div className="loginErrorMessage">{errorText}</div>
                    ) : (
                        <br />
                    )}
                    <br />
                    <input className="loginInput loginBtn" value="Войти" type="submit" />
                </form>
            </div>
        </div>
    );
};
export default Login;


Login.propTypes = {
    setToken: PropTypes.func.isRequired
}