import React, { /* Component, */ PureComponent } from "react";

// class App extends Component {
//   shouldComponentUpdate (nextProps, nextState) {
//     // return true: ComponentWillUpdate, render, ComponentDidUpdate
//     // return false to avoid unnecessary update
//     return nextState.someData !== this.state.someData
//   }
// }

class App extends PureComponent {
  // if shouldComponentUpdate is undefined,
  // PureComponent will shallowEqual compare props and state, to avoid update if unnecessary.
  shouldComponentUpdate () {}

  // this.forceUpdate() will ignore shoudComponentUpdate

  render () {
    return <div>Hello world!</div>;
  }
}

export default App;
