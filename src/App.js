import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import uuid from 'uuid/v4';

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
        },{
          id: uuid(),
          title: 'Cricket world cup',
          dateStart: new Date('April 14, 2018 11:00:00'),
          dateEnd: new Date('April 14, 2018 13:00:00'),
          location: 'Melbourne',
          details: 'Fat cricket mate',
        },{
          id: uuid(),
          title: 'Stefan födelsedag',
          dateStart: new Date('July 12, 2018, 00:00:00'),
          dateEnd: new Date('July 12, 2018, 23:59:59'),
          location: 'Malmö',
          details: 'He get to skrrrt when he want'
        },{
          id: uuid(),
          title: 'Öl',
          dateStart: new Date('July 18, 2018, 00:00:00'),
          dateEnd: new Date('July 18, 2018, 23:59:59'),
          location: 'Malmö',
          details: 'Öl å sånt',
        },
      ]
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
