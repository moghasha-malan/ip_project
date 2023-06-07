import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import {Link,useHistory} from 'react-router-dom'
import {loginUser} from '../actions/user_action'
import {userType} from "../Utills/index"
import backg from "../Images/backg.jpg"
import StudentIMage from "../Images/student4.jpg"
import AdminIMage from "../Images/admin3.avif"
import TeacherImage from "../Images/teacher.avif"

const SignIn  = ()=>{
    const history = useHistory()
    
    const [password,setPasword] = useState("")
    const [email,setEmail] = useState("")
    const [userItem,setuserItem]=useState("")
 
    const dispatch = useDispatch()
   
    const handleRequest = ()=>{
        const user = {
            password,email
            
        }
        if(history.location.pathname == "/stulogin"){
          dispatch(loginUser(user,"Student"))
        }
        if(history.location.pathname == "/teclogin"){
          const datat = {
            password,empolyee_id:email
            
        }
          dispatch(loginUser(datat,"Teacher"))
        } 
        if(history.location.pathname == "/adminlogin"){
          dispatch(loginUser(user,"Admin"))
        }
       
    }

   return (
      // <div  style={{ backgroundImage:`url(${backg})`,backgroundRepeat:"no", backgroundSize:"conatin",margin:"auto",height: "533px",
      // height: "90vh",
      // backgroundSize: "cover"}}>




        <div className='' style={{margin:"auto",width:"366px"}}>




          <div className='innerbox'>


          
          <div className="card" style={{margin:"auto",height: "533px",marginTop:"60px", display:"flex", border:"2px solid", borderColor:"#38b6ff"}}>
          
            {history.location.pathname == "/stulogin" && <> 
            {/* <div className='innerimg'><img src={StudentIMage} alt="StudentIMage" style={{height
            :"212px",width:"350px"}} /></div>
            <div className='outer-text'><h4 style={{margin:"auto",marginBottom:"10px", font:"Helvetica"}}> Student Login</h4></div> */}
            <h4 style={{margin:"auto",marginBottom:"20px"}}>
               Student Login
               </h4>
               <img src={StudentIMage} alt="StudentIMage" className='landing_img' />
            
            <br />
             </>}




             {history.location.pathname == "/teclogin" && <>
            <h4 style={{margin:"auto",marginBottom:"20px"}}>
               Teacher Login
               </h4>
               <img src={TeacherImage} alt="StudentIMage" className='landing_img' />
            <br />
            </> }




            {history.location.pathname == "/adminlogin" &&<>
            <h4 style={{margin:"auto",marginBottom:"20px"}}>
               Admin Login
               </h4>
               <img src={AdminIMage} alt="StudentIMage" className='landing_img' />
            <br />
            </>   }
        
         
          <div className="row">
            <div className="col">
            <input
            type="text"
            placeholder="email"
            value={email}
           className='form-control st_input_class'
            onChange={(e)=>setEmail(e.target.value)}
            />
            </div>
          
          </div>
          <br />
              <div className="row">
              <div className="col">
            <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e)=>setPasword(e.target.value)}
            className='form-control st_input_class'
            />
            </div>
              </div>
          <br />
          
          {/* <div className="col">
            
            <select  className="form-select" value={userItem}onChange={(e)=> setuserItem(e.target.value)}
              style={{height:"50px",width:"80%",marginLeft:"10%"}}
            >
            {userType.map((item) => (
                  <option value={item} key={item} >
                    {" "}
                    {item}{" "}
                  </option>
                ))}
            </select>
        </div> */}
       

           <button className='btn btn-primary mb-4 mt-2 'style={{width:"55%"}} onClick={() => handleRequest()}>Sign In</button>

           <Link to="/landing"><i className="far fa-arrow-square-left fa-2x"></i></Link>
      </div>

</div>

      </div>


      
   )
}


export default SignIn








// import React,{useState,useEffect} from 'react'
// import { useDispatch } from 'react-redux'
// import {Link,useHistory} from 'react-router-dom'
// import {loginUser} from '../actions/user_action'
// import {userType} from "../Utills/index"
// import backg from "../Images/backg.jpg"
// import StudentIMage from "../Images/student4.jpg"
// import AdminIMage from "../Images/admin2.jpg"
// import TeacherImage from "../Images/backgg.png"

// const SignIn  = ()=>{
//     const history = useHistory()
    
//     const [password,setPasword] = useState("")
//     const [email,setEmail] = useState("")
//     const [userItem,setuserItem]=useState("")
 
//     const dispatch = useDispatch()
   
//     const handleRequest = ()=>{
//         const user = {
//             password,email
            
