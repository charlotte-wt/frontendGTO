import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import AuthService from "../../services/auth.service";
import BlogDataService from "../../services/blogService";
import { Button } from "../Home/Button";
import "./blogPost.css";

export default function BlogPost() {

  const location = useLocation();
  const path = location.pathname.split("/")[2];


  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);


  const user = AuthService.getCurrentUser();

  useEffect(() => {
    const getPost = async () => {
      const res = await BlogDataService.get(path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.description);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/blogs/${post.id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) { }
  };

  const handleUpdate = async () => {
    try {

      const data = {
        title: title,
        description: desc,
        image: post.image,
        userId: post.userId,
        username: post.username
      }

      await BlogDataService.update(`update/${post.id}`, data);
      setUpdateMode(false)
    } catch (err) { }
  };

  // user id is null fetching it will get error
  // to check if person logged in is the blog poster 
  // only blog poster can edit / update their blog post

  var user_id = null;
  try {
    user_id = user.id;

  } catch (err) {

  }

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.image && (
          <img src={post.image} alt="" className="singlePostImg" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <div className="singlePostTitle">
            <h1 className="h1_title">{title}</h1>

            {post.userId === user_id && (
              
              <div className="singlePostEdit">
                <Button
                  className='btns'
                  buttonStyle='btn--pink'
                  buttonSize='btn--middle'
                  onClick={() => setUpdateMode(true)}

                >Edit</Button>

                <Button
                  className='btns'
                  buttonStyle='btn--pink'
                  buttonSize='btn--middle'
                  onClick={handleDelete}

                >Delete</Button>


              </div>
            )}
            


          </div>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:

            <b> {post.username}</b>

          </span>
          <span className="singlePostDate">
            {/* {new Date(post.createdAt).toDateString()} */}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}