import React from 'react';

const Titleheading = ({title}) => {
    return (
        <div className="humt" style={{width:"90%", backgroundColor:"#38b6ff",boxShadow:"10px 10px #2199df",margin:"auto"}}>
           <h4 style={{marginTop:"15px",fontSize:"30px",fontColor:"white",fontFamily:"Aria"}}>{title}</h4>
      </div>
    );
};

export default Titleheading;



// title_style