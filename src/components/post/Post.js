import React from 'react';

const Post = (props) => {
    const { post } = props;
    return (
        <div className="card">
        <strong>{post.getAuthor()}</strong>
        <br/>
        <span>{post.printCreatedDate()}</span>
        <br/>
            <img className="card-img-top" src={post.getTumbNail()} alt=''/>
            <div className="card-body">
                <h5 className="card-title">{post.getTitle()}</h5>
                <p className="card-text">{post.getText()}</p>
                <a href={post.getUrl()} className="btn btn-primary">Read more</a>
                <hr/>
                <span className='badge badge-secondary'>{post.getPostCommentsCount()} Comments</span>
            </div>
        </div>
     );
}
 
 export default Post;