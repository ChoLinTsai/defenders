import React, {Component} from "react";
import header from './header.scss';
import Navbar from '../2_Navbar/navbar';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      daredevil: {
        display: "none"
      },
      jessica: {
        display: "none"
      },
      luke: {
        display: "none"
      },
      iron: {
        display: "none"
      },
    };
  }


  mouseOver(e) {
    let getIndex = Number(e.target.dataset.index);
    let charList = Object.keys(this.state);
    let getChar = charList[getIndex - 1];

    this.setState({
      [getChar]: {
        display: "block"
      }
    })
  }

  mouseLeave(e) {
    let getIndex = Number(e.target.dataset.index);
    let charList = Object.keys(this.state);
    let getChar = charList[getIndex - 1];

    this.setState({
      [getChar]: {
        display: "none"
      }
    })
  }

  render() {

    const overlayData = [
      {
        index: 1,
        id: header.overLayDaredevil,
        style: this.state.daredevil
      }, {
        index: 2,
        id: header.overLayJessica,
        style: this.state.jessica
      }, {
        index: 3,
        id: header.overLayLuke,
        style: this.state.luke
      }, {
        index: 4,
        id: header.overLayIron,
        style: this.state.iron
      }
    ];

    const headerOverlayList = overlayData.map((data) =>
      <li key={data.index}
          data-index={data.index}
          id={data.id}
          style={data.style}>
      </li>
    )

    return (
      <header>
        <Navbar
          mouseOver={this.mouseOver.bind(this)}
          mouseLeave={this.mouseLeave.bind(this)} />

        <figure id={header.headerFig}></figure>

        <ul id={header.overLayWrap}>
          {headerOverlayList}
        </ul>

      </header>
    )
  }
}

export default Header;
