import React, { useEffect } from 'react';
import useName from '../hooks/useName';
import useHistory from '../hooks/useHistory';
import useCalculator from '../hooks/useCalculator';
import NameForm from '../components/NameForm';
import HistoryList from '../components/HistoryList';
import CalculatorForm from '../components/CalculatorForm';

export default function Main(props) {
  const nameContext = useName();
  const historyContext = useHistory();
  const calculatorContext = useCalculator();

  useEffect(() => {
    document.title = nameContext.state.firstName + ' ' + nameContext.state.lastName;
  });

  const handleNameChange = (e, propName) => {
    nameContext.updateName({ [propName]: e.target.value });
  };

  return (
    <div>
      <NameForm name={nameContext.state} nameChange={handleNameChange} />
      <CalculatorForm value={calculatorContext.state.value} add={calculatorContext.add} subtract={calculatorContext.subtract} />
      <HistoryList actions={historyContext.state.actions} />
    </div>
  );
}