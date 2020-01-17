import React, { Component } from 'react';
import Footer from './footer';
import { Scrollbars } from 'react-custom-scrollbars';

export default class Page extends Component{

  render() {
    let _comp = {...this.props.comp};
    let mw = this.props.showMenu?this.props.theme.menuWidth: 0;
    _comp.props = {..._comp.props, wd: this.props.wd-mw-1, ht: this.props.ht-this.props.theme.hh-this.props.theme.fh}
    return (
      <Scrollbars style={{ width: this.props.wd, height: this.props.ht}}>
<div>
      <div class = 'pageWrapper' style={{width: this.props.wd-mw+'px', position: 'relative', left: this.props.showMenu?this.props.theme.menuWidth+'px':'0px', top: this.props.theme.hh+'px', borderRight: this.props.theme.border, borderLeft: this.props.theme.border}}>
        <div class ='fullPage' style={{minHeight: this.props.ht-this.props.theme.hh-this.props.theme.fh}}>
      {_comp}
      </div>
      <Footer theme={this.props.theme}/>
  </div>
  </div>
</Scrollbars>

    );
  }
}
