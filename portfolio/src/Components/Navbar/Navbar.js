import React from 'react'
import GreenDot from '../GreenDot/GreenDot'


const Navbar = () => {
  return (
      <div>
          <div>
              <div style={{
                  alignItems: "center",
                  backgroundColor: "#000000",
                  border: "2px solid black ",
                  display: "flex",
                  height: "70px",
                  width: "100%",
                  position: "relative",
                  zIndex: "1"
              }}>
                  <div className='px-3' style={{ display: "flex", width: "200px" }}>
                      <GreenDot />
                      <GreenDot />
                  </div>
                  <div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Navbar