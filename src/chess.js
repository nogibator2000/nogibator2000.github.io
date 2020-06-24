import React, { Component } from 'react';
import { Player } from 'video-react';
import Button from './button'
import{Link} from "react-router-dom";
import {theme} from './theme';
import "../node_modules/video-react/dist/video-react.css";

export default class Chess extends Component{
  constructor(props) {
   super(props);
   this.state = { showHow: false, showWiki: false };
 }
 toggleHow = ()=>{
   this.setState({showHow: !this.state.showHow});
 }
 toggleWiki = ()=>{
   this.setState({showWiki: !this.state.showWiki});
 }
  render() {
    const howBtn = <div style={{width: this.props.wd/4, height:this.props.wd/16}}><Button  key={this.state.showHow}  color = {this.state.showHow?theme.menuBGIA:theme.BTMain} colorH = {this.state.showHow?theme.altColor:theme.BTMainA} name='How to run' click={this.toggleHow}/>
    </div>;
    const wikiBtn = <div style={{width: this.props.wd/4, height:this.props.wd/16}}><Button key ={this.state.showWiki} color = {this.state.showWiki?theme.menuBGIA:theme.BTMain} colorH = {this.state.showWiki?theme.altColor:theme.BTMainA} name='Wiki' click={this.toggleWiki}/>
    </div>;
    const wiki = <div><br /> <h4>Wiki</h4>
  <br/>
  Open setting file. Inside bin derictory. If there is none run app, it will be autocreated.
  <br/>
    <pre>
      BoardSize.Width<br/>
      BoardSize.Height<br/>
      BoardPosition.X<br/>
      BoardPosition.Y<br/>
    </pre>
    Parameters automaticly setting up by calibrate button. <br/>
  <pre>
  Hash<br/>
  RefreshDelay<br/>
  AnimationDelay<br/>
  AnimationHash<br/>
  </pre>
  Parameter of hash function lower it(or increase delay) to increase speed and increase miss turn chance
  <pre>
    MaxEngineTime<br/>
  </pre>
  Engine time per turn in ms.
  <pre>
    MissplayEveryXTurns
  </pre>
  You need those missplays to avoid ban, set 0 to fully play like chess Engine.
  <br/>
  <pre>
    Window<br/>
    Treshold<br/>
  </pre>
  Thouse parameters are avoid your calibration inaccuracy.
  <pre>
    WhiteBrightTreshold<br/>
    BlackBrightTreshold<br/>
  </pre>
   Parameters for classify backgroud black and white pieses.
  <pre>
    TurnDelayMin<br/>
    TurnDelayMax<br/>
    TurnsForExtraDelay<br/>
    DelayPart<br/>
    MouseClickDelay<br/>
  </pre>
  Customise your turn to make in more humanable.
  <pre>
  StockfishPath
  </pre>
  Insert here your stockFish or any other uci engine path.
  <pre>
  LogEnable
  </pre> Debug option, when enable logging data.            </div>;

  const how = <div>
      <br /><h4> How to run</h4> <br/> &#183; Clone the <a href="https://github.com/nogibator2000/ChessBot">project</a>
     or skip it and <Link to="../file/ChessBot.zip" target="_blank" download> download</Link> binaries
    <br/>
    <br/>
    <pre> git clone https://github.com/nogibator2000/ChessBot</pre>
    <br/>
    &#183; open it with Microsoft Visual Studio.
    <br/>
    &#183; Compile it and run.
    <br/>
    &#183; you need to dowload stockfish bin from zip above or official site. Make sure Path to stockfish in settings.txt correct. 
    <br/>
    &#183; Open a chess website.
    <br/>
    &#183; Click Colibrate button then click top left point of chess board, then click bottom right point of chess board.
    <br/>
    &#183; Your bot is ready to run. Press F2 or start button to start.
    </div>;
    return (
      <div className='page' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: theme.tc, background: theme.pc,  padding: '5%'}}>
      <h2>Screen detection chess bot</h2>
      <Player
        playsInline
        fluid={false}
        width={this.props.wd/2*1.3}
        height={this.props.wd/3.56*1.3}
        autoPlay={true}
        poster="../file/poster.jpg"
        muted={true}
        src="../file/loading.mp4"
      />
      <br />
      <h5>This chess bot can win every chess game and avoid ban because he do mistakes.
       Download it, open any chess site, show to it your board and press start button.
        It will work but only if you have windows. This bot was tested on those sites <a href='https:Lichess.org'>Lichess.org</a> and <a href='https:Chess.com'>Chess.com</a> WITH NO BAN.</h5>
        <br />

    <Link to="../file/ChessBot.zip" target="_blank" download>
      <div style={{width: this.props.wd/4, height:this.props.wd/16}}>
      <Button color = {theme.BTMain} colorH = {theme.BTMainA} name='Download x64.zip' />
      </div>
  </Link>
      <br />
      <a href="https://dotnet.microsoft.com/download/dotnet-core/thank-you/sdk-3.0.103-windows-x64-installer">
      <div style={{width: this.props.wd/4, height:this.props.wd/16}}>
      <Button color = {theme.BTMain} colorH = {theme.BTMainA} name='download runtime' />
      </div>
  </a>
  <br/>
  <a href="https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads">
      <div style={{width: this.props.wd/4, height:this.props.wd/16}}>
      <Button color = {theme.BTMain} colorH = {theme.BTMainA} name='download c++ redist' />
      </div>
  </a>
      <br />
      {howBtn}
  {this.state.showHow&&how}
      <br />
      {wikiBtn}
  {this.state.showWiki&&wiki}
      <br />
</div>
    );
  }
}
