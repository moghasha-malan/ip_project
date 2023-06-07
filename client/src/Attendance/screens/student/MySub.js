import React,{useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {getAllSubAction} from "../../actions/admin_action"

const MySub = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllSubAction())
   },[])

   const {allSubject} =useSelector(state=>state.getAllSubReducer)
   const {currentUser} = useSelector(state => state.userProfileReducer) ;
   
    const className = currentUser && currentUser[0].clsName ;

    const filterSub = allSubject && allSubject.filter(item => item.sub_class == className)

  


    return (
        <div >
                <table style={{width:"80%",margin:"auto",border:"2px solid", borderColor:"#38b6ff",marginTop:"5%",textAlign:"center"}}>
        <thead style={{border:"2px solid",borderColor:"#38b6ff"}}>
          <tr style={{border:"2px solid",borderColor:"#38b6ff"}}>
              <th style={{border:"2px solid",borderColor:"#38b6ff"}}>No.</th>
              <th style={{border:"2px solid",borderColor:"#38b6ff"}}>Subject Name</th>
              <th style={{border:"2px solid",borderColor:"#38b6ff"}}>Subject Code </th>
              <th style={{order:"2px solid",borderColor:"#38b6ff"}}>SubjectCredit</th>
              <th style={{border:"2px solid",borderColor:"#38b6ff"}}>Subject Type</th>
          </tr>
        </thead>

        {
           filterSub && filterSub.map((item,index) => (
                <tbody key={item._id} style={{padding:"5px"}}>
                <tr style={{height:"50px",border:"2px solid",borderColor:"#38b6ff"}}>
                    <td style={{border:"2px solid",borderColor:"#38b6ff"}}>{index+1}</td>
                   <td  style={{border:"2px solid",borderColor:"#38b6ff"}}>{item.sub_name}</td>
                
                  <td  style={{border:"2px solid",borderColor:"#38b6ff"}}>
                  {item.sub_code}
                  </td>
                  <td  style={{border:"2px solid",borderColor:"#38b6ff"}}>
                     {item.sub_credit} 
                  </td>
                  <td  style={{border:"2px solid",borderColor:"#38b6ff"}}>
                     {item.sub_type} 
                  </td>
                </tr>
              
              </tbody>
            ))
        }
      </table>
        </div>
    );
};

export default MySub;