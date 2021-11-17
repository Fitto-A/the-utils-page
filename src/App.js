import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import FindImages from './pages/FindImages';
import LinksApp from './pages/LinksApp';
import ColorGenerator from './pages/ColorGenerator';
import LoremIpsum from './pages/LoremIpsum';
import Calculator from './pages/Calculator';

function App() {
  return (
    <Router basename='/'>

      <Navbar />
      <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/find-images'>
        <FindImages />
      </Route>
      <Route path='/links-app'>
        <LinksApp />
      </Route>
      <Route path='/color-generator'>
        <ColorGenerator />
      </Route>
      <Route path='/paragraphs-generator'>
        <LoremIpsum />
      </Route>
      <Route path='/calculator'>
        <Calculator />
      </Route>
      </Switch>

    </Router>

  );
}

export default App;
