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
      return(
        <React.Fragment>
        <Link  onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} className="menuItem" style=
        {{position: 'relative',
        cursor:'pointer', padding: '3%', display:'block', background: this.state.color, width: '100%', height: theme.mh, color: this.state.tColor}} to={this.props.path.path}>
        <h4>
        {this.props.path.name}
        </h4>
        </Link>
        </React.Fragment>);
  }
}
