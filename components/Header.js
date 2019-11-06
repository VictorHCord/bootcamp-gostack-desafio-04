import React from 'react';
import logoFacebook from '../src/assets/facebook.png';
import User from '../src/assets/user.png';


function Header () {
  return <div className="header"> 
  <img src={logoFacebook} className="facebook-icon"/>
  <img src={User} className="icon-user" />

  <h1>Meu perfil</h1>


  </div>
}

export default Header;