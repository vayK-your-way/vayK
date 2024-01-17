import HomePage from './components/HomePage.jsx';
import '../index.css';
import React from 'react';
import PageContentContainer from './components/PageContentContainer.jsx'
import bg from './assets/vayk_gradient_bg.jpg'

const App = () => {
  return (
    <div>
      <img src={bg}/>
      <PageContentContainer />
    </div>
  );
};
export default App;
