import React, { Component } from 'react';
import Nav from '../src/components/common/Nav'
import PostContainer from './components/post/PostContainer';
import PostService from '../src/services/PostService';

const postService = new PostService();

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount() {
    postService.getPosts().then(posts => this.setState({ posts }));
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="container">
        <Nav/>
        <PostContainer posts={posts}/>
      </div>
    );
  }
}

export default App;
