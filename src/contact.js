import React, { Component } from 'react';
import {GoMarkGithub} from "react-icons/go";
import{FaVk} from "react-icons/fa";
import{FaTelegram} from "react-icons/fa";
import{FaFacebookSquare} from "react-icons/fa";
import{FiMail} from "react-icons/fi";
import Img from 'react-image';
import {theme} from './theme';

export default class Footer extends Component{
  constructor(props) {
   super(props);
   this.state = { show: true };
 }
 hide = ()=>{
   this.setState({show: false});
 }
  render() {

    return (
      <div className="header" style={{textAlign: 'center', color: theme.tc,background: theme.pc}}>
<br/>
<br/>
      <p><h2>
      Contact Me
      </h2></p>
      <br/>
      <br/>
      <p><h4>
      <a href='https://github.com/nogibator2000'>  <GoMarkGithub/> <span> Github: </span> </a>
      <span> nogibator2000 </span>
      </h4></p>
      <br/>
      <p><h4>
      <a href='https://vk.com/nogibator228'>  <FaVk/> <span>Vk.com: </span></a>
      <span> nogibator228 </span>
      </h4></p>
      <br/>
      <p><h4>
      <a href='https://www.facebook.com/temik214'>  <FaFacebookSquare/> <span>Facebook: </span></a>
      <span> temik214 </span>
      </h4></p>
      <br/>
      <p><h4>
      <a href='mailto:nogibator2000@gmail.com'>  <FiMail/> <span>Gmail: </span> </a>
      <span>nogibator2000@gmail.com</span>
      </h4></p>
      <br/>
      <p><h4>
      <a href='https://t.me/@artem2228'>  <FaTelegram/> <span>Telegram: </span> </a>
      <span>@Artem2228</span>
      </h4></p>
      <br/>
      <Img src="../file/swamp.jpg" />
      <br/>
      {this.state.show&&<div onClick ={this.hide} style={{cursor:'pointer', position: 'fixed', right: '50px', bottom: '0px'}}>

      <Img src="../file/shrek.gif" />
</div>}
<br/>
</div>
    );
  }
}
