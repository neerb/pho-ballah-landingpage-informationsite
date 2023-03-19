import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='app__bg flex__center section__padding'>
    <div className='app__wrapper_info'>
      <SubHeading title="Contact"/>
      <h1 className='headtext__cormorant'>Find Us</h1>
      <p className='p__opensans' style={{ color: '#AAA', marginTop: '2rem'}}>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
      <p className="p__cormorant" style={{color: '#DCCA87', marginTop: '2rem'}}>Dining Hours</p>
      <p className='p__opensans'>Mon - Fri 10:00am - 12:00am</p>
      <p className='p__opensans'>Sat - Sun 10:00am - 02:00am</p>
      <button type="button" className='custom__button' style={{marginTop: '2rem'}}>Visit Us</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.findus} alt='findus'/>
    </div>
  </div>
);

export default FindUs;
