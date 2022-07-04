import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  
  return (
    <div className="post">
      {post.image && <img className="postImg" src={post.image} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <Link to={`/blogs/${post.id}`} className="title-link">
          <span className="postTitle">{post.title}</span>
        </Link>
        {/* <hr /> */}
        {/* <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span> */}
      </div>
      <p className="postDesc">{post.description}</p>
    </div>
  );
}