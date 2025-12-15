import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import DesignerCakes from './components/DesignerCakes';
import Offers from './components/Offers';
import Social from './components/Social';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-pink selection:text-brand-text">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <DesignerCakes />
        <Offers />
        <Social />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

export default App;