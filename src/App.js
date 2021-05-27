import React from "react";
import "./App.css";
import { Link, Route } from "react-router-dom";
import Category from "./pages/Category";
import Product from "./pages/Products";

const Home = () => <h1> Home Page rendered</h1>;

function App() {
  return (
    <div>
      <nav>
        <ul className="app-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/category">
        <Category />
      </Route>
      <Route path="/products">
        <Product />
      </Route>
    </div>
  );
}

export default App;
