import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Project from '../Components/Projects/Project'
import SideBar from '../Components/SideBar/SideBar'

const Home = () => {

    return (
        <div>
            <Navbar/>
            <div style={{display:'flex'}}>
                    <SideBar/>
                <Project/>
            </div>
        </div>
    )
}

export default Home