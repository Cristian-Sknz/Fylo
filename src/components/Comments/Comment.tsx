import * as React from 'react';
import { Component } from 'react';
import './Comments.css';

interface CommentProps {
  data: CommentJson;
}

type CommentJson = {
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  comment: string;
};

class Comment extends Component<CommentProps> {
  render() {
    return (
      <li className='comment'>
        <p className='comment-text'>{this.props.data.comment}</p>
        <div className='comment-author'>
          <img
            src={this.props.data.author.avatar}
            alt={this.props.data.author.name}
          />
          <div className='author-info'>
            <h3>{this.props.data.author.name}</h3>
            <p>{this.props.data.author.role}</p>
          </div>
        </div>
      </li>
    );
  }
}

export default Comment;
