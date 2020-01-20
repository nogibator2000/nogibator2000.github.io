import React, { Component } from 'react';
import Footer from './footer';
import Menu from './menu';
import MenuBtn from './menubtn';
import Header from './header'
import {theme} from './theme';
import { Scrollbars } from 'react-custom-scrollbars';
import Fade from 'react-reveal/Fade';
import RubberBand  from 'react-reveal/RubberBand';
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
      <Fade left when={this.state.showMenu}>
      <div className='Menu' style={{zIndex:99, position: 'fixed', width: theme.menuWidth, left: 0, height: h-theme.hh, top: theme.hh}}>
   <Menu />
   </div>}
   </Fade>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <div className='Header' style={{position: 'fixed', width: w-theme.menuWidth, left: theme.menuWidth, height: theme.hh, top: 0}}>
<div>
        <Header />
        </div>
        <div className='MenuBtn' style={{position: 'fixed', width: theme.menuWidth, left: 0, height: theme.hh, top: 0}}>
      <MenuBtn toggleMenu={this.toggleMenu} showMenu={this.props.showMenu} />
        </div>
        <RubberBand  spy={this.state.showMenu}>
     <Scrollbars style={{top: 0, left:mw-theme.menuWidth, height: h-theme.hh-bug, width: w-mw-bug}}>
      {_comp}
      <Footer />
      </Scrollbars>
      </RubberBand >
</div>
  </React.Fragment>
    );
  }
}
