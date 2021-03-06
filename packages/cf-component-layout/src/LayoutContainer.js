import React from 'react';

import PropTypes from 'prop-types';

class LayoutContainer extends React.Component {
  render() {
    return (
      <div className="cf-layout__container">
        {this.props.children}
      </div>
    );
  }
}

LayoutContainer.propTypes = {
  children: PropTypes.node
};

export default LayoutContainer;
