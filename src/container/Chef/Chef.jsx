import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding" id="chef">
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef"/>
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What we believe in</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote"/>
          <p className="p__opensans">
            A yummy cannot be in the tummy unless there is a tummy for the yummy.  A yummy tummy is created when a yum meats the tum.
          </p>
        </div>
        <p className="p__opensans">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Chef Yummy Tummy</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="signature"/>
      </div>
    </div>
  </div>
);

export default Chef;
