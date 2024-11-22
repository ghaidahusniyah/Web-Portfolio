import './App.css';
import Header from './assets/components/Header.jsx';
import Hero from './assets/components/Hero.jsx';
import Record from './assets/components/Record.jsx';
import Portfolio from './assets/components/Portfolio.jsx';
import License from './assets/components/LIcense.jsx';
import Footer from './assets/components/Footer.jsx';

const App = () => {
  return (
    <div className='bg-primary'>
      <Header />
      <div className='bg-primary px-10'>
        <Hero />
        <Record />
        <Portfolio />
        <License />
      </div>
      <Footer />
    </div>
  );
};

export default App;
