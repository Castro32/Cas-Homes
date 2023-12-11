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
            <div className="flexEnd paddings innerWidth h-container">
                <img src="./CAS HOMES.jpg" alt="logo" width={100} />
                <div className="innerWidth flexEnd">
    <div className="menu-icon" onClick={handleMenuToggle}>
        <BiMenuAltRight size={30} />
    </div>
    <OutsideClickHandler onOutsideClick={()=>{
        setMenuOpened(false)
    }
    }
    >
<div className="h-menu" style={{ right: menuOpened ? '0' : '-100%' }}>
        <a href="Hero" style={{gap:'10px'}}>Home</a>
        <a href="#Residencies"  style={{padding:'1px'}}>Residencies</a>
        <a href="#Contact"  style={{padding:'1px'}}>Contact Us</a>
        <a href="Values" style={{gap:'10px', paddingRight:'10px'}}>Our Values</a>
        <button className="button" >
            <a href="Sign In" style={{gap:'100px'}}>Sign In</a>
        </button>
    </div>
    </OutsideClickHandler>
</div>

            </div>
        </section>
    );
}

export default Header;
