import React from "react";
import PropTypes from "prop-types";
import HistoryItem from "./HistoryItem";

export default function HistoryList(props) {
  return (
    <ul>
      {props.actions.map((action, index) => {
        return <HistoryItem key={index} action={JSON.stringify(action)} />;
      })}
    </ul>
  );
}

HistoryList.propTypes = {
  actions: PropTypes.array.isRequired,
};
