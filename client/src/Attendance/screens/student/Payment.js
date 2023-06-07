import React,{useState} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {useDispatch,useSelector} from 'react-redux'
import Titleheading from "../../components/Titleheading"


const Payment = () => {
    const dispatch = useDispatch();
    const[amount,setAmount]=useState("")
    const[purpose,setPurpose]=useState("")
   const  onToken = (token) => {
     
      
        
       
  
      }
      
    return (
        <div  style={{width:"90%",margin:"auto",marginTop:"3%",border:"2px solid", borderColor:"#38b6ff"}}>
                 <Titleheading title="Pay Your Fees" />
                 <div style={{width:"50%",margin:"auto"}}>
             <div className="mt-4 row">
            <div className="col">
            <input
            type="Number"
            placeholder="Write the Amount"
            value={amount}
           className='form-control st_input_class'
            onChange={(e)=>setAmount(e.target.value)}
            />
            </div>
          
          </div>
          <br />
              <div className="row">
              <div className="col">
              <input
            type="Number"
            placeholder="Write the Purpose"
            value={purpose}
           className='form-control st_input_class'
            onChange={(e)=>setPurpose(e.target.value)}
            />
            
            </div>
              </div>

            <StripeCheckout 
             amount={100}
             
             shippingAddress
             billingAddress
             token={onToken}
             stripeKey='pk_test_zKpriPTZuuvkW0Lmv32D4kIW00Hpmdac2h'
             currency="INR"
             >
             <div className="d-grid gap-2 mt-3" style={{marginBottom:"2%"}}>
                
                <button className="btn btn-success" type="button">Pay Now</button>
             </div>
               
             </StripeCheckout>   
             </div>
        </div>
    );
};

export default Payment;