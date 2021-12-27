import './App.css';
import Signup from './components/Signup'
import Login from './components/Login'
import Feed from './components/Feed';
import ForgotPassword from './components/ForgotPassword'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { AuthProvider } from './Context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Profile from './components/Profile';
import Mememaker from './components/Mememaker'
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/forgotpassword" component={ForgotPassword} />
          <Route path="/memestudio" component={Mememaker} />
          <PrivateRoute path="/profile/:id" component={Profile} />
          <PrivateRoute path="/" component={Feed} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>

  );
}

export default App;
