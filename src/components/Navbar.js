import { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import { FaSun, FaMoon } from "react-icons/fa"; // Import the icons
import "./navbarstyles.css";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">ᐯᗩᑕᗩTIOᑎEEᖇ</h1>

        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url} className={item.cName}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Dummy Dark Mode Icon */}
        <button className="dark-mode-toggle">
          <FaMoon /> {/* Static icon, no functionality */}
        </button>
      </nav>
    );
  }
}

export default Navbar;
