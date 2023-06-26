import React, { useEffect, useState } from 'react'
import Appointements from './Appointements.jsx'
import Home from './Home.jsx'

const DoctorsDashboard = (props) => {
  const [view,setView]=useState("home")

  // console.log(props)
  const handleView=(option)=>{
        setView(option)
  }
  return (
    <div className='main'>
      <div className='side-bar'>
        <h1>Welcome MR {props.doctorData.firstName}</h1>
        
          <ul className='side-bar-menu'>
            <li className='clicked'
                onClick={()=>{
                  handleView("home")
                }}
            >
              Home
            </li>
            <li
                      onClick={()=>{
                        handleView("Appointements")
                      }}
            >
             Appointements
            </li>
            <li>
              Logout
            </li>
          </ul>
      </div>
      {view==="home"?<div className='home-container'>
            <Home doctorClients={props.doctorClients} doctorData={props.doctorData}/>
      </div>:   <div>
            <Appointements/>
      </div>
   }
       
    </div>
  )
}

export default DoctorsDashboard
