import React, { Component } from 'react';
import Footer from './footer';
import Menu from './menu';
import MenuBtn from './menubtn';
import Header from './header'
import {theme} from './theme';
import { Scrollbars } from 'react-custom-scrollbars';
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
   _comp.props = {..._comp.props, wd: window.innerWidth-mw, ht: window.innerHeight-theme.hh-theme.fh}
   let w = window.innerWidth;
   let h = window.innerHeight;
   const bug = 1;
    return (
      <React.Fragment>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <div className='Header' style={{position: 'fixed', width: w-theme.menuWidth, left: theme.menuWidth, height: theme.hh, top: 0}}>
        <Header />
        </div>
        <div className='MenuBtn' style={{position: 'fixed', width: theme.menuWidth, left: 0, height: theme.hh, top: 0}}>
      <MenuBtn toggleMenu={this.toggleMenu} showMenu={this.props.showMenu} />
        </div>
        {this.state.showMenu&&<div className='Menu' style={{position: 'fixed', width: theme.menuWidth, left: 0, height: h-theme.hh, top: theme.hh}}>
  <Menu />
  </div>}
     <Scrollbars style={{top: theme.hh, left:mw, height: h-theme.hh-bug, width: w-mw-bug}}>
      {_comp}
      <Footer />
      </Scrollbars>

  </React.Fragment>
    );
  }
}
