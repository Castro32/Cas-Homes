import React from "react";
import "./Hero.css"
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from "react-countup";
const Hero = () =>{
    return(
        <section className="hero-wrapper">
            
            <div className="paddings innerWidt flexCenter hero-container ">
                <div className="flexStat hero-left">
                    <div className=" hero-title">
                        
                        <h1 className="secondaryText">Your Home,<br/> Your Haven,<br/> Our Priority.</h1>
                        
                        <p>Committed to prioritizing your vision in the real estate journey.<br/>
                        Dedicated to making your home-buying or selling<br/> experience seamless and ensuring your satisfaction.</p>
                    </div>
                </div>
                <div className="flexCenter stats">
                    <div className=" stat">
                        <span className="count">
                            <CountUp start={600} end={1300} duration={5}/>
                            <span className="span">+</span>
                            <span >
                                <br/>Premium <br/>Products
                            </span>
                        </span>
                    </div>
                    <div className=" stat">
                        <span className="count">
                            <CountUp start={80} end={150} duration={5}/>
                            <span className="span">+</span>
                            <span >
                                <br/>Happy <br/>Customers
                            </span>
                        </span>
                    </div>
                    <div className=" stat">
                        <span className="count">
                            <CountUp start={5} end={15} duration={3}/>
                            <span className="span">+</span>
                            <span>
                                <br/>Award Winnings and<br/> Nominations
                            </span>
                        </span>
                    </div>
                </div>
                <div className="  hero-right">
                
                    <div className="image-container">
                        <img src="" alt=""/>
                    </div>


                </div>
            </div>
        </section>
    )
}
export default Hero