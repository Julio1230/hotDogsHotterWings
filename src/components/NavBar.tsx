import { Center, HStack, Image, Text } from "@chakra-ui/react";
import logo from '../assets/images/logo@3x.png';
import { Link, NavLink } from 'react-router-dom';
import "./NavBar.css";

type Link = {
  label : string;
  href: string;
}

const NavBar = () => {
  return(
    <nav>
      <Link to="/" className="title">Hotdogs & Hotter Wings</Link>
      <div className="Menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul>
        <li><NavLink to="/menu">Menu</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  )
}
export default NavBar