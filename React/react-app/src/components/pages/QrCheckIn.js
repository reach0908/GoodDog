import React from 'react';
import '../../App.css'
import '../Cards.css';
import CardItem from '../CardItem';
import sampleImages1 from  '../images/img-1.jpg'
import sampleImages2 from  '../images/img-2.jpg'
import MyPageCard from '../MyPageCard';

function QrCheckIn() {
    return (
      <div className='cards'>
        <h1>체크인 QR코드를 고르세요!</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src={sampleImages1}
                text='네이버 QR코드로 체크인하세요.'
                label='Naver'
                path='/naverqrcheckin'
              />
              <CardItem
                src={sampleImages2}
                text='카카오 QR코드로 체크인하세요.'
                label='kakao'
                path='/kakaoqrcheckin'
              />
            </ul>
            <h2>
                마이페이지
            </h2>
            <ul className='cards__items'>
              <MyPageCard
                src={sampleImages1}
                text='내 이동경로를 확인하세요'
                label='MyPage'
                path='/mypage'
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default QrCheckIn;