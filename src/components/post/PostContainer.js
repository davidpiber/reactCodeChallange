import React, { Component } from 'react';
import Post from './Post';

class PostContainer extends Component {
  render() {
    const { posts } = this.props;
    const postsElements = posts.map((post, index) => <Post key={index} post= {post}/>)
    return (
      <div className="card-columns">
        {postsElements}
      </div>
    );
  }
}

export default PostContainer;
