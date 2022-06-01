import React from "react";
import "./FooterInfo.css";

class FooterInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row d-flex justify-content-center mb-3">
        <div className="col-lg-8">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            distinctio earum repellat quaerat voluptatibus placeat nam, commodi
            optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </div>
      </div>
    );
  }
}

export default FooterInfo;
