import React, { Component } from 'react'
import PropTypes from 'prop-types'

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

AutoScrollContainer.propTypes = {
  children: PropTypes.element.isRequired
};

export default AutoScrollContainer;
