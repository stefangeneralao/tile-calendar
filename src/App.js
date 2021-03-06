import React, { Component } from 'react';
import './App.css';
import uuid from 'uuid/v4';
import Header from './components/Header';
import Main from './components/Main';

class App extends Component {
  constructor() {
    super();
    const currentDate = new Date();
    this.state = {
      selectedDate: currentDate,
      events: [{
        id: uuid(),
        title: 'PNW Camping trip',
        dateStart: new Date('March 17, 2018 10:00:00'),
        dateEnd: new Date('April 21, 2018 23:00:00'),
        location: 'Norra vallgatan 105',
        details: 'Detaljer om skrrrrrrrtttt boom',
      }, {
        id: uuid(),
        title: 'Cricket world cup',
        dateStart: new Date('April 14, 2018 11:00:00'),
        dateEnd: new Date('April 14, 2018 13:00:00'),
        location: 'Melbourne',
        details: 'Fat cricket mate',
      }, {
        id: uuid(),
        title: 'Stefan födelsedag',
        dateStart: new Date('July 12, 2018, 00:00:00'),
        dateEnd: new Date('July 12, 2018, 23:59:59'),
        location: 'Malmö',
        details: 'He get to skrrrt when he want',
      }, {
        id: uuid(),
        title: 'Öl',
        dateStart: new Date('July 18, 2018, 00:00:00'),
        dateEnd: new Date('July 18, 2018, 23:59:59'),
        location: 'Malmö',
        details: 'Öl å sånt',
      }, {
        id: uuid(),
        title: 'Swe vs Eng',
        dateStart: new Date('July 07, 2018, 17:00:00'),
        dateEnd: new Date('July 07, 2018, 19:00:00'),
        location: 'Ryssland',
        details: 'Fotboll å ölkorv',
      },
      ],
    };

    this.setPreviousMonth = this.setPreviousMonth.bind(this);
    this.setNextMonth = this.setNextMonth.bind(this);
  }

  setNextMonth() {
    const { selectedDate } = this.state;
    const nextMonth = selectedDate.getMonth() + 1;
    const dateClone = new Date(selectedDate.toString());
    dateClone.setMonth(nextMonth);
    this.setState({
      selectedDate: dateClone,
    });
  }

  setPreviousMonth() {
    const { selectedDate } = this.state;
    const previousMonth = selectedDate.getMonth() - 1;
    const dateClone = new Date(selectedDate.toString());
    dateClone.setMonth(previousMonth);
    this.setState({
      selectedDate: dateClone,
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
