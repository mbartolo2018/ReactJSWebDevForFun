import react, { Component } from 'react';
import { NavbarContents } from "./NavbarContent"
import './Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarContents">
      
        <div>
          <ul>
            {NavbarContents.map((item, index) => {
              return (
                <li key={index}><a className={item.classNames} href={item.url}>
                  {item.title}
                </a></li>
              )
            })}


          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
