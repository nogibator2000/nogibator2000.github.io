import React from 'react';
//import ReactDOM from 'react-dom';
import Page from './page'
import Header from './header'
import Joke from './joke'
import Chess from './chess'
import Contact from './contact'
import{BrowserRouter, Route, Switch} from "react-router-dom";
import Menu from './menu';
const theme = {border: '1px solid #8a2be2', menuBG: '#ff7575', menuBGI: '#ff6060', menuBGIA: '#ff2020',pc: '#f0d0d0',  altColor:'#b63903',
   tc: 'darkblue', tc2: 'yellow', menuWidth: '150', mainBG: '#ff9090', fh:'25', hh: '40'}
const pathes = [{path:'/', name:'Home', component: <Joke theme={theme}/>},
{path:'/ChessBot', name:'Chess bot', component: <Chess theme={theme}/>},
{path:'/contact', name:'Contact me', component: <Contact theme={theme}/>}];
export default class App extends React.Component {
  constructor(props) {
   super(props);
   this.state ={showMenu: true,
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
    toggleMenu=()=>{
      this.setState({showMenu: !this.state.showMenu})
    }
  render() {
      return (
      <div>
        <Header theme={theme} toggleMenu={this.toggleMenu} showMenu={this.state.showMenu}/>
  <BrowserRouter>
  <Switch>
  {pathes.map((p)=>
<Route exact path={p.path}>
<Page wd = {this.state.wd-1} ht = {this.state.ht-1} theme={theme} comp={p.component} showMenu={this.state.showMenu}/>
</Route>)}
</Switch>
</BrowserRouter>
<div className='menu'  style={{display: 'flex'}}>
  {this.state.showMenu&&<Menu pathes={pathes} theme={theme} />}
</div>

</div>
    );
  }
}
