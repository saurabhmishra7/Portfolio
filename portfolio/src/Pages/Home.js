import React from 'react'
import GreenDot from '../Components/GreenDot/GreenDot'
import Navbar from '../Components/Navbar/Navbar'
import SideBar from '../Components/SideBar/SideBar'

const Home = () => {

    return (
        <div>
            <Navbar/>
            <div style={{marginTop:"40px", zIndex:-100}}>
                <SideBar/>
            </div>
        </div>
    )
}

export default Home