import React from 'react';
import home from "../assets/home.jpg";
import Common from './Common';

const Home = () => {
    return (
        <>
            <Common 
                name='Grow your business with' 
                imgsrc={home} 
                isCompName={true}
                compName="Digital Marketing Company"
                visit='/services' 
                btnname="Get Started" 
            />
        </>
    )
}

export default Home;