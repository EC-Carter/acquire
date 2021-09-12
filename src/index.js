//react 
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//redux
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducers/reducer';


//styles
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import App from './App';
import BaseLayout from './components/layout/BaseLayout';
import MainDisplay from './components/MainDisplay';
import TargetDisplay from './components/TargetDisplay';

//create store and save global state to session

const saveToSessionStorage = (globalState) => {
  try{
    const serializedState = JSON.stringify(globalState);
    sessionStorage.setItem('state',serializedState);
  }
  catch(e){
    console.log(e)
  }
}

const loadFromSessionStorage = () => {
  const serializedState = sessionStorage.getItem('state');
  if(serializedState == null){
    return undefined;
  } else {
    return JSON.parse(serializedState);
  }
}

const persistedState = loadFromSessionStorage();

let store = createStore(reducer, persistedState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(() => {
  saveToSessionStorage(store.getState());
})


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <BaseLayout>
          <Switch>
            <Route exact path="/" component={App}/>
            <Route  path="/maindisplay" component={MainDisplay}/>
            <Route  path="/detail/:name" component={TargetDisplay}/>
          </Switch>
        </BaseLayout>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
