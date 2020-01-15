import React from 'react';
//import ReactDOM from 'react-dom';
import Page from './page'
import { Scrollbars } from 'react-custom-scrollbars';
import NotFnd from './notfnd'
import{BrowserRouter, Route, Switch} from "react-router-dom";
import {pathes} from './pathes';

export default class App extends React.Component {
  constructor(props) {
   super(props);
   this.state ={
     wd: 0, ht: 0
   };
}
setSize=()=>{
  this.setState({
    wd: window.innerWidth-1,
    ht: window.innerHeight-1
  });

}
  componentDidMount() {
     window.addEventListener("resize", this.handleResize);
     this.setSize();
   }
    handleResize = e => {this.setSize();}
  render() {
      return (
        <Scrollbars style={{ width: this.state.wd, height: this.state.ht}}>
      <div className='main'>
  <BrowserRouter basename={process.env.PUBLIC_URL}>
  <Switch>
  {pathes.map((p)=>
<Route exact path={p.path}>
<Page wd={this.state.wd} ht={this.state.ht} comp={p.component}/>
</Route>)}
<Route>
<NotFnd />
</Route>
</Switch>
</BrowserRouter>


</div>
</Scrollbars>

    );
  }
}
