import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

class App extends Component {
  constructor() {
    super();
    const currentDate = new Date();
    this.state = {
      selectedDate: currentDate,
      events: {
        '150317-biubi': {
          title: 'PNW Camping trip',
          dateStart: new Date('March 17, 2015 10:00:00'),
          dateEnd: new Date('April 21, 2015 23:00:00'),
          location: 'Norra vallgatan 105',
          details: 'Detaljer om skrrrrrrrtttt boom'
        },
        '150414-oioj': {
          title: 'Cricket world cup',
          dateStart: new Date('April 14, 2015 11:00:00'),
          dateEnd: new Date('April 14, 2015 13:00:00'),
          location: 'Melbourne',
          details: 'Fat cricket mate'
        },
      }
    }
  }

  setNextMonth = () => {
    const nextMonth = this.state.selectedDate.getMonth() + 1;
    const dateClone = new Date(this.state.selectedDate.toString());
    dateClone.setMonth(nextMonth);
    this.setState({
      selectedDate: dateClone
    });
  }

  setPreviousMonth = () => {
    const previousMonth = this.state.selectedDate.getMonth() - 1;
    const dateClone = new Date(this.state.selectedDate.toString());
    dateClone.setMonth(previousMonth);
    this.setState({
      selectedDate: dateClone
    });
  }

  render() {
    const { selectedDate, events } = this.state;
    const { setNextMonth, setPreviousMonth } = this;
    return (
      <div className="App">
        <Header />
        <Main
          selectedDate={selectedDate}
          setNextMonth={setNextMonth}
          setPreviousMonth={setPreviousMonth}
          events={events}
        />
      </div>
    );
  }
}

export default App;
