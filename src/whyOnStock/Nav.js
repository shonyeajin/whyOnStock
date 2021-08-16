import React, {useState, useEffect} from 'react';
import '../Main.css';
import { NavLink } from 'react-router-dom';

export default function Nav(props){
    return(
        <div className="navBoard">
            <div className="navEle navEle1"><NavLink exact to="/" className="navLink_nE">홈</NavLink></div>
            <div className="navEle navEle2"><NavLink to="/DomesticStock" className="navLink_nE">국내주식</NavLink></div>
            <div className="navEle navEle3"><NavLink to="/InvestmentGame" className="navLink_nE">모의투자</NavLink></div>
            <div className="navEle navEle4"><NavLink to="/Community" className="navLink_nE">토론방</NavLink></div>

        </div>
    );
}