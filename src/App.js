import './App.css';
import Business from './components/Business';
import Header from './components/Header';
import Hero from './components/Hero';
import Moreapps from './components/Moreapps';
import Ridewithuber from './components/Ridewithuber';
import Safety from './components/Safety';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Business/>
      <Ridewithuber/>
      <Safety/>
      <Moreapps/>
      <Signup/>
    </div>
  );
}

export default App;
