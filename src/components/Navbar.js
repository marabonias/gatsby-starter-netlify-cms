import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.png'
import './styles.css'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >


        <div className="container">

          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="dojo" style={{ width: '100px', height:'auto' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/products">
                ΑΡΧΙΚΗ
              </Link>
              <Link className="navbar-item" to="/products">
                ΠΡΟΓΡΑΜΜΑ
              </Link>
              <Link className="navbar-item" to="/about">
                ΑΝΑΚΟΙΝΩΣΕΙΣ
              </Link>
              <Link className="navbar-item" to="/blog">
                BLOG
              </Link>
              <Link className="navbar-item" to="/contact">
                ΕΠΙΚΟΙΝΩΝΙΑ
              </Link>
<div className="dropdown">
              <Link className="navbar-item" >
                ΥΛΗ
                <div class="dropdown-content">
                <a href="#">Dan</a>
                <a href="#">Kyu</a>
                <a href="#">Όπλα</a>
                <a href="#">Ορολογία</a>
                </div>
              </Link>

</div>


            </div>
            <div className="navbar-end has-text-centered">

            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
