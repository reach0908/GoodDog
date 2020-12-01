import React from 'react';
import '../App.css'
import './Cards.css';
import CardItem from './CardItem';
import naverImage from  './images/naver.png'
import kakaoImage from  './images/kakao.jpg'

function SignUpCard() {

    return (
        <div className='cards'>
            <h1>회원가입할 수단을 고르세요!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={naverImage}
                            text='네이버로 회원가입하기.'
                            label='Naver'
                            path='/naversignup'
                        />
                        
                        <CardItem
                            src={kakaoImage}
                            text='카카오로 회원가입하기.'
                            label='Kakao'
                            path='/kakaosignup'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default SignUpCard;
