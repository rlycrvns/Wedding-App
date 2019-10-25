import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import AppNav from './components/AppNav';
import Home from './components/Home';
import Details from './components/Details';
import OurStory from './components/OurStory';
import SuggestASong from './components/SuggestASong';

const Main = () => (
  <main className='content'>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/components/details' component={Details} />
      <Route exact path='/components/ourstory' component={OurStory} />
      <Route exact path='/components/suggestasong' component={SuggestASong} />
    </Switch>
  </main>
);

function App() {
  return (
    <div className='App'>
      <AppNav />
      <Main />
    </div>
  );
}

export default App;
