import { Component } from "react";
import AboutMepage from "../Pages/AboutMepage";
import { Link } from "react-router-dom";
export default class Header extends Component {
  

  render() {
    
    return (
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            Gallery
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link"  >
                <Link to="/" style={{textDecoration:"none" , color: "black" , padding : "10px"}} > Home </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                <Link to="/AboutMepage" style={{textDecoration:"none" , color: "black" , padding : "10px"}} > About </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" >
                <Link to="/PhotoGallerypage" style={{textDecoration:"none" , color: "black" , padding : "10px"}} > Gallery </Link>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
