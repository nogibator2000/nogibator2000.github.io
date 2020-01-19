import {theme} from './theme';
import React, { Component } from 'react';
import Button from './button';
import {GoThreeBars} from "react-icons/go";
import {GoTriangleLeft} from "react-icons/go";
import {GoTriangleRight} from "react-icons/go";

export default class MenuBtn extends Component{
  render(){
    const menuBtnTxt = <div style={{width: '100%', height: '100%'}}><GoThreeBars/>{this.props.showMenu?<GoTriangleLeft/>:<GoTriangleRight/>}</div>;

  return(
<div  className="MenuBtn" style={{border: theme.border, background: theme.mainBG,
   height: theme.hh+'px', width: '100%'}}>
  <Button name={menuBtnTxt} click={this.props.toggleMenu}/>
  </div>
);
}
}
