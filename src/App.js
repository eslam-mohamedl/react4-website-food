import React, { Component } from 'react';
import { Header } from './component/Header/Header';
import Happy from './component/Happy/Happy';
import { About } from './component/About/About';
import  Lngredients from './component/Ingredients/Lngredients';
import { Blog } from './component/Bolgs/Blog';
import Stomach from './component/Stomach/Stomach';
import Caruosel from './component/Caruosel/Caruosel';
import Footer from './component/Footer/Footer';
import Features from './component/features/Features';
class App extends Component {

  render(){
    return (
      <div className="App">
     <Header/> 
     <Happy/>
     <About/>
     <Lngredients/>
     <Blog/>
     <Stomach/>
     <Caruosel/>
     <Features/>

     <Footer/>
      </div>
    );
  
  }
}

export default App;
