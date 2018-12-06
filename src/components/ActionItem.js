import React from 'react';
import PropTypes from 'prop-types';

export default function ActionItem(props) {
  return (
    <li>{props.action}</li>
  );
};

ActionItem.propTypes = {
  action: PropTypes.string.isRequired
};