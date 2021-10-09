import * as React from 'react';
import { Component } from 'react';
import Comment from './Comment';
import data from '../../assets/comments.json';

class Comments extends Component {
  render() {
    return (
      <section className='comments-section'>
        <ul className='comments'>
          {data.map((item, index) => {
            return <Comment data={item} key={index} />;
          })}
        </ul>
      </section>
    );
  }
}

export default Comments;
