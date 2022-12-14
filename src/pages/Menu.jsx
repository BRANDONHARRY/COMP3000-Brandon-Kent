import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, Global } from "@emotion/react";
import { useState } from "react";

import MenuItems from "./menu_pages/MenuItems";
import MenuData from "./menu_pages/MenuData";
import Navbar from "./menu_pages/Navbar";


function Menu() {
    const [all, setAll] = useState(true);
    const [lunch, setLunch] = useState(false);
    const [drinks, setDrinks] = useState(false);
    const [checkout, setCheckout] = useState(false);

    return (
        <div
        className="App"
        css={css`
            background: #f0eff1;
            height: 100%;
            padding: 70px 0;
        `}
        >
            
        <title>Menu</title>

        <Navbar
            setAll={setAll}
            setLunch={setLunch}
            setDrinks={setDrinks}
            setCheckout={setCheckout}
        />

        <MenuItems
            items={MenuData}
            all={all}
            lunch={lunch}
            drinks={drinks}
            checkout={checkout}            
        />


        <Global
            styles={css`
            @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");

            ::selection {
                background: #000;
                color: #f0eff1;
            }

            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: "Poppins", sans-serif;
                --webkit-tap-highlight-color: transparent;
            }

            body::-webkit-scrollbar {
                width: 12px; /* width of the entire scrollbar */
            }

            body::-webkit-scrollbar-track {
                background: #f0eff1; /* color of the tracking area */
            }

            body::-webkit-scrollbar-thumb {
                background-color: #444444; /* color of the scroll thumb */
                border-radius: 20px; /* roundness of the scroll thumb */
                border: 3px solid #f0eff1; /* creates padding around scroll thumb */
            }

            body {
                background: #f0eff1;
            }

            .container {
                width: 80%;
                margin: auto;
            }
            `}
        />
        </div>
        );
}

export default Menu;
