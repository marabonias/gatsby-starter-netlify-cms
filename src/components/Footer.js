import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


import logo from '../img/logo.png'
import facebook from '../img/social/fb.png'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import tele from '../img/social/tele.png'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="dojo"
            style={{ width: '14em', height: '10em' }}
          />
        </div>

        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list" style={{width:'150px'}}>
                    <li>
                      <Link to="/" className="navbar-item">
                        ΑΡΧΙΚΗ
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        ΠΡΟΓΡΑΜΜΑ
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        BLOG
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact/examples">
                        ΕΠΙΚΟΙΝΩΝΙΑ
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact/examples">
                        ΥΛΗ
                      </Link>
                    </li>

                  </ul>
                </section>
              </div>
              <div className="column is-4 social" style={{textAlign:'left'}} >
              <li style={{display:'block'}}>
                <a title="Facebook" href="https://www.facebook.com/EvolutionDojoAthens/">
                  <img
                    src={facebook}
                    alt="facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                </li>

<br/>
                <li style={{display:'inline-block'}}>
                <a title="tele">
                  <img
                    src={tele}
                    alt="tele"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                  <p style={{display:'inline-block'}}>+30 693 70 17 873</p>
                </li>
                <br/><br/>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
