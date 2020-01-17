import {theme} from './theme';
import React, { Component } from 'react';
import{Link} from "react-router-dom";

export default class MenuItem extends Component{
  constructor(props) {
   super(props);
   this.state ={tColor: theme.tc, color: this.setColor()};
}
setColor = () =>  this.props.path.path===window.location.pathname?theme.menuBGIA:theme.menuBGI;
mouseEnter = () => {
this.setState({tColor: theme.tc2, color:theme.altColor})}
mouseLeave = () => {
this.setState({tColor: theme.tc,color: this.setColor()})}
  render() {
      return(<div onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} className="menuItem" style=
      {{display: 'flex', justifyContent: 'center', alignItems: 'center',
      cursor:'pointer', background: this.state.color}}>
        <Link to={this.props.path.path}><div style={{color: this.state.tColor}}>{this.props.path.name}</div></Link>
        </div>);
  }
}
