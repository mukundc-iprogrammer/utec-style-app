import AppList from './components/AppList';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AppAddStyle from './components/AppAddStyle';
import ListItemComponent from './components/ListItemComponent';
import EditForm from './components/EditForm';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route component={AppList} path='/' exact />
          <Route component={AppAddStyle} path='/app-add-style' />
          <Route component={ListItemComponent} path='/app-list/:uId' />
          <Route component={EditForm} path='/edit-form/:uId' />
          <Route render={() => <p>Page Not Found</p>} path='*' />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
