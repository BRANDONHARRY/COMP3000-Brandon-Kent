import React from "react";
// import { BrowserRouter, Route, Link } from "react-router-dom";
import '../css/Navbar.css'

function Navbar() {
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>

                    <li>
                        <a href="/menu">Menu</a>
                    </li>

                    <li  class="right">
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;