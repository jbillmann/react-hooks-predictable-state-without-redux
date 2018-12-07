import React, { useEffect } from 'react';
import useName from '../hooks/useName';
import useHistory from '../hooks/useHistory';
import NameForm from '../components/NameForm';
import HistoryList from '../components/HistoryList';

export default function Name(props) {
  const nameContext = useName();
  const historyContext = useHistory();

  useEffect(() => {
    document.title = nameContext.state.firstName + ' ' + nameContext.state.lastName;
  });

  const handleNameChange = (e, propName) => {
    nameContext.updateName({ [propName]: e.target.value });
  }

  return (
    <div>
      <NameForm name={nameContext.state} nameChange={handleNameChange} />
      <HistoryList actions={historyContext.state.actions} />
    </div>
  );
}