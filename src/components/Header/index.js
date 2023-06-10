import {Link, withRouter} from 'react-router-dom'
import {HiOutlineSearch} from 'react-icons/hi'
import {FaBars} from 'react-icons/fa'

import './index.css'

const Header = () => (
  <>
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-large-container">
          <div className="logo-container">
            <Link to="/">
              <img
                className="website-logo"
                src="https://res.cloudinary.com/dzbfzovvx/image/upload/v1684305167/Group_7399_1_c8bipk.png"
                alt="website logo"
              />
            </Link>
            <ul className="nav-menu">
              <li className="nav-menu-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link to="/Popular" className="nav-link">
                  Popular
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="nav-menu">
              <li>
                <HiOutlineSearch className="searchIcon" />
              </li>
              <li>
                <Link to="/account">
                  <img
                    className="profile-image"
                    src="https://res.cloudinary.com/dzbfzovvx/image/upload/v1685862296/Avatar_yxwtgk.png"
                    alt="profile"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav-bar-mobile-container">
          <div>
            <Link to="/">
              <img
                className="website-logo"
                src="https://res.cloudinary.com/dzbfzovvx/image/upload/v1684305167/Group_7399_1_c8bipk.png"
                alt="website logo"
              />
            </Link>
          </div>
          <ul className="nav-menu">
            <li>
              <HiOutlineSearch className="mobile-search-icon" />
            </li>
            <li className="fa-bars">
              <FaBars />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
)
export default withRouter(Header)
