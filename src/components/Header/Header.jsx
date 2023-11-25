import React, { useState, useEffect } from "react";
import './Header.css'
import { BiMenuAltRight } from 'react-icons/bi'
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpened(prev => !prev); 
    };

    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <img src="./CAS HOMES.jpg" alt="logo" width={100} />
                <div className="innerWidth flexCenter">
    <div className="menu-icon" onClick={handleMenuToggle}>
        <BiMenuAltRight size={30} />
    </div>
    <OutsideClickHandler onOutsideClick={()=>{
        setMenuOpened(false)
    }
    }
    >
    <div className="h-menu" style={{ right: menuOpened ? '0' : '-100%' }}>
        
        <a href="">Home</a>
        <a href="#hero">Residencies</a>
        <a href="">Our Values</a>
        <button className="button">
            <a href="">Contact Us</a>
        </button>
    </div>
    </OutsideClickHandler>
</div>

            </div>
        </section>
    );
}

export default Header;
