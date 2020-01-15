import React, { Component } from 'react';
import Button from './button';
import {theme} from './theme';
import {GoThreeBars} from "react-icons/go";
import {GoTriangleLeft} from "react-icons/go";
import {GoTriangleRight} from "react-icons/go";
export default class Header extends Component{

  render() {

    return (
      <div  className="header" style={{zIndex: '9990', position: 'fixed',border: theme.border ,display: 'flex', background: theme.mainBG, height: theme.hh+'px'}}>
      <Button  width = {theme.menuWidth+'px'} height={theme.hh-2+'px'} name={<div style={{paddingTop: '15px'}}><GoThreeBars/>{this.props.showMenu?<GoTriangleLeft/>:<GoTriangleRight/>}</div>} click={this.props.toggleMenu}/>
      <div style={{width: window.innerWidth-theme.menuWidth,textAlign: 'center', color: theme.tc}}>
      <h4>Welcome!</h4>
      </div>
</div>
    );
  }
}
