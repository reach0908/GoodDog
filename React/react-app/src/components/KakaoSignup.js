import React,{useEffect} from 'react'
import Axios from 'axios';

const SignupURL = 'https://kauth.kakao.com/oauth/authorize?client_id=a863152a6c9a88819b4482a0b970723a&redirect_uri=http://localhost:8080/kcallback&response_type=code'

function KakaoSignup() {

    useEffect(()=>{
        async function fetchData(){
            const result = await Axios.get(SignupURL);
            console.log(result.data);
            }
            fetchData();
    },[]);

    

    return (
        <div>

        </div>
    )
}

export default KakaoSignup
