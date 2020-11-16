import React from 'react';
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'
import RestaurantContextProvider from './context/restaurantContext';
import './css/App.css';

function App() {
  return (
    <div className = "grid">
      <RestaurantContextProvider  >
      <Header />
        <Main />
        <Footer />
      </RestaurantContextProvider >
    </div>
  );
}

export default App;
