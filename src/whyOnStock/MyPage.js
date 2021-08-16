import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import '../Main.css';

function MyContent(props){
    if (props.stateOfMyInfo==='update'){
        return(
            <div className="myContentContainer">
                <div className="myProperty myPropertyPosition1">아이디</div>
                <div className="myProperty myPropertyPosition2">닉네임</div>
                <div className="myProperty myPropertyPosition3">비밀번호</div>
                <div className="myProperty myPropertyPosition4">비밀번호 확인</div>
                <input type="text" id="myPage_ID" className="myValue myPropertyPosition1" placeholder="hykim@naver.com" readOnly></input>
                <input type="text" id="myPage_NICKNAME" className="myValue myPropertyPosition2" placeholder="하이킴"></input>
                <input type="text" id="myPage_PWD" className="myValue myPropertyPosition3" placeholder="비밀번호를 입력하세요"></input>
                <input type="text" id="myPage_PWDCHK" className="myValue myPropertyPosition4" placeholder="비밀번호를 다시 한번 입력하세요"></input>
            </div>
        )
    }else{
        return(
            <div className="myContentContainer">
                <div className="manageTitle1" >작성한 글</div>
                <hr align="left" className="manageHr manageHr1"/>
                <hr align="left" className="manageHr manageHr2"/>
                <div className="manageText"></div>
                <div className="manageTitle2" >작성한 댓글</div>
                <hr align="left" className="manageHr manageHr3"/>
                <hr align="left" className="manageHr manageHr4"/>
                <div className="manageReple">
                </div>
            </div>
        )
    }

}

export default function MyPage(props){
    return(
        <div className="myPageContainer">
            <div id="myUpdate" className="myCategory1 mySelected" onClick={(e)=>{
                props.onStateOfMyInfo('update');
                document.querySelector('#myManage').classList.replace('mySelected','myNotSelected');
                e.target.classList.replace('myNotSelected','mySelected');
            }}>개인정보 수정</div>
            <div id="myManage" className="myCategory2 myNotSelected" onClick={(e)=>{
                props.onStateOfMyInfo('manage');
                document.querySelector('#myUpdate').classList.replace('mySelected','myNotSelected');
                e.target.classList.replace('myNotSelected','mySelected');
            }}>게시물 관리</div>
            <hr className="myHr"></hr>
            <MyContent stateOfMyInfo={props.stateOfMyInfo}/>
        </div>

    );
}