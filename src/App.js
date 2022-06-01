import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page__wrapper">
        <BrowserRouter>
          <Header/>
          <main className="page__content">
            <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contacts" element={<Contacts/>}/>
            </Routes>
          </main>
          <Footer/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
