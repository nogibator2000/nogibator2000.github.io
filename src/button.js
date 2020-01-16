import React, { Component } from 'react';
import {theme} from './theme';
export default class Button extends Component{
  constructor(props) {
   super(props);
   this.state ={tColor: theme.tc, color: this.props.color == null?theme.menuBGIA:this.props.color}
}
mouseEnter = () => {

this.setState({tColor: theme.tc2, color: this.props.colorH == null?theme.altColor:this.props.colorH});}

mouseLeave = () => {
this.setState({tColor: theme.tc, color: this.props.color == null?theme.menuBGIA:this.props.color})}
  render() {
      return(<div onClick={this.props.click} onMouseIn ={this.mouseEnter} onMouseMove={this.mouseEnter} onMouseLeave={this.mouseLeave} className="Button"
      style={{cursor:'pointer', borderRight: theme.border, background: this.state.color, display: 'flex',
       flexDirection: 'row', margin: 'auto',alignItems: 'center' , width: this.props.width, height: this.props.height}}>
        <h4 style={{width: '100%',textAlign: 'center', color: this.state.tColor}}>{this.props.name}</h4>
        </div>);
  }
}
