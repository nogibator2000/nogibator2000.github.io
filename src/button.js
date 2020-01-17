import React, { Component } from 'react';
import {theme} from './theme';
import ScaleText from "react-scale-text";
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
      style={{cursor:'pointer', background: this.state.color, width: this.props.width, color: this.state.tColor, height: this.props.height,
      display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <ScaleText>
       <div style={{display: 'block', textAlign: 'center', margin: '3%'}}>
        {this.props.name}
</div>
</ScaleText>
</div>
        );
  }
}
