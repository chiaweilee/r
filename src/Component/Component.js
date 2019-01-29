import React, { Component } from "react";

class App extends Component {
  constructor (props) {
    super(props);
    // only assign this.state in constructor,
    // use this.setState in all other method.
    this.state = {
      // do not do this!
      // color: props.color // side-effects
    };
    this.handClick = this.handClick.bind(this);
  }

  componentDidMount () {
    // it will trigger an extra rendering,
    // but it will happen before browser updates.
    // render() will be called twice.
    this.setState({
      color: this.props.color
    });
  }

  shouldComponentUpdate () {
    // see PureComponent
  }

  componentDidUpdate (prevProps, prevState /* , snapshot */) {
    // do compare props or state,
    // must be wrapped in a condition,
    // it would cause an extra re-rendering.
    if (this.props.color !== prevProps.color) {
      // ...
    }
  }

  componentWillUnmount () {}

  render () {
    // render should be pure
    return <div>Hello world!</div>;
  }

  // avoid use:
  // UNSAFE_componentWillMount() {}
  // UNSAFE_componentWillUpdate() {}
  // UNSAFE_componentWillReceiveProps() {}
}

export default App;
