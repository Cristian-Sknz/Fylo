import * as React from 'react';
import { Component } from 'react';

interface FeatureCardProps {
  data: FeatureJson;
}

type FeatureJson = {
  title: string;
  text: string;
  image: string;
};

class FeatureCard extends Component<FeatureCardProps> {
  render() {
    return (
      <li className='feature'>
        <div className='feature-title'>
          <img src={this.props.data.image} alt={this.props.data.title} />
          <h2>{this.props.data.title}</h2>
        </div>

        <p>{this.props.data.text}</p>
      </li>
    );
  }
}

export default FeatureCard;
