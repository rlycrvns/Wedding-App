import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles/nav.scss';
import './styles/home.scss';
import './styles/details.scss';
import './styles/ourStory.scss';
import './styles/suggestASong.scss';
import './styles/rsvp.scss';
import './styles/footer.scss';
import AppNav from './components/AppNav';
import Home from './components/Home';
import Details from './components/Details';
import OurStory from './components/OurStory';
import SuggestASong from './components/SuggestASong';
import RSVP from './components/RSVP';
import { Provider } from 'react-redux';
import store from './store';

const Main = () => (
  <main className='content'>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/details' component={Details} />
      <Route exact path='/ourstory' component={OurStory} />
      <Route exact path='/suggestasong' component={SuggestASong} />
      <Route exact path='/rsvp' component={RSVP} />
    </Switch>
  </main>
);

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <AppNav />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
