import React from 'react';
import './scss/App.scss';
import Header from "./components/header/Header";
import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import Users from "./components/users/Users";
import Register from "./components/Register";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <AboutMe />
      <Users />
      <Register />
      <Footer />
    </div>
  );
}

export default App;
