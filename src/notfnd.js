import React, { Component } from 'react';
import Img from 'react-image';
import{Link} from "react-router-dom";
import {theme} from './theme';


export default class NotFnd extends Component{

  render() {

    return (
      <div className='page' style={{ display: 'flex', height:'100vh', width:'100vw', flexDirection: 'column', alignItems: 'center', color: theme.tc}}>
      <br/>
      <br/>
      <br/>
      <br/>
<br/>
      <Img src="../file/pnf.png" />
      <Link to="/">Return to main page</Link>
      </div>
    );
  }
}
