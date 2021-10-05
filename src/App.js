import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Gallery from './components/Gallery/Gallery';

function App() {
  return (
    <div className="App">
      <Router>
        <Route>
           <Header></Header>
        </Route>
         <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about">
               <About></About>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <Route exact path="/gallery">
              <Gallery></Gallery>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
         </Switch>
         <Route>
            <Footer></Footer>
         </Route>
      </Router>
    </div>
  );
}

export default App;
