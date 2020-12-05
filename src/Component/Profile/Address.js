import React from 'react';

import { BsFillHouseFill } from "react-icons/bs";
import { BsBriefcase } from "react-icons/bs";

import { SiGithub } from "react-icons/si";
import { DiJsBadge }from "react-icons/di";
function Address() {
  return (
    <div className="Address">
    <body>
   <div className="adres" style={{display:"flex", justifyContent: 'center'}}>
     <div style={{marginRight: '23px'}} > 
       <  BsFillHouseFill/>
       </div>
       <p>Cite Olympique , Cite khadra </p>
       <p>BP 1003 rue ......</p>
   </div>

   <div className="icon-part" style={{display:'flex',justifyContent:'space-between',backgroundColor: '#292c2f',boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.12)',boxsizing: 'border-box',width: '100%',textAlign: 'left',font: 'bold 16px sans-serif',padding: '55px 50px',marginTop: '80px'}}>
     <div style={{display:'flex',flexWrap:'nowrap',color:"white"}}>
        <div    >
       <BsBriefcase ></BsBriefcase>
       </div>
      <h5 style={{marginLeft: '20px'}} >bensalah.meriem0@gmail.com</h5>
      </div>
      <div style={{display:'flex',flexWrap:'nowrap',color:"white"}} >
        <div    >
          <a  href="https://github.com/meriambs" >
         <SiGithub/>
         </a>
         </div>
      <h5 style={{marginLeft: '20px'}} >gitpart</h5>
      </div>
      <div style={{display:'flex',flexWrap:'nowrap',color:"white"}} >
        <div   >
          <a  href="https://www.codewars.com/users/MeriambenS">
        <DiJsBadge/>
        </a>
        </div>
      <h5 style={{    marginLeft: '20px'}} >codewars</h5>
      </div>
     
  
   </div>
   </body>

   </div>
  );
}
export default  Address;