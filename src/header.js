import React, { Component } from 'react';
import Button from './button'
import {GoThreeBars} from "react-icons/go"
import {GoTriangleLeft} from "react-icons/go"
import {GoTriangleRight} from "react-icons/go"
export default class Header extends Component{

  render() {

    return (
      <div  className="header" style={{zIndex: '9990', position: 'fixed',border: this.props.theme.border ,display: 'flex', background: this.props.theme.mainBG, height: this.props.theme.hh+'px'}}>
      <Button theme={this.props.theme} width = {this.props.theme.menuWidth+'px'} height={this.props.theme.hh-2+'px'} name={<div style={{paddingTop: '15px'}}><GoThreeBars/>{this.props.showMenu?<GoTriangleLeft/>:<GoTriangleRight/>}</div>} click={this.props.toggleMenu}/>
      <div style={{width: window.innerWidth-this.props.theme.menuWidth,textAlign: 'center', color: this.props.theme.tc}}>
      <h4>Welcome!</h4>
      </div>
</div>
    );
  }
}
