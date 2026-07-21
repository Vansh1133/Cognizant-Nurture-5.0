import { Component } from 'react';
import Post from './Post';

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null
    };
  }

  componentDidMount() {
    this.loadPosts();
  }

  async loadPosts() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await response.json();
      this.setState({ posts: posts.slice(0, 5) });
    } catch (error) {
      this.setState({
        posts: [
          { id: 1, title: 'Unable to load posts', body: 'The app is still ready to render posts.' }
        ],
        error
      });
    }
  }

  componentDidCatch(error) {
    alert(`Error in Posts component: ${error.message}`);
  }

  render() {
    return (
      <section className="page">
        <h1>Blog Posts</h1>
        <div className="posts-grid">
          {this.state.posts.map((post) => (
            <Post key={post.id} title={post.title} body={post.body} />
          ))}
        </div>
      </section>
    );
  }
}