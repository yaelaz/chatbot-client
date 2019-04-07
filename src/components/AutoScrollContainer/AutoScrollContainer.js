import React, { Component } from 'react'
import './AutoScrollContainer.scss'

class AutoScrollContainer extends Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();
  }

  componentDidUpdate(){
    window.scrollTo(0, this.container.current.scrollHeight);
  }

  render() {
    return (
      <div className="auto-scroll-container" ref={this.container}>
        {this.props.children}
      </div>
    );
  }
}

export default AutoScrollContainer;
