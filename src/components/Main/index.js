import React from 'react';
import PropTypes from 'prop-types';
import MainNavBar from '../MainNavBar';
import DaysContainer from '../DaysContainer';

class Main extends React.PureComponent {
  render() {
    const {
      selectedDate,
      setNextMonth,
      setPreviousMonth,
      events,
    } = this.props;
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

Main.propTypes = {
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  setNextMonth: PropTypes.func.isRequired,
  setPreviousMonth: PropTypes.func.isRequired,
  events: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Main;
