import React, {Component} from "react";

interface AppProps {
  color: string,
  name?: string
}

interface AppState {
  counter: number
}

export class App extends Component <AppProps, AppState> {

  constructor(props: AppProps){
    super(props)
    this.state = {counter: 0}
  }
  

  onIncrement = (): void => {
    this.setState({counter: this.state.counter+1})
  }

  onDeccrement = (): void => {
    this.setState({counter: this.state.counter-1})
  }

  render() {
    return (
      <div>
        Hi There {this.props.color}
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDeccrement}>Decrement</button>
        <h2>{this.state.counter}</h2>
      </div>
    )
  }
}
