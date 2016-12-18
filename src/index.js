import React from 'react'
import { Component } from 'react'
import ReactDOM from 'react-dom'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = { click: 0, condition: false }
    this.handleClick = this.handleClick.bind(this)
    this.displayText = this.displayText.bind(this)
  }


  handleClick() {
    let click = this.state.click + 1;
    this.setState( { condition : !this.state.condition, click: click } );
  }

  displayText() {
    const texts = [
      'is kind',
      'is smart',
      'loves to laugh',
      'is a good witch',
      'is beautiful',
      'plays ukulele',
      'is beautiful',
      'has a precious loving heart',
      'is a badass',
      'helps others',
      'works hard',
      'can beat the shit out of you if she wants to',
      'has a sexy ass',
      'has great teeth',
      'knows the future',
      'looks great in jeans',
      'looks great in a dress',
      'stays healthy',
      'makes delicious pies',
      'is an empath',
      'is full of love',
      'is compassionate to others',
      'is funny',
      'looks fab without makeup',
      'cheers you up'
    ]
    let num = Math.floor(Math.random() * (texts.length - 1))
    if(this.state.click === 0) {
      return (
        <div>
          <h1 className='inboxText'>Click me</h1>
        </div>
      )
    } else {
      return (
        <div className='inboxText'>
          <h1 > {`Because she ${texts[num]}!`} </h1>
          <p >(click me again)</p>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <div>
          <image className="pic" src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/12507601_10153884750664743_6812443868270739938_n.jpg?oh=7b432a7b857c42ac21054220533c27e6&oe=58AE8636"></image>
          <div className='titlewrap'>
            <h1 className="title">Why is Isabel Archer the most awesome girl in the Universe?</h1>
          </div>
          <div className = 'cardWrap'>
            <div id = "card" className={this.state.condition ? "flipped" :""}
                  onClick= {this.handleClick}>
              <div className='front'>{this.displayText()}</div>
              <div className='back'>{this.displayText()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('.box'))
