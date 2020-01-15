import React, { Component } from 'react';
import MenuItem from './menuitem'
export default class Menu extends Component{
  renderItem=(p, theme)=>{
    let color =  p.path===window.location.pathname?theme.menuBGIA:theme.menuBGI
    return(<div onmouseenter="Enter()" className="menuItem" style={{background: color, width: theme.menuWidth+'px'}}>
      <a href={p.path}>{p.name}</a>
      </div>);

  }
  render() {
    return (
      <div className="menu" style={{position: 'fixed', top:this.props.theme.hh+'px', borderLeft: this.props.theme.border, borderBottom: this.props.theme.border ,background: this.props.theme.menuBG, display: 'block', width: this.props.theme.menuWidth+'px', height: window.innerHeight-this.props.theme.hh+'px'}}>
    {
      this.props.pathes.map((p)=><MenuItem path={p} theme={this.props.theme} />)
    }
      </div>
    );
  }
}
