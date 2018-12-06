import React, { useEffect, useContext } from 'react';
import { NameContext } from "../providers/nameProvider";
import NameForm from '../components/NameForm';
import ActionList from '../components/ActionList';

export default function Name(props) {
  const { state, actions, dispatch } = useContext(NameContext);

  useEffect(() => {
    document.title = state.firstName + ' ' + state.lastName;
  });

  const handleNameChange = (e, propName) => {
    dispatch(actions.updateName({ [propName]: e.target.value }));
  }

  return (
    <div>
      <NameForm name={state} nameChange={handleNameChange} />
      <ActionList actions={state.actions} />
    </div>
  );
}