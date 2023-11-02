import React, { useState, useEffect } from "react";
//import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {


    return (
        <div className="container-fluid main_home_wrapper">
            <div className="text-center">
                <h1 className="home_title">Welcome<br></br>to your<br></br>To Do List!</h1>
                <h1 className="hello">Go to <a href="/login">sign in</a> or <a href="/signup">create an account</a> to get started!</h1>
            </div>
        </div>
    );
};