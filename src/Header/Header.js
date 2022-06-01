import React from "react";
import Nav from "./components/Nav/Nav";
import "./Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header className="header">
        <Nav />
      </header>
    );
  }
}

export default Header;
