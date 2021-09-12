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

let store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <BaseLayout>
          <Switch>
            <Route exact path="/" component={App}/>
            <Route  path="/maindisplay" component={MainDisplay}/>
            <Route  path="/targetdisplay" component={TargetDisplay}/>
          </Switch>
        </BaseLayout>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
