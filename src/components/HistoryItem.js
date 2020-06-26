import React from "react";
import PropTypes from "prop-types";

export default function HistoryItem(props) {
  return <li>{props.action}</li>;
}

HistoryItem.propTypes = {
  action: PropTypes.string.isRequired,
};
