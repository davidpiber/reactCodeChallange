import 'isomorphic-fetch';
import Post from '../state/Post'
const POSTS_URL = 'https://www.reddit.com/top/.json?count=50';

const unpack = (data) => {
    const { 
        title,
        author,
        created,
        num_comments,
        selfText,
        preview,
        thumbnail,
        id,
        url } = data.data;
        return new Post({
            title,
            author,
            created,
            num_comments,
            selfText,
            preview,
            thumbnail,
            id,
            url
        });
}

export default class PostService {

  getPosts() {
    return fetch(POSTS_URL)
        .then(response => response.json())
        .then(data => data.data.children.map(unpack));
  }
}
