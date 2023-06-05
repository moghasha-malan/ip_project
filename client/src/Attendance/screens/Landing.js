import React from 'react';
import { Link } from "react-router-dom"
import StudentIMage from "../Images/student4.jpg"
import AdminIMage from "../Images/admin2.jpg"
import TeacherImage from "../Images/backgg.JPG"
// import backg from "../Images/backg.jpg"
import mainim from "../Images/helloeg.png";
import ll from "../Images/ll.jpg";
import './Landing.css';

const Landing = () => {
    return (
        <div className="HomePage row mt-5" style={{ margin:"2px solid black",overflowX:"hidden"}} >

{/* <div className='col-6'> */}
<img src={ll} className="col-6" alt="StudentIMage" style={{height:"502px"}} />

{/* </div> */}

 
           <div className="col-4 m-auto" style={{backgroundColor:"#38b6ff",borderRadius:"5%",}}>

         
            <div className=" m-auto" style={{width:"100%",height:"300px",justifyContent:"center" }}>
                <div className="card mt-5" style={{height: "43px", marginLeft:"30px",marginRight:"30px"}}>
                   {/* <img src={AdminIMage} alt="StudentIMage" style={{height:"250px",width:"250px"}} /> */}
                   
                   <Link className="link_class" to="/adminlogin" style={{textDecoration:"none",fontFamily:"Oswald",color:"black",textAlign:"center"}}> <h3>Admin Sign In</h3></Link>
                </div>
         
                <div className="card mt-5" style={{marginLeft:"30px",marginRight:"30px",height:"43px"}}>
                   {/* <img src={StudentIMage} alt="StudentIMage" style={{height:"250px",width:"250px"}} /> */}
               
                   <Link className="link_class" to="/stulogin" style={{textDecoration:"none",fontFamily:"Oswald",color:"black",textAlign:"center"}}> <h3 >Student Sign In</h3></Link>  
                </div>
                
                <div className="card mt-5" style={{marginLeft:"30px",marginRight:"30px",height:"43px"}}>
                   {/* <img src={TeacherImage} alt="StudentIMage" style={{height:"250px",width:"250px"}} /> */}
                  
                   <Link className="link_class" to="/teclogin" style={{textDecoration:"none",fontFamily:"Oswald",color:"black",textAlign:"center"}}> <h3 >Teacher Sign In</h3></Link>  
                </div>
            </div>
             <div style={{fontFamily:"Oswald" , color:"white",marginLeft:"200px", marginRight:"30px",height:"43px"}}><h3>OR</h3></div>
            <div className="card mt-5" style={{marginLeft:"30px",marginRight:"30px",height:"43px"}}>
            <Link className="link_class" to="/signup" style={{textDecoration:"none",fontFamily:"Oswald",color:"black",textAlign:"center"}}><h3>Sign Up</h3></Link>
          </div>
            </div>
            
        </div>
    );
};

export default Landing;