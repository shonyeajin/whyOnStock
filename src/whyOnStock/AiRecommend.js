import React,{useState, useEffect} from 'react';
import '../Main.css';

export default function AiRecommend(props){
    let term, category, money;
    return(
        <div className="aiContainer">
            <div className="aiTitle">AI 맞춤 추천 서비스</div>
            <div className='aiSubTitle'>나의 투자 속성</div>

                <text type="text" className="aiProperty aiProperty1">투자 기간</text>
                <div className="aiValue1">
                    <input type="button" id="longBtn" className="longBtn selectedColor" value="장기" onClick={(e)=>{
                        term="long";
                        //버튼 색깔 바꾸기
                        document.querySelector('#shortBtn').classList.replace('selectedColor','notSelectedColor');
                        e.target.classList.replace('notSelectedColor','selectedColor');

                    }}></input>
                    <input type="button" id="shortBtn" className="shortBtn notSelectedColor" value="단기" onClick={(e)=>{
                        term="short"
                        //버튼 색깔 바꾸기
                        document.querySelector('#longBtn').classList.replace('selectedColor','notSelectedColor');
                        e.target.classList.replace('notSelectedColor','selectedColor');
                    }}></input>
                </div>


                <text className="aiProperty aiProperty2">관심 종목</text>
                <select name="category" className="aiValue2" id="select">
                    <option value="1">석유</option>
                    <option value="2">철강</option>
                    <option value="3">식료품</option>
                    <option value="4">당근케이크</option>
                    <option value="5">목재</option>
                    <option value="6">아이폰</option>
                </select>
                <text className="aiProperty aiProperty3">자본금</text>
                <input type="input" className="aiValue3" onChange={(e)=>{
                    money=Number(e.target.value);
                }}></input>
                <text className="aiValue4">원</text>
                <input type="button" id="aiSubmit" value="확인" className="aiSubmit" onClick={()=>{
                    let $select=document.querySelector('#select');
                    category=$select.options[$select.selectedIndex].text;
                    props.onAISubmit(term,category,money);
                }}></input>
        </div>
    );
}