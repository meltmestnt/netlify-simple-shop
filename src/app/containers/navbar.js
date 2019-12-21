import React from "react";
import { Link, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHamburger } from "@fortawesome/free-solid-svg-icons";
import imageShop from "./../images/shop.svg";
import CartLink from "./../components/CartLink";

const LinkWrapper = ({ applyWhenExact, children, to, classes }) => {
  return (
    <Route exact={applyWhenExact} path={to}>
      {({ match }) => {
        return (
          <div>
            <Link
              className={`${classes ? classes : ""} ${match ? "active" : ""}`}
              to={to}
            >
              {children}
            </Link>
          </div>
        );
      }}
    </Route>
  );
};
function NavbarComponent(props) {
  let [state, setState] = React.useState({
    isOpen: true
  });
  let { CustomSearch } = props;
  return (
    <nav className="nav">
      <div className="nav-brand">
        <img src={imageShop} alt="" className="nav-brand-img" />
        <div
          onClick={e => setState({ isOpen: !state.isOpen })}
          className={`nav-toggle`}
        >
          <span></span>
          <span></span>
          <span></span>
          <div className="burger">
            <FontAwesomeIcon icon={faHamburger}></FontAwesomeIcon>
          </div>
        </div>
      </div>
      <ul className={`nav-ul ${state.isOpen && "nav-ul-active"}`}>
        <li className="nav-item" id="all">
          <LinkWrapper to="/" applyWhenExact={true} classes={"nav-link"}>
            All
          </LinkWrapper>
        </li>
        <li className="nav-item">
          <LinkWrapper to="/store/mens" classes={"nav-link"}>
            Men's
          </LinkWrapper>
        </li>
        <li className="nav-item">
          <LinkWrapper to="/store/womens" classes={"nav-link"}>
            Women's
          </LinkWrapper>
        </li>
        <li className="nav-item">
          <LinkWrapper to="/store/sale" classes={"nav-link"}>
            Sale
          </LinkWrapper>
        </li>
        <li className="nav-item">{CustomSearch()}</li>
        <li className="nav-item">
          <CartLink>
            <Link
              to="/cart"
              style={{ fontSize: "1.8rem", color: `rgba(99, 110, 114,1.0)` }}
              className="nav-link"
            >
              <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
            </Link>
          </CartLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarComponent;
