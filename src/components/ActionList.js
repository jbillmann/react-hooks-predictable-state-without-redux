import React from 'react';
import PropTypes from 'prop-types';
import ActionItem from './ActionItem';

export default function ActionList(props) {
  return (
    <ul>
      {props.actions.map((action, index) => {
        return <ActionItem key={index} action={JSON.stringify(action)} />;
      })}
    </ul>
  );
};

ActionList.propTypes = {
  actions: PropTypes.array.isRequired
};