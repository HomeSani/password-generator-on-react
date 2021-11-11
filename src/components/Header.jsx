import React from "react";
import { header } from "./Header.module.css";

function Header() {
    return (
        <div className={header}>
            <h1>Password Generator</h1>
            <p>Use this tool for generate random and strong password!</p>
        </div>
    );
}

export default Header;
