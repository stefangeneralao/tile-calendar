import React from 'react';

const title = () => (
  <div className="MainNavBar__title">
    Jump skrrrrrrrtttt
  </div>
);

const monthSelector = (selectedDate, setNextMonth, setPreviousMonth) => (
  <div className="MainNavBar__monthSelector">
    <div className="MainNavBar__selectedDate">
      {`
        ${monthNames[selectedDate.getMonth()]}, ${selectedDate.getFullYear()}
      `}
    </div>

    <div className="MainNavBar__prevBtn" onClick={setPreviousMonth}>
      {'<'}
    </div>

    <div className="MainNavBar__nextBtn" onClick={setNextMonth}>
      {'>'}
    </div>
  </div>
);

const monthNames = [
  "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

class MainNavBar extends React.Component {
  render() {
    const { selectedDate, setNextMonth, setPreviousMonth } = this.props;

    return (
      <div className="MainNavBar">
        {title()}

        {monthSelector(selectedDate, setNextMonth, setPreviousMonth)}
      </div>
    );
  }
}

export default MainNavBar;
