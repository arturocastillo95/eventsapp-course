import React from 'react';
import './css/App.css';
import EventsList from './components/EventList'

const sampleEvents = [
  {
    id: 1,
    name: 'Metallica',
    time: '5:00 p.m.',
    location: 'Ciudad de México',
    day: 5,
    month: 'Diciembre',
    image: '',
  },
  {
    id: 2,
    name: 'Orquesta sinfonica',
    time: '7:00 p.m.',
    location: 'Queretaro',
    day: 5,
    month: 'Diciembre',
    image: '',
  },

  {
    id: 3,
    name: 'Obra de teatro',
    time: '7:00 p.m.',
    location: 'Guanajuato',
    day: 5,
    month: 'Noviembre',
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
