import React,{useContext} from 'react'
import {Link ,useHistory} from 'react-router-dom'
import logoo from "../Attendance/Images/EG.png"

import {useSelector} from "react-redux"
import {logoutUser} from "./actions/user_action"

const NavBar = ()=>{
    
     const history = useHistory()
     
     const currentUser = JSON.parse(localStorage.getItem("currentUser"))
     
    const logoutUserProfile = ()=>{
        localStorage.removeItem('currentUser');
        history.push('/signin')
    }
    return(
        <nav className='navbar'style={{backgroundColor:'#38b6ff',height:"90px"}}>
        {/* <div className="nav-wrapper blue" style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}> */}
           
           <div >
           {/* <Link to={""} className="brand-logo center" 
          style={{color:"white",fontSize:"30px",textDecoration:"none",fontFamily:"Acme"}}>EnGuide</Link> */}
<Link to ={"/landing"}><img src={logoo} alt="StudentIMage" style={{height:"80px",width:"250px",marginTop:"0px"}} /></Link>

           </div>


           {/* <div style={{marginLeft:"60px"}}>
                {currentUser !== null && <><button  onClick={()=> logoutUserProfile()} >logout</button></>}
           </div> */}
        
         
        {/* </div> */}
      </nav>
    )
}


export default NavBar