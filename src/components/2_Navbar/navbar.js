import React, {Component} from "react";
import navbar from './navbar.scss';

class Navbar extends Component {

  render() {
    const dataList = [
      {
        index: 1,
        className: navbar.liItems,
        id: navbar.daredevil,
        name: "DareDevil"
      }, {
        index: 2,
        className: navbar.liItems,
        id: navbar.jessica,
        name: "Jessica Jones"
      }, {
        index: 3,
        className: navbar.liItems,
        id: navbar.luke,
        name: "Luke Cage"
      }, {
        index: 4,
        className: navbar.liItems,
        id: navbar.iron,
        name: "Iron Fist"
      }
    ]

    const navbarList = dataList.map( (data) =>
      <li key={data.index}
          data-index={data.index}
          className={data.className}
          id={data.id}
          onMouseOver={(e) => this.props.mouseOver(e)}
          onMouseLeave={(e) => this.props.mouseLeave(e)}>
        {data.name}
      </li>
    )

    return (
      <nav id={navbar.navWrap}>

        <ul id={navbar.ulContainer}>
          {navbarList}
        </ul>

      </nav>
    )
  }
}

export default Navbar;
