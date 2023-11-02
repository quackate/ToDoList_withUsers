import React, { useState, useEffect } from "react";
//import { Context } from "../store/appContext";
import "../../styles/login.css";

export const Login = () => {

    return (
        <div className="container-fluid login-wrapper">
            <h1 className="login_title">Sign In &#x2728;​</h1>
            <div className="text-center">
                <ul className="input_wrapper mb-4">
                    <li className="px-4 loginp_label">
                        Email
                    </li>
                    <li className="item_input px-5">
                        <input type="email" className="log_emailinput login_input" id="email" placeholder="Enter your email" />
                    </li>
                </ul>

                <ul className="input_wrapper">
                    <li className="px-4 loginp_label">
                        Password
                    </li>
                    <li className="item_input px-5">
                        <input type="password" className="log_passwordinput login_input" id="password" placeholder="Enter your password" />
                    </li>
                </ul>
                <button type="button" className="login_btn">Sign in</button>
            </div>
        </div>
    );
};