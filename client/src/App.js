import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import './App.scss';
import AppNav from './components/AppNav';
import Home from './components/Home';
import Details from './components/Details';
import OurStory from './components/OurStory';
import SuggestASong from './components/SuggestASong';

function App() {
  return (
    <HashRouter>
      <div className='App'>
        <header>
          <AppNav />
        </header>
        <div className='content'>
          <Route exact path='/' component={Home} />
          <Route exact path='/components/details' component={Details} />
          <Route exact path='/components/ourstory' component={OurStory} />
          <Route
            exact
            path='/components/suggestasong'
            component={SuggestASong}
          />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
