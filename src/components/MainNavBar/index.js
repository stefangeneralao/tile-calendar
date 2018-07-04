import React from 'react';
import PropTypes from 'prop-types';

const title = () => (
  <div className="MainNavBar__title">
    Jump skrrrrrrrtttt
  </div>
);

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const monthSelector = (selectedDate, setNextMonth, setPreviousMonth) => (
  <div className="MainNavBar__monthSelector">
    <div className="MainNavBar__selectedDate">
      {`
        ${monthNames[selectedDate.getMonth()]}, ${selectedDate.getFullYear()}
      `}
    </div>

    <div className="MainNavBar__prevBtn" tabIndex={0} onClick={setPreviousMonth} onKeyPress={setPreviousMonth} role="button">
      {'<'}
    </div>

    <div className="MainNavBar__nextBtn" onClick={setNextMonth} tabIndex={0} role="button" onKeyPress={setNextMonth}>
      {'>'}
    </div>
  </div>
);

const MainNavBar = ({ selectedDate, setNextMonth, setPreviousMonth }) => (
  <div className="MainNavBar">
    {title()}
    {monthSelector(selectedDate, setNextMonth, setPreviousMonth)}
  </div>
);

MainNavBar.propTypes = {
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  setNextMonth: PropTypes.func.isRequired,
  setPreviousMonth: PropTypes.func.isRequired,
};

export default MainNavBar;
