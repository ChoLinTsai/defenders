import React, { Component } from "react";
import ReactDom from "react-dom";
import App from "./components/0_App/App"




class Index extends Component {
  render() {
    return (
      <div>
        <App />
      </div>
    );
  }
}



ReactDom.render(
  <Index />,
  document.getElementById('index')
)
