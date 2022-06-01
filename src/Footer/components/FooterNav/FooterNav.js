import React from "react";
import "./FooterNav.css";
import {Link} from "react-router-dom";

class FooterNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row text-center d-flex justify-content-center pt-3">
        <div className="col-md-2">
          <h6 className="text-uppercase font-weight-bold">
            <Link className='text-white' to="/about">About us</Link>
          </h6>
        </div>
        <div className="col-md-2">
          <h6 className="text-uppercase font-weight-bold">
            <Link className='text-white' to="/products">Products</Link>
          </h6>
        </div>
        <div className="col-md-2">
          <h6 className="text-uppercase font-weight-bold">
            <Link className='text-white' to="/awards">Awards</Link>
          </h6>
        </div>
        <div className="col-md-2">
          <h6 className="text-uppercase font-weight-bold">
            <Link className='text-white' to="/help">Help</Link>
          </h6>
        </div>
        <div className="col-md-2">
          <h6 className="text-uppercase font-weight-bold">
            <Link className='text-white' to="/contacts">Contacts</Link>
          </h6>
        </div>
      </div>
    );
  }
}

export default FooterNav;
