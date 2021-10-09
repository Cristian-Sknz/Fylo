import * as React from 'react';
import { Component } from 'react';
import FeatureCard from './FeatureCard';

import data from '../../assets/features_texts.json';
import './Features.css';

class Features extends Component {
  render() {
    return (
      <section className='features-section'>
        <ul className='features'>
          {data.map((item, index) => {
            return <FeatureCard data={item} key={index} />;
          })}
        </ul>
      </section>
    );
  }
}

export default Features;
