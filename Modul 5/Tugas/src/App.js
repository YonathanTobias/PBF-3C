import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ventela from './ventela.jpg';
import compas from './compas.jpg';
import patrobas from './patrobas.jpg';
import nike from './nike.jpg';
import adidas from './adidas.jpg';
import puma from './puma.jpg';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  useHistory,
  Redirect,
  useLocation
} from "react-router-dom";
export default function AuthExample() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar">
        <Link className="navbar-brand" to="/about">SHOP.Shoes</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
            <Link className="nav-link" to="/shop">Shop</Link>
            </li>
          </ul>
          <ul className="navbar-nav navbar-right">
            <AuthButton/>
          </ul>
        </div>
      </nav>
      <div>
        <Switch>
          <Route path="/about">
            <AboutPage/>
          </Route>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <ShopRoute path="/shop">
            <ShopPage/>
          </ShopRoute>
        </Switch>
        <footer class="page-footer font-small blue">
        </footer>
      </div>
    </Router>
  );
}
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};
function AuthButton() {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };
  return fakeAuth.isAuthenticated ? (
      <button class= "btn btn-warning" onClick={() => {
        fakeAuth.signout(() => history.push("/"));
      }}>
        Sign out
      </button>
  ) : (
    <button className="btn btn-primary" onClick={login}>Log in</button>
  );
}
function ShopRoute({children, ...rest}) {
  return (
    <Route
      {...rest}
      render={({location}) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : ( 
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />    
        ) 
      }
    />  
  );
}
function AboutPage() {
  return (
    <h3>Shop.Shoes is e-commerce platform in POLINEMA</h3>
  );
}
function ShopPage() {
  return (
    <Router>
      <div>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/Luar">Luar</Link>
          </li>
          <li className="list-group-item">
            <Link to="/Lokal">Lokal</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/Luar">
            <Luar/>
          </Route>
          <Route path="/Lokal">
            <Lokal/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };
  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button className="btn btn-primary" onClick={login}>Log in</button>
    </div>
  );
}
function Lokal() {
  let {path, url} = useRouteMatch();
  return (
    <div>
      <h2>Sepatu Merek Lokal</h2>
      <div className="container">
        <div className="row">
          <Link class="col-sm column productbox" to={`${url}/Compass Gazelle blue, 43, Rp. 1.500.000`}>
            <img src={compas} alt="" className="productimg"/>
            <div class="producttitle">Compass</div>
          </Link>
          <Link class="col-sm column productbox" to={`${url}/Ventela Public Low Navy, 41, Rp. 250.000`}>
            <img src={ventela} alt="" className="productimg"/>
            <div class="producttitle">Ventela</div>
          </Link>
          <Link class="col-sm column productbox" to={`${url}/Patrobas Ivan Low, 44, Rp. 300.000`}>
            <img src={patrobas} alt="" className="productimg"/>
            <div class="producttitle">Patrobas</div>
          </Link>
        </div>
      </div>
      <Switch>
        <Route exact path={path}>
          <h3>Pilih Gambar Sepatu untuk detail dan harga!</h3>
        </Route>
        <Route path={`${path}/:productId`}>
          <Lokals />
        </Route>
      </Switch>
    </div>
  );
}
function Lokals() {
    let {productId} = useParams();
    return (
      <div>
        <h3>{productId}</h3>
      </div>
    );
}
function Luar() {
  let {path, url} = useRouteMatch();
  return (
    <div>
      <h2>Sepatu Merek Luar</h2>
      <div className="container">
        <div className="row">
          <Link class="col-sm column productbox" to={`${url}/Nike Air Force 1, 39, Rp. 2.500.000`}>
            <img src={nike} alt="" className="productimg"/>
            <div class="producttitle">Nike</div>
          </Link>
          <Link class="col-sm column productbox" to={`${url}/Adidas Yezzy 350, 40, Rp. 3.100.000`}>
            <img src={adidas} alt="" className="productimg"/>
            <div class="producttitle">Adidas</div>
          </Link>
          <Link class="col-sm column productbox" to={`${url}/Puma x Rubik's RS-X3, 42, IDR 2.100.000`}>
            <img src={puma} alt="" className="productimg"/>
            <div class="producttitle">Puma</div>
          </Link>
        </div>
      </div>
      <Switch>
        <Route exact path={path}>
          <h3>Pilih tablet untuk detail dan harga!</h3>
        </Route>
        <Route path={`${path}/:productId`}>
          <Luars />
        </Route>
      </Switch>
    </div>
  );
}
function Luars() {
    let {productId} = useParams();
    return (
      <div>
        <h3>{productId}</h3>
      </div>
    );
}

