import logo from "./logo.svg";
import "./App.css";
import Homepage from "./Pages/Homepage";
import { Navbar, Nav, NavItem } from "reactstrap";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AboutMepage from "./Pages/AboutMepage";
import { Container } from "reactstrap";
import PhotoGallerypage from "./Pages/PhotoGallerypage";
import { Routes, Route } from "react-router-dom";
import HomeRoutes from "./Components/HomeComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeRoutes />
        <div className="App-header">
          <Container>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/AboutMepage" element={<AboutMepage />} />
              <Route path="/PhotoGallerypage" element={<PhotoGallerypage />} />
            </Routes>
          </Container>
        </div>
        <footer className="App-footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
