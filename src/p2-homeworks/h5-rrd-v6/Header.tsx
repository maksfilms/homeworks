import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from "./pages/Pages.module.css"

function Header() {
    return (
        <div>
            <NavLink className={s.prejunior} to={PATH.PRE_JUNIOR}><b>Pre-Junior</b></NavLink>
            <NavLink className={s.junior} to={PATH.JUNIOR}><b>Junior</b></NavLink>
            <NavLink className={s.juniorplus} to={PATH.JUNIOR_PLUS}><b>Junior+</b></NavLink>
            <span className={s.magicButton}>Open</span>
        </div>
    )
}

export default Header
