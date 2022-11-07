/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/react";
import Buttons from "./Buttons";

const Navbar = ({ setAll, setLunch, setDrinks, setCheckout }) => {
const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

return (
<div
    className="Navbar"
    css={css`
    display: flex;
    justify-content: space-around;

    .logo {
        font-size: 1.8rem;
    }

    ${mq[2]} {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        place-items: center;

        .Buttons {
        grid-row: 2;
        grid-column: 1/4;
        }

        .logo {
        grid-row: 1;
        grid-column: 1/4;
        position: relative;
        bottom: 10px;
        font-size: 3rem;
        }

        .dwu {
        grid-row: 1;
        grid-column: 1/4;
        font-size: 0.9rem;
        position: relative;
        top: 20px;
        font-weight: 400;
        font-size: 1.3rem;
        }
    }
    `}
>
    <h3 className="logo">Restaurant</h3>

    <Buttons
    className="Buttons"
    setAll={setAll}
    setLunch={setLunch}
    setDrinks={setDrinks}
    setCheckout={setCheckout}
    />

    <h3 className="cart" onClick={() => {
        setDrinks(false);
        setAll(false);
        setLunch(false);
        setCheckout(true);
    }}
    >Checkout Now.</h3>
</div>
);
};

export default Navbar;
