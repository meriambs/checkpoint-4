import React from 'react';

import { BsFillHouseFill } from "react-icons/bs";
import { BsBriefcase } from "react-icons/bs";

import { DiGithubBadge } from "react-icons/di";
import { DiJsBadge }from "react-icons/di";
function Address() {
  return (
    <div className="Address">
    <body>
   <div className="adres" style={{display:"flex", justifyContent: 'center'}}>
     <div style={{marginRight: '23px'}} > 
       <  BsFillHouseFill/>
       </div>
       <p>adress place</p>
   </div>

   <div className="icon-part" style={{display:'flex',justifyContent:'space-between',backgroundColor: '#292c2f',boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.12)',boxsizing: 'border-box',width: '100%',textAlign: 'left',font: 'bold 16px sans-serif',padding: '55px 50px',marginTop: '80px'}}>
     <div style={{display:'flex',flexWrap:'nowrap',color:"white"}}>
        <div style={{height: '30px',width:' 61px'}}  >
       <BsBriefcase ></BsBriefcase>
       </div>
      <h3 style={{marginLeft: '20px'}} >mailpart</h3>
      </div>
      <div style={{display:'flex',flexWrap:'nowrap',color:"white"}} >
        <div style={{height: '40px',width:' 61px'}}  >
         <DiGithubBadge/>
         </div>
      <h3 style={{marginLeft: '20px'}} >gitpart</h3>
      </div>
      <div style={{display:'flex',flexWrap:'nowrap',color:"white"}} >
        <div style={{height: '30px',width:' 71px'}}  >
        <DiJsBadge/>
        </div>
      <h3 style={{    marginLeft: '20px'}} >codewars</h3>
      </div>
     
  
   </div>
   </body>

   </div>
  );
}
export default  Address;