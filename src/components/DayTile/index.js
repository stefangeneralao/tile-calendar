import React from 'react'


class DayTile extends React.Component {
    render() {
        const { title, dateStart, dateEnd, location, details } = this.props
        
        const monthNames = [
            "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
          ];

        let date;
        if (dateStart.getDate() === dateEnd.getDate() && dateStart.getMonth() === dateEnd.getMonth() && dateStart.getFullYear() === dateEnd.getFullYear()) {
            date = (
                <div>
                    {dateStart.getDate()}
                </div>
            );
        } else {
            date = (
                <div>
                    {dateStart.getDate() + '-' + dateEnd.getDate()}
                </div>
            );
        }

        let time;
        if (dateStart.getDate() === dateEnd.getDate()) {
            time = (
            <div>
                Time: {dateStart.getHours()}:{('0' + dateStart.getMinutes()).slice(-2)} to {dateEnd.getHours()}:{('0' + dateEnd.getMinutes()).slice(-2)}
            </div>
            )
        }
        else {
            time = (
            <div>
                Time: {dateStart.getDate()} {monthNames[dateStart.getMonth()]} {dateStart.getHours()}:{('0' + dateStart.getMinutes()).slice(-2)} to {dateEnd.getDate()} {monthNames[dateEnd.getMonth()]} {dateEnd.getHours()}:{('0' + dateEnd.getMinutes()).slice(-2)}
            </div>
            )
        }

        return (
            <div className='DayTile'>
            {date}<br/>
            {title}<br/>
            {time}<br/>
            Location: {location}

            </div>
        )
    }
}

export default DayTile