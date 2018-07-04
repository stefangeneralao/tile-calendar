import React from 'react'
import DayTile from '../DayTile';

class DaysContainer extends React.Component {
  render() {
    const { events, selectedDate } = this.props;
    const filteredEvents = events.filter(event => (
      selectedDate.getMonth() === event.dateStart.getMonth()
    ));
    const filteredDayTiles = filteredEvents.map(event => {
      const { id, title, dateStart, dateEnd, location, details } = event;
      return (
        <DayTile
          key={id}
          title={title}
          dateStart={dateStart}
          dateEnd={dateEnd}
          location={location}
          details={details}
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
