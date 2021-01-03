import {
  BrowserRouter as Router,
  Route, Switch,
} from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css'

import ButtonsAndIcons from './pages/buttonsAndIcons';
import Color from './pages/color';
import Home from './pages/home';
import Typography from './pages/typography';
import ActionButtons from './pages/ActionButtons';
import NavBars from './pages/NavBars';
import Collection from './pages/Collection';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/typography" exact>
          <Typography />
        </Route>
        <Route path="/color" exact>
          <Color />
        </Route>
        <Route path="/buttonsAndIcons" exact>
          <ButtonsAndIcons />
        </Route>
        <Route path="/actionbutton" exact>
          <ActionButtons />
        </Route>
        <Route path="/navigationbar" exact>
          <NavBars />
        </Route>
        <Route path="/collection" exact>
          <Collection />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
