import axios from "axios";
import React, { Component } from "react";
import { geolocated } from "react-geolocated";
import ApiService from "../service/ApiService"
import { Redirect} from 'react-router-dom';

export default class GPSCard extends Component {
    handleSubmit = event =>{     

        event.preventDefault();
        console.log(this.state.phoneNumber);
        const phone = this.state.phoneNumber;
        
        console.log(phone);
        axios.post('http://localhost:8080/locations/'+window.localStorage.getItem("id"),{latitude: this.state.phoneNumber})
        .then((res)=>{
            <Redirect to = {{pathname: "/mypage" }} />;
        }).catch((err)=>{
            console.log(err);
        })
    }
}