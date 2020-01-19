import React, { Component } from 'react';
import {theme} from './theme';
export default class Header extends Component{
  render() {
    return (
<React.Fragment>
      <div  className="header" style={{borderBottom: theme.border , borderTop: theme.border,
        borderRight: theme.border,
      display: 'flex', justifyContent: 'center', alignItems: 'center',
       background: theme.mainBG, height: theme.hh+'px', color: theme.tc}}>

      <h4>Welcome!</h4></div>

</React.Fragment>
    );
  }
}
