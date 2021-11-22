import React from "react";
import './NavBar.module.css';
import s from "./NavBar.module.css";

const NavBar = () => {
    return  <nav className={s.nav}
    >
        <div className={s.item}>
            <a href="/profile">Profile</a>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <a href="/dialog">Messages</a>
        </div>
        <div className={s.item}>
            <a>News</a>
        </div>
        <div className={s.item}>
            <a>Music</a>
        </div>
        <div className={s.item}>
            <a>Settings</a>
        </div>
    </nav>
}

export default NavBar;