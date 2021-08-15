import React, {useState, useEffect} from 'react';
import '../Main.css';

export default function Nav(props){
    return(
        <div className="navBoard">
            <div className="navEle navEle1">홈</div>
            <div className="navEle navEle2">국내주식</div>
            <div className="navEle navEle3">모의투자</div>
            <div className="navEle navEle4">토론방</div>

        </div>
    );
}