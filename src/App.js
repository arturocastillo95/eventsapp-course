import React from 'react';
import './css/App.css';
import EventsList from './components/EventList'

const sampleEvents = [
  {
    id: 1,
    name: 'Metallica',
    time: '5:00 p.m.',
    location: 'Ciudad de México',
    date: {
      day: 5,
      month: 'DIC',
    },
    image: '',
  },
  {
    id: 2,
    name: 'Orquesta sinfonica',
    time: '7:00 p.m.',
    location: 'Queretaro',
    date: {
      day: 5,
      month: 'DIC'
    },
    image: '',
  },

  {
    id: 3,
    name: 'Obra de teatro',
    time: '7:00 p.m.',
    location: 'Guanajuato',
    date: {
      day: 5,
      month: 'DIC'
    },
    image: '',
  },
]
function App() {
  return (
    <div className="App">
      <EventsList events={sampleEvents} />
    </div>
  );
}

export default App;
