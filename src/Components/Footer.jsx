import { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
        <footer className="page-footer font-small blue pt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase">Content</h5>
              <p>
                Here you can use rows and columns to organize your footer content.
              </p>
            </div>
    
        
          </div>
        </div>
    
        <div className="footer-copyright text-center py-3">
          © 2020 Copyright:
          <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
        </div>
      </footer>
    );
  }
}
