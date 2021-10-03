import Navbar from './components/Navbar.js';
import './App.css';
import { BrowserRouter as Router,Switch, Route} from 
'react-router-dom';
import './App.css';
import Home from './components/Home';
import contact from './components/contact';
import info from './components/info';
import proj from './components/proj';
import template from './components/template';
import ScrollToTop from './components/ScrollToTop';






function App() {
  return (
    <div className="App">
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <ScrollToTop>
          <Navbar/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/contacts' exact component={contact}/>
            <Route path='/info' exact component={info}/>
            <Route path='/projects' exact component={proj}/>
            <Route path='/projects/:id' exact component={template}/>
          </Switch>
        </ScrollToTop> 
      </Router>
    </div>
  );
}

export default App;
