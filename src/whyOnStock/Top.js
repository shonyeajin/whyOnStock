import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import '../Main.css';

export default function Top(props){
    return (
        <div>
            <div className="topBoard">
                <img src="dog.png" width="90px" className="imgLogo"></img>
                <div className="topTitle">
                    <NavLink exact to="/" className="navLink_nE">
                        Why On Stock
                    </NavLink>
                </div>
                <img src="tear.png" width="20px" className="topTear"></img>
                <div className="topTemperature">오늘의 한강물 온도: {props.temperature}°C</div>
                {/* redux state의 stateOfLogin이 before이면 sign in, sign up 띄우고 아니면 logout, myPage 띄움 */}
                {props.stateOfLogin === 'before'?<div className="signText1">sign in</div>:<div className="signText1">logout</div>}
                {props.stateOfLogin === 'before'?<div className="signText2">sign up</div>:<div className="signText2"><NavLink to="/MyPage" className="navLink_sT">myPage</NavLink></div>}
            </div>
        </div>
    );
}