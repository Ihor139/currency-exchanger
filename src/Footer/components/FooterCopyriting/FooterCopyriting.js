import React from "react";
import "./FooterCopyriting.css";

class FooterCopyriting extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="text-center p-2">
        © 2020 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    );
  }
}

export default FooterCopyriting;
