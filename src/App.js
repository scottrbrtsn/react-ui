import React from "react";
import ReactDOM from "react-dom";
import { PolySynth } from "tone";
import { Freeverb } from "tone";

import './App.css';

//Browsers do not like mouseHover for audio events.  

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleUp = this.handleUp.bind(this);
    this.handleDown = this.handleDown.bind(this);
    this.playNote = this.playNote.bind(this); 
 
    this.noteOne = 73.42;
    this.noteTwo = 110;
    this.noteThree = 146.83;
    this.revDamp = 10
    this.synth = new PolySynth().toMaster();

    this.rev = new Freeverb().toMaster();
    this.synth.connect(this.rev);
    this.rev.dampening.value = this.revDamp;

  }

  handleUp() {
    this.updateSynth(10);
  }

  handleDown() {
    this.updateSynth(-10);
  }

  updateSynth(val){
    this.revDamp = this.revDamp + val/10;
    this.rev.dampening.value = this.revDamp;

    this.noteOne = this.noteOne + val;
    this.noteTwo = this.noteTwo + val;
    this.noteThree = this.noteThree + val;
  }

  createTable = () => {
    let table = []
    let max = 20;
    // Outer loop to create parent
    for (let i = 0; i < max + 1; i++) {
      let children = []
      //Inner loop to create children
      for (let j = 0; j < max + 1; j++) {
        let calc = (j +i) % (max*2);
        let calc2 = max - i + j;
        let calc3 = max - j + i;
        let adjust = max*max;

        if(j <= max/2 && i <= max/2){
          children.push(<td key={i + j}>{this.playNoteButton(adjust - calc*calc)}</td>)
        } else if(j >= max/2 && i <= max/2){
        children.push(<td key={i + j}>{this.playNoteButton(adjust - calc3*calc3)}</td>)
        } else if(i >= max/2 && j <= max/2){
          children.push(<td key={i + j}>{this.playNoteButton(adjust - calc2*calc2)}</td>)
        } else {
          children.push(<td key={i + j}>{this.playNoteButton(i*j)}</td>)
        } 
      }
      //Create the parent and add the children
      table.push(<tr key={i}>{children}</tr>)
    }
    return table
  }
  
  playNoteButton = (offset) => {
    return(
        <button className="button" onMouseDown={() => this.playNote(offset)}>
        
        </button>
    );
  }

  playNote(offset) {
  
    offset = offset * .50;
    if(offset !== 0){
      this.synth.triggerAttackRelease([this.noteOne + offset, this.noteTwo + offset, this.noteThree + offset], 1);
    }else{
      this.synth.triggerAttackRelease([this.noteOne, this.noteTwo, this.noteThree], 1);
    }  
  }
  
  createPitchUpButton = () => {
    return(
        <button onMouseEnter={this.handleUp}>
          up
        </button>
    );
  }

  createPitchDownButton = () => {
    return(
        <button onMouseEnter={this.handleDown}>
          down
        </button>
    );
  }

  render() {
    
    return (
      <div>
        <table>
          <tbody>
            {this.createTable()}
          </tbody>
        </table>
      </div>
      
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));