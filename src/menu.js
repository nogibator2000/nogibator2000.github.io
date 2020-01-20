import {theme} from './theme';
import React, { Component } from 'react';
import MenuItem from './menuitem';
import {pathes} from './pathes'
export default class Menu extends Component{
  constructor(props) {
   super(props);
   this.state ={showMenu: true}
 }
    toggleMenu=()=>{
      this.setState({showMenu: !this.state.showMenu})
    }
  render() {
    return (
      <div className="menu" style={{width: '100%',
      height: '100%', borderLeft: theme.border,borderRight: theme.border,
      borderBottom: theme.border ,background: theme.menuBG,  display: 'block', justifyContent: 'center', alignItems: 'center',
    position: 'absolute',   transition: 'all .3s ease-in-out'
}}>
        {pathes.map((p, k)=><MenuItem path={p} key={k}  />)}
      </div>
       );
  }
}
