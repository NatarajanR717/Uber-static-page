import './App.css';
import Business from './components/Business';
import Header from './components/Header';
import Hero from './components/Hero';
import Ridewithuber from './components/Ridewithuber';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Business/>
      <Ridewithuber/>
    </div>
  );
}

export default App;
