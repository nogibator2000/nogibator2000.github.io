import {theme} from './theme';
import React from 'react';
import './joke.css'
import postscribe from 'postscribe';
class JokeBox extends React.Component{
  constructor(props) {
   super(props);
     this.state = {name: 'face-bar', animation: false}
}
componentDidMount(){
  window.addEventListener("keypress", this.PlayEvent);

  }
PlayEvent = (e, t) => {
  e.preventDefault();
  if (!this.state.animation)
  if (e.keyCode === 32||t==='mouse') {
    this.setState({name: 'shut face-bar' , animation: true})
    setTimeout(()=> {
          document.querySelector('#anekdot').innerHTML="";
          postscribe('#anekdot', '<script language="javascript" src="https://www.anekdot.ru/rss/randomu.html" charset="utf-8"></script>')
          this.setState({name: 'open face-bar'})
          setTimeout(()=> {
            this.setState({name: 'face-bar', animation: false})
          },2500)
        }, 2500);
  }

           }
render(){
    let w = this.props.wd/960;
    let h = this.props.ht/540;
    const mScale = Math.min(w,h);
    const scale = 'scale('+mScale+')';
    const lt = (this.props.wd-(960*mScale))/2+'px';
    const tp = (this.props.ht-(540*mScale))/2+'px';
    return(
      <div className="canvas" onClick = {(e)=>this.PlayEvent(e, 'mouse')} style={{
          position: 'absolute',
          left: lt,
          top: tp,
        width: '960px',
        height: '540px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '4.6px',
        border: '3px solid tomato',
        transform: scale,
        transformOrigin: '0 0',color: theme.tc, background: theme.pc

      }}>
      <FaceBar name ={this.state.name} />
      <FaceBar name ={this.state.name} />
      <FaceBar name ={this.state.name} />
      <FaceBar name ={this.state.name} />
      <FaceBar name ={this.state.name} />
      <FaceBar name ={this.state.name} />
    <div id = 'anekdot' style={{fontSize: '35px'}}>
      <span style={{fontSize: '35px'}} id="joke">Press <span id="space">Space</span> or <span id="space">Сlick</span> for a joke.</span>
    </div>
      </div>
    )
  }}

      class FaceBar extends React.Component{
        render(){
          return(
      <div className={this.props.name} >
          <div className="face"></div>
        </div>
    );
  }
}
    export default class Joke extends React.Component{
      render(){
        return(
          <div className ='page' ref={this.mainRef} style={{
            width: this.props.wd,
            height: this.props.ht
          }}>
<JokeBox wd = {this.props.wd} ht={this.props.ht}  />
                  </div>
        );
      }}