//         }
//         if(history.location.pathname == "/stulogin"){
//           dispatch(loginUser(user,"Student"))
//         }
//         if(history.location.pathname == "/teclogin"){
//           const datat = {
//             password,empolyee_id:email
            
//         }
//           dispatch(loginUser(datat,"Teacher"))
//         } 
//         if(history.location.pathname == "/adminlogin"){
//           dispatch(loginUser(user,"Admin"))
//         }
       
//     }

//    return (
//       // <div  style={{ backgroundImage:`url(${backg})`,backgroundRepeat:"no", backgroundSize:"conatin",margin:"auto",height: "533px",
//       // height: "90vh",
//       // backgroundSize: "cover"}}>




//         <div className='' style={{width:"366px",marginLeft:"400px"}}>




        


          
//           <div className="car" style={{margin:"auto",height: "533px",marginTop:"60px", display:"flex"}}>
          
//             {history.location.pathname == "/stulogin" && <> 
//             <div className='innerimg'><img src={StudentIMage} alt="StudentIMage" style={{height
//             :"500px",width:"350px"}} /></div>
//             <div className='outer-text' style={{marginLeft:"30px"}}><h4 style={{marginBottom:"10px", font:"Helvetica",width:"300px"}}> Student Login</h4>
              

//              {history.location.pathname == "/teclogin" && <>
//             <h4 style={{margin:"auto",marginBottom:"20px"}}>
//                Teacher Login
//                </h4>
//                <img src={TeacherImage} alt="StudentIMage" className='landing_img' />
//             <br />
//             </> }




//             {history.location.pathname == "/adminlogin" &&<>
//             <h4 style={{margin:"auto",marginBottom:"20px"}}>
//                Admin Login
//                </h4>
//                <img src={AdminIMage} alt="StudentIMage" className='landing_img' />
//             <br />
//             </>   }
        
//          <br/>
//           <div className="row">
//             <div className="col">
//             <input
//             type="text"
//             placeholder="email"
//             value={email}
//            className='form-control st_input_class'
//             onChange={(e)=>setEmail(e.target.value)}
//             />
//             </div>
          
//           </div>
//           <br />
//               <div className="row">
//               <div className="col">
//             <input
//             type="password"
//             placeholder="password"
//             value={password}
//             onChange={(e)=>setPasword(e.target.value)}
//             className='form-control st_input_class'
//             />
//             </div>
//               </div>
//           <br />
//           <button className='btn btn-primary st_input_class' style={{width:"154px",height:"40px"}} onClick={() => handleRequest()}>Signin</button>

// {/* <Link to="/landing"><i className="far fa-arrow-square-left fa-2x"></i></Link> */}
//             </div>
            
//             <br />
//              </>}
            


// {/* 

//              {history.location.pathname == "/teclogin" && <>
//             <h4 style={{margin:"auto",marginBottom:"20px"}}>
//                Teacher Login
//                </h4>
//                <img src={TeacherImage} alt="StudentIMage" className='landing_img' />
//             <br />
//             </> }




//             {history.location.pathname == "/adminlogin" &&<>
//             <h4 style={{margin:"auto",marginBottom:"20px"}}>
//                Admin Login
//                </h4>
//                <img src={AdminIMage} alt="StudentIMage" className='landing_img' />
//             <br />
//             </>   }
        
//          <br/>
//           <div className="row">
//             <div className="col">
//             <input
//             type="text"
//             placeholder="email"
//             value={email}
//            className='form-control st_input_class'
//             onChange={(e)=>setEmail(e.target.value)}
//             />
//             </div>
          
//           </div>
//           <br />
//               <div className="row">
//               <div className="col">
//             <input
//             type="password"
//             placeholder="password"
//             value={password}
//             onChange={(e)=>setPasword(e.target.value)}
//             className='form-control st_input_class'
//             />
//             </div>
//               </div>
//           <br /> */}
          
//           {/* <div className="col">
            
//             <select  className="form-select" value={userItem}onChange={(e)=> setuserItem(e.target.value)}
//               style={{height:"50px",width:"80%",marginLeft:"10%"}}
//             >
//             {userType.map((item) => (
//                   <option value={item} key={item} >
//                     {" "}
//                     {item}{" "}
//                   </option>
//                 ))}
//             </select>
//         </div> */}
       

//            {/* <button className='btn btn-primary mb-4 mt-2 st_input_class' onClick={() => handleRequest()}>Signin</button>

//            <Link to="/landing"><i className="far fa-arrow-square-left fa-2x"></i></Link> */}
//       </div>



//       </div>


     
//    )
// }


// export default SignIn