import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.svg'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light px-sm-5">
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand"/>
        </Link>

        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
             <Link to="/" className="nav-link">
              Shop
             </Link>
          </li>
        </ul>

        <Link className="ml-auto" to="/cart">
              <span className="mr-2">
              <i class="fa fa-heart fa-lg" aria-hidden="true"></i>
              </span>
        </Link>

      </nav>
    )
  }
}


