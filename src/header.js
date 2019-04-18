import React, { Component } from "react";
import bitcoin from "./svg-icon/icon-money.svg";
import logo from "./svg-icon/logo.svg";
class Header extends Component {
  render() {
    return (
      <header>
        <a href="/"><img src={logo}
     className="logo" alt=""/></a>
        <div className='left_header'>
          <img src={bitcoin} alt='Картинка' />
          <p>освободить<br></br> разработчиков</p>
        </div>
      </header>
    );
  }
}

export default Header;
