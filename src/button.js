import React, { Component } from 'react';
export default class Button extends Component{
  constructor(props) {
   super(props);
   this.state ={tColor: this.props.theme.tc, color: this.props.color == null?this.props.theme.menuBGIA:this.props.color}
}
mouseEnter = () => {

this.setState({tColor: this.props.theme.tc2, color: this.props.colorH == null?this.props.theme.altColor:this.props.colorH});}

mouseLeave = () => {
this.setState({tColor: this.props.theme.tc, color: this.props.color == null?this.props.theme.menuBGIA:this.props.color})}
  render() {
      return(<div onClick={this.props.click} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} className="Button"
      style={{cursor:'pointer', borderRight: this.props.theme.border, background: this.state.color, display: 'flex',
       flexDirection: 'row', margin: 'auto',alignItems: 'center' , width: this.props.width, height: this.props.height}}>
        <h4 style={{width: '100%',textAlign: 'center', color: this.state.tColor}}>{this.props.name}</h4>
        </div>);
  }
}
