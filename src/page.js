import React, { Component } from 'react';
import Footer from './footer';
import Menu from './menu';
import Header from './header'
import {theme} from './theme';
import {pathes} from './pathes'
export default class Page extends Component{
  constructor(props) {
   super(props);
   this.state ={showMenu: true}
 }
    toggleMenu=()=>{
      this.setState({showMenu: !this.state.showMenu})
    }
  render() {
    let _comp = {...this.props.comp};
    let mw = this.state.showMenu?theme.menuWidth: 0;
    _comp.props = {..._comp.props, wd: this.props.wd-mw, ht: this.props.ht-theme.hh-theme.fh}
    return (
<div>
<Header  toggleMenu={this.toggleMenu} showMenu={this.state.showMenu}/>
      <div class = 'pageWrapper' style={{width: this.props.wd-mw+'px', position: 'relative', left: this.state.showMenu?theme.menuWidth+'px':'0px', top: theme.hh+'px', borderRight: theme.border, borderLeft: theme.border}}>
        <div class ='fullPage' style={{minHeight: this.props.ht-theme.hh-theme.fh}}>
      {_comp}
      </div>
      <Footer />
  </div>
  <div className='menu'  style={{display: 'flex'}}>
    {this.state.showMenu&&<Menu pathes={pathes}  />}
  </div>
  </div>

    );
  }
}
