import React, {useState, useEffect} from 'react';
import '../Main.css';

export default function Top(props){
    return (
        <div>
            <div className="topBoard">
                <img src="dog.png" width="90px" className="imgLogo"></img>
                <div className="topTitle">
                    Why On Stock
                </div>
                <img src="tear.png" width="20px" className="topTear"></img>
                <div className="topTemperature">오늘의 한강물 온도: {props.temperature}°C</div>
                <div className="signText1">sign in</div>
                <div className="signText2">sign up</div>
            </div>
        </div>
    );
}