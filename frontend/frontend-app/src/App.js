import logo from './logo.svg';
import './App.css';
import ItemComponent from './components/ItemComponent';
import WelcomeHomeScreenComponent from './components/WelcomeHomeScreenComponent';
import  {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import UpdateItemComponent from './components/UpdateItemComponent';

function App() {
  return (

    <div>
      <div className="App">
      
               <Router>

                    <Switch>    
                      <Route path ="/"  exact component = {WelcomeHomeScreenComponent} />
                      <Route path ="/items" render={props => <ItemComponent {...props} />} />
                      <Route path ="/updateItem/:id" render={props => <UpdateItemComponent {...props} />} />
                    </Switch>                  
              </Router>
      
      </div>
    </div>
  );
}

export default App;
/* function App() {
  return (

    <div>
        <div className="App">

            
              <ItemComponent />

        </div>
    </div>
  );
}

export default App; */