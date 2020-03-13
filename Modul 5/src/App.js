import React from 'react';
import logo from './logo.svg';
import './App.css';

import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  useLocation,
  useHistory,
  Redirect
} from "react-router-dom";


export default function AuthExample(){
  return(
    <Router>
      <div>
        <AuthButton/>

        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/private">Private Page</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/public">
            <PublicPage/>
          </Route>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <PrivateRoute path="/private">
            <ProtectedPage/>
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

function Home(){
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

const fakeAuth = {
  isAuthenticted: false,
  authenticate(cb) {
    fakeAuth.isAuthenticted = true;
    setTimeout(cb,100);
  },
  signout(cb){
    fakeAuth.isAuthenticted = false;
    setTimeout(cb,100);
  }
};

function AuthButton(){
  let history = useHistory();

  return fakeAuth.isAuthenticted ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() =>{
          fakeAuth.signout(() => history.push("/"))
        }}
      >
        Sign Out
      </button>
    </p>
  ) : (
    <p>You are not Logged in.</p>
  )
}

function PrivateRoute({ children, ...rest}) {
  return (
    <Route
     {...rest}
     render={({ location }) =>
     fakeAuth.isAuthenticted ? (
       children
     ) : (
       <Redirect
        to={{
          pathname: "/login",
          state: {from: location}
        }}
       />
     )
      }
    />
  );
}

function PublicPage(){
  return <h3>Public</h3>;
}

function ProtectedPage(){
  return <h3>Private</h3>
}

function LoginPage(){
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || {from: {pathname: "/"}};
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };
  
  return (
    <div>
      <p> You Must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log In</button>
    </div>
  )
}

function Topics() {
  let { path, url} = useRouteMatch();
  return(
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${url}/Sate, Nasi goreng`}>Kuliner</Link>
        </li>
        <li>
          <Link to={`${url}/Wisata alam, Museum`}>Travelling</Link>
        </li>
        <li>
          <Link to={`${url}/Ibis, JW Marriot`}>Review Hotel</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please Select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId }   = useParams();

  return(
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}


