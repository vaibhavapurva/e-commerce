
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import Reducer from './reducer'; 
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import Home from './Components/home';
import SignIn from './Components/signIn';
import SignUp from './Components/signUp';
import NavBar from './Components/NavBar';
import Detail from './Components/details';
import CheCkout from './Components/checkout';
import PrivateRoute from './Components/PrivateRoutes';
const store = createStore(Reducer , applyMiddleware(thunk));
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
        <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route  exact path="/" component={Home}/>
          <Route exact path="/SignIn" component={SignIn}/>
          <Route exact path="/SignUp" component={SignUp}/>
          <Route exact path="/detail/:id" component={Detail}/>
          <PrivateRoute exact path="/checkout" component={CheCkout}/>
        </Switch>
        </BrowserRouter>
        </Provider>
      </header>
    </div>
  );
}

export default App;
