//  import './App.css';
import './assets/styles/styles.scss'
import { Switch, Route } from 'react-router-dom';
import {routes} from './routes.js'
import { AppHeader } from './pages/AppHeader';
import {Hero} from './cmps/hero'
import ItemList from './cmps/ItemList';
import { Main } from './cmps/main';
import { Section } from './cmps/Section';
import Reserve from './cmps/Reserve';
import { Footer } from './cmps/Footer';


function App() {
  return (
    <div className="App">
    
    <Hero/>
    <Main/>
    <ItemList/>
    <Section/>
    <Reserve/>
    <Footer/>
      <Switch>
      {routes.map(route => <Route key={route.path} exact component={route.component} path={route.path} />)}
      </Switch>

    </div>
  );
}

export default App;
