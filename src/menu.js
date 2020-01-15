import {theme} from './theme';
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
      <div className="menu" style={{position: 'fixed', top:theme.hh+'px', borderLeft: theme.border, borderBottom: theme.border ,background: theme.menuBG, display: 'block', width: theme.menuWidth+'px', height: window.innerHeight-theme.hh+'px'}}>
    {
      this.props.pathes.map((p)=><MenuItem path={p}  />)
    }
      </div>
    );
  }
}
