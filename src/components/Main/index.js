import React from 'react';
import MainNavBar from '../MainNavBar';
import DaysContainer from '../DaysContainer';

class Main extends React.Component {
  render() {
    const { selectedDate, setNextMonth, setPreviousMonth, events } = this.props;
    return (
      <div className="Main">
        <MainNavBar
          selectedDate={selectedDate}
          setNextMonth={setNextMonth}
          setPreviousMonth={setPreviousMonth}
        />
        <div className="clearFloat" />
        <DaysContainer
          events={events}
          selectedDate={selectedDate}
        />
      </div>
    );
  }
}

export default Main;
