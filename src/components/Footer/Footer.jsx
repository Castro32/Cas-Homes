import React from 'react'
import './Footer.css'
import { BsInstagram,BsTwitter,BsTiktok,BsSnapchat } from 'react-icons/bs'
const Footer=()=>{
    return(
        <section className='f-wrapper'>
            <div className="padings inerWidth flexCnter f-container">
                
                <div className="flexColtart residencies">
                    <span className='primarText'>Residencies</span>
                    <div className="flexColCnter f-menu">
                        <span>Apple Wood Villas</span>
                        <span>RiverRun Estates</span>
                        <span>The Ridge</span>
                        <span>Tajiri Heights</span>
                        <span>The Alma</span>
                        <span>Situ Village</span>
                    </div>
                </div>
            </div>

            <div className="flexColStart jokes">
            <h4>Follow Us</h4>
            <div className="flexColCenter orangText kicon">
                <BsInstagram size={20}/>
                <BsSnapchat size={20}/>
                <BsTwitter size={20}/>
                <BsTiktok size={20}/>
            </div>
            </div>
            <div className=" flexColCenter">
                <span className="rrrr primaryText">&copy; 2023 CasHomes&trade;</span>
            </div>
        </section>
    )
}
export default Footer