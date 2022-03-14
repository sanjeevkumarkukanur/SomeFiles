import React from 'react';
import './Logout.css';

import { logout } from "../features/userSlice"
import { useDispatch } from "react-redux";
import {useSelector } from "react-redux";
import {selectUser } from "../features/userSlice"

const Logout = ()=>{

    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const handleLogout =(e)=>{
        e.preventDefault()
        dispatch(logout());
    }

    return (
        <div className="logout">
            <h1>Welcome<span className="user__name">{user.name}!</span></h1>
            <button className="logout__btn" onClick = {(e) => handleLogout(e)}>Logout</button>
            </div>
    )
}

export default Logout;