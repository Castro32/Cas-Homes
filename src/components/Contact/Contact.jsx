import React from "react";
import './Contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill, BsInstagram, BsTwitter, BsWhatsapp} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
import { HiMail } from "react-icons/hi";
const Contact =() =>{
    return(
        <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                <div className="flexColStart c-left">
                    <span className="orangeText">Contact Us</span>
                    <span className="primaryText">Your Questions, Our Priority</span>
                    <span className="secondaryText">Empowering connections through responsive <br/>and personalized communication.</span>

                    <div className="flexColStart contactModes">
                        <div className="flexColStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                    <MdCall size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Call</span>
                                        <span className="secondaryText">+254 114 096 574</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    <a href="tel:+254114096574" target="_blank">
                                      <div>Call Now</div>
                                    </a>
                                </div>
                            </div>

                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                    <BsWhatsapp size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Whatsapp</span>
                                        <span className="secondaryText">+254 114 096 574</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    <a href="https://wa.me/+254114096574" target="_blank">
                                      <div>Chat Now</div>
                                    </a>
                                </div>
                            </div>
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                    <MdCall size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Email</span>
                                        <span className="secondaryText">okanga.fidel@gmail.com</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    <a href="mailto:okanga.fidel@gmail.com" target="_blank">
                                      <div>Email Now</div>
                                    </a>
                                </div>
                            </div>

                          
                            
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <div className="image-container">
                        <img src="./contact.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact