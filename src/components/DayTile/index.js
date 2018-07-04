import React from 'react';
import PropTypes from 'prop-types';

class DayTile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovered: false,
    };
  }

  onHoverHandler() {
    this.setState({ isHovered: true });
  }

  onBlurHandler() {
    this.setState({ isHovered: false });
  }

  render() {
    const {
      title,
      dateStart,
      dateEnd,
      location,
      details,
      color,
    } = this.props;

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

    let date;
    if (
      dateStart.getDate() === dateEnd.getDate()
      && dateStart.getMonth() === dateEnd.getMonth()
      && dateStart.getFullYear() === dateEnd.getFullYear()
    ) {
      date = (
        <div>
          {dateStart.getDate()}
        </div>
      );
    } else {
      date = (
        <div>
          {`${dateStart.getDate()} ${monthNames[dateStart.getMonth()]} - ${dateEnd.getDate()} ${monthNames[dateEnd.getMonth()]}`}
        </div>
      );
    }

    let time;
    if (dateStart.getDate() === dateEnd.getDate()) {
      time = (
        <div>
          {`Time: ${dateStart.getHours()}:${`0${dateStart.getMinutes()}`.slice(-2)} to ${dateEnd.getHours()}:${`0${dateEnd.getMinutes()}`.slice(-2)}`}
        </div>
      );
    } else {
      time = (
        <div>
          {`Time: ${dateStart.getDate()} ${monthNames[dateStart.getMonth()]} ${dateStart.getHours()}:${`0${dateStart.getMinutes()}`.slice(-2)} to ${dateEnd.getDate()} ${monthNames[dateEnd.getMonth()]} ${dateEnd.getHours()}:${`0${dateEnd.getMinutes()}`.slice(-2)}`}
        </div>
      );
    }

    // let dayTileClassName = 'DayTile ' + color;
    const dayTileClassName = `DayTile ${color}`;

    let children;
    const { isHovered } = this.state;
    if (isHovered) {
      children = (
        <div>
          {details}
        </div>
      );
    } else {
      children = (
        <div>
          <div className="DayTile__Date">
            {date}
          </div>
          <div className="DayTile__Title">
            {title}
          </div>
          <div className="DayTile__Time">
            {time}
          </div>
          <div className="DayTile__Location">
            {`Location: ${location}`}
          </div>
        </div>
      );
    }
    return (
      <div
        className={dayTileClassName}
        onMouseEnter={() => { this.onHoverHandler(); }}
        onMouseLeave={() => { this.onBlurHandler(); }}
      >
        {children}
      </div>
    );
  }
}

DayTile.propTypes = {
  title: PropTypes.string.isRequired,
  dateStart: PropTypes.instanceOf(Date).isRequired,
  dateEnd: PropTypes.instanceOf(Date).isRequired,
  location: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};


export default DayTile;
