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
import Grid from './pages/Grid';
import Card from './pages/Card';
import Footer from './pages/Footer';
import Forms from './pages/forms';
import FancyForm from './pages/FancyForm'
import Chips from './pages/Chips'
import Carousel from './pages/Carousel'

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
        <Route path="/grid" exact>
          <Grid />
        </Route>
        <Route path="/card" exact>
          <Card />
        </Route>
        <Route path="/footer" exact>
          <Footer />
        </Route>
        <Route path="/form" exact>
          <Forms />
        </Route>
        <Route path="/fancyform" exact>
          <FancyForm />
        </Route>
        <Route path="/chips" exact>
          <Chips />
        </Route>
        <Route path="/carousel" exact>
          <Carousel />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
