import React, { Component } from 'react';
import {GoMarkGithub} from "react-icons/go";
import{FaVk} from "react-icons/fa";
import{FiMail} from "react-icons/fi";

export default class Footer extends Component{

  render() {

    return (
      <div className="header" style={{textAlign: 'right', color: this.props.theme.tc, border: this.props.theme.border ,background: this.props.theme.mainBG, width: '100%',height: this.props.theme.fh+'px'}}>
      <span> &copy; {new Date().getFullYear()}  </span>

    Artem Ganebnykh &nbsp;
    <a href='https://github.com/nogibator2000'>  <GoMarkGithub/> <span></span> </a> &nbsp;
    <a href='https://vk.com/nogibator228'>  <FaVk/> <span></span></a> &nbsp;
    <a href='mailto:nogibator2000@gmail.com'>  <FiMail/> <span></span> </a>
    <span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
</div>
    );
  }
}
