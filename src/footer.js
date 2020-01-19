import React, { Component } from 'react';
import {GoMarkGithub} from "react-icons/go";
import{FaVk} from "react-icons/fa";
import{FiMail} from "react-icons/fi";
import {theme} from './theme';

export default class Footer extends Component{

  render() {

    return (
      <div className="header" style={{position: 'relative', bottom: '0px',textAlign: 'right', color: theme.tc, borderTop: theme.border,
      borderRight: theme.border, borderBottom: theme.border, background: theme.mainBG, height: theme.fh+'px'}}>
      <span> &copy; {new Date().getFullYear()}  </span>

    Artem Ganebnykh &nbsp;
    <a href='https://github.com/nogibator2000'>  <GoMarkGithub/> <span></span> </a> &nbsp;
    <a href='https://vk.com/nogibator228'>  <FaVk/> <span></span></a> &nbsp;
    <a href='mailto:nogibator2000@gmail.com'>  <FiMail/> <span></span> </a>
    <span>&nbsp; v0.0.3 &nbsp;</span>
</div>
    );
  }
}
