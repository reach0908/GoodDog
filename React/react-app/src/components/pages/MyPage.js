import React from 'react';
import '../../App.css'
import Footer from '../Footer';
import MapCard from '../MapCard';
import CovidState from '../CovidState';
import MapSlider from '../MapSlider';


function Home (){

    return(
        <>
            <MapSlider></MapSlider>
            <MapCard></MapCard>
            <CovidState></CovidState>
            <Footer></Footer>
        </>
    );
}

export default Home;