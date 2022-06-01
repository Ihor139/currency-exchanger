import React from "react";
import FooterNav from "./components/FooterNav/FooterNav";
import FooterInfo from "./components/FooterInfo/FooterInfo";
import FooterCopyriting from "./components/FooterCopyriting/FooterCopyriting";
import "./Footer.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer className="text-center text-white bg-dark container-fluid mt-5">
        <FooterNav />

        <hr className="my-3" />
        <FooterInfo />
        <FooterCopyriting />
      </footer>
    );
  }
}

export default Footer;
