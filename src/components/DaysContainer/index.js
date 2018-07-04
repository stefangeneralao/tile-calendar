import React from 'react'
import DayTile from '../DayTile';

const dayTileColors = ['red', 'green', 'blue'];

class DaysContainer extends React.Component {
  render() {
    const { events, selectedDate } = this.props;
    const filteredEvents = events.filter(event => (
      selectedDate.getMonth() === event.dateStart.getMonth() &&
      selectedDate.getYear() === event.dateStart.getYear()
    ));
    const filteredDayTiles = filteredEvents.map((event, i) => {
      const { id, title, dateStart, dateEnd, location, details } = event;
      return (
        <DayTile
          key={id}
          title={title}
          dateStart={dateStart}
          dateEnd={dateEnd}
          location={location}
          details={details}
          color={dayTileColors[i]}
        />
      )
    });

    return (
      <div className="DaysContainer">
        {filteredDayTiles}
      </div>
    )
  }
}

export default DaysContainer
