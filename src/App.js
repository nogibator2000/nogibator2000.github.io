import React from 'react';
//import ReactDOM from 'react-dom';
import Page from './page'
import NotFnd from './notfnd';
import{BrowserRouter, Route, Switch} from "react-router-dom";
import {pathes} from './pathes';
import {theme} from './theme';
export default class App extends React.Component {
  constructor(props) {
   super(props);
   this.state ={
     wd: 0, ht: 0
   };
}
setSize=()=>{
  this.setState({
    wd: window.innerWidth,
    ht: window.innerHeight
  });

}
  componentDidMount() {
     window.addEventListener("resize", this.handleResize);
     this.setSize();
   }
    handleResize = e => {this.setSize();}
  render() {
      return (
      <React.Fragment>
  <BrowserRouter basename={process.env.PUBLIC_URL}>
  <Switch>
  {pathes.map((p)=>
<Route exact path={p.path}>
<Page key={p} wd={this.state.wd-theme.outBorder} ht={this.state.ht-theme.outBorder} comp={p.component}/>
</Route>
)}
<Route>
<NotFnd />
</Route>
</Switch>
</BrowserRouter>


</React.Fragment>

    );
  }
}
