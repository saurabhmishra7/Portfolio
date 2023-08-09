import React from 'react'
import GreenDot from '../Components/GreenDot/GreenDot'
import Navbar from '../Components/Navbar/Navbar'
import Project from '../Components/Projects/Project'
import SideBar from '../Components/SideBar/SideBar'

const Home = () => {

    return (
        <div>
            <Navbar/>
            <div>
                <SideBar/>
                <Project/>
            </div>
        </div>
    )
}

export default Home