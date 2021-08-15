import React, {useState, useEffect} from 'react';
import './Main.css';
import Top from './containers/Top';
import Nav from './whyOnStock/Nav';
import AiRecommend from './containers/AiRecommend';

export default function Main(){
    return (
        <div>
            <Top></Top>
            <hr className="hrStyle"/>
            <Nav></Nav>
            <div className="mainContainer">
                <AiRecommend>
                </AiRecommend>
            </div>
        </div>
    );
}