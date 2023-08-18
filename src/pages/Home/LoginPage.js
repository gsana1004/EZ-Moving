// src/pages/LoginPage.js
import React from 'react';

const LoginPage = () => {
    return (
        <div>
            <h2>Login</h2>
            <form>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
