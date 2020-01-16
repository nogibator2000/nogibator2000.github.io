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
      Contact me!
      </h2></p>
      <br/>
      <div >
      <Img style={{border:'1px solid '+theme.menuBGI}} src="../file/me.png" width={this.props.wd/3} height={this.props.ht/3} />
</div>
      <br/>
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

</div>
    );
  }
}
