import React, {useState, useEffect} from 'react';
import {Route,Switch,NavLink} from 'react-router-dom';
import './Main.css';
import Top from './containers/Top';
import Nav from './whyOnStock/Nav';
import AiRecommend from './containers/AiRecommend';
import DomesticStock from './whyOnStock/DomesticStock';
import InvestmentGame from './whyOnStock/InvestmentGame';
import Community from './whyOnStock/Community';
import MyPage from './containers/MyPage';


export default function Main(){
    return (
        <div>
            <Top></Top>
            <hr className="hrStyle"/>
            <Nav></Nav>
            <div className="mainContainer">
                <Switch>
                    <Route exact path="/">
                        <AiRecommend></AiRecommend>
                    </Route>
                    <Route path="/DomesticStock">
                        <DomesticStock></DomesticStock>
                    </Route>
                    <Route path="/InvestmentGame">
                        <InvestmentGame></InvestmentGame>
                    </Route>
                    <Route path="/Community">
                        <Community></Community>
                    </Route>
                    <Route path="/MyPage">
                        <MyPage></MyPage>
                    </Route>
                </Switch>


            </div>
        </div>
    );
}