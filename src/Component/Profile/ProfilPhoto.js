import React from 'react';
import './ProfilPhoto.css';
function ProfilPhoto() {
  return (
    <div className="ProfilPhoto">
    <header style={{display: 'flex',justifyContent: 'center'}} >
     
      
     <img  src="./img/photo-de-profil.jpg" style={{height: '225px',boxShadow: '0 4px 8px 0 rgba (0, 0, 0, 0.2) 0 6px 20px 0 rgba (0, 0, 0, 0.19)',borderRadius: '109px'}} />
   

    </header>
    </div>
  );
}
export default ProfilPhoto;