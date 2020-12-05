import React from 'react';
import './Address.css';

import { BsFillHouseFill } from "react-icons/bs";
import { BsBriefcase } from "react-icons/bs";

import { SiGithub } from "react-icons/si";
import { DiJsBadge }from "react-icons/di";
function Address() {
  return (
    <div className="Address">
    <body>
   <div className="adres" >
     <div className="adressicon"  > 
       <  BsFillHouseFill/>
       </div>
       <p>Cite Olympique , Cite khadra </p>
       <p>BP 1003 rue ......</p>
   </div>

   <div className="iconpart" >
     <div className="mailpart" >
        <div  >
       <BsBriefcase ></BsBriefcase>
       </div>
      <h5  >bensalah.meriem0@gmail.com</h5>
      </div>
      <div className="gitpart"  >
        <div    >
          <a  href="https://github.com/meriambs" >
         <SiGithub/>
         </a>
         </div>
      <h5  >gitpart</h5>
      </div>
      <div className="codwarpart" s >
        <div   >
          <a  href="https://www.codewars.com/users/MeriambenS">
        <DiJsBadge/>
        </a>
        </div>
      <h5  >codewars</h5>
      </div>
     
  
   </div>
   </body>

   </div>
  );
}
export default  Address;