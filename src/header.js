import React, { Component } from 'react';
import Button from './button';
import {theme} from './theme';
import {GoThreeBars} from "react-icons/go";
import {GoTriangleLeft} from "react-icons/go";
import {GoTriangleRight} from "react-icons/go";
export default class Header extends Component{
  render() {
    const menuBtnTxt = <div style={{width: '100%', height: '100%'}}><GoThreeBars/>{this.props.showMenu?<GoTriangleLeft/>:<GoTriangleRight/>}</div>;
    const menuBtn = <div  className="MenuBtn" style={{zIndex: '9990', position: 'fixed',left:'1px', top:'1px',border: theme.border, background: theme.mainBG, height: theme.hh+'px', width: theme.wd}}>
    <Button  width = {theme.menuWidth-theme.borderT+'px'} height={theme.hh-theme.borderT*2+'px'} name={menuBtnTxt} click={this.props.toggleMenu}/>
    </div>;
    return (
<div>
{menuBtn}
      <div  className="header" style={{zIndex: '9990', position: 'relative', right: '0px', left: theme.menuWidth+'px',border: theme.border ,
      display: 'flex', justifyContent: 'center', alignItems: 'center',
       background: theme.mainBG, height: theme.hh+'px', width: this.props.wd-theme.menuWidth+'px', color: theme.tc}}>

      <h4>Welcome!</h4></div>

</div>
    );
  }
}
