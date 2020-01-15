import React, { Component } from 'react';
export default class MenuItem extends Component{
  constructor(props) {
   super(props);
   this.state ={tColor: this.props.theme.tc, color: this.setColor()};
}
setColor = () =>  this.props.path.path===window.location.pathname?this.props.theme.menuBGIA:this.props.theme.menuBGI;
mouseEnter = () => {
this.setState({tColor: this.props.theme.tc2, color:this.props.theme.altColor})}
mouseLeave = () => {
this.setState({tColor: this.props.theme.tc,color: this.setColor()})}
  render() {
      return(<div onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} className="menuItem" style={{cursor:'pointer', background: this.state.color}}>
        <a href={this.props.path.path}><h6 style={{color: this.state.tColor}}>{this.props.path.name}</h6></a>
        </div>);
  }
}
