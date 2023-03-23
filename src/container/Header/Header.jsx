import React from 'react';
import { SubHeading } from '../../components';
import {images} from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the yum..." />
      <h1 className="app__header-h1">Only The Yummiest of Tummies...</h1>
      <p className="p__opensans" style={{ margin: '2rem 0'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <button type="button" className="custom__button"><a href='#menu'>Explore Menu</a></button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img"/>
    </div>
  </div>
);

export default Header;
