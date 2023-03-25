import './App.css';
import Business from './components/business/Business';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Moreapps from './components/moreapps/Moreapps';
import Ridewithuber from './components/ridewithuber/Ridewithuber';
import Safety from './components/safety/Safety';
import Signup from './components/signup/Signup';

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
      <Footer/>
    </div>
  );
}

export default App;
