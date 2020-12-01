import React from 'react';
import '../App.css'
import './Cards.css';
import CardItem from './CardItem';
import naverImage from  './images/naver.png'
import kakaoImage from  './images/kakao.jpg'

function LoginCard() {
    return (
        <div className='cards'>
            <h1>로그인할 수단을 고르세요!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={naverImage}
                            text='네이버로 로그인하기.'
                            label='Naver'
                            path='/naverlogin'
                        />
                        <CardItem
                            src={kakaoImage}
                            text='카카오로 로그인하기.'
                            label='Kakao'
                            path='/kakaologin'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default LoginCard;
