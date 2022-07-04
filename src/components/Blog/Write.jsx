import { useState } from "react";
import "./write.css";
import axios from "axios";
import AuthService from "../../services/auth.service";
import BlogDataService from "../../services/blogService";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [file, setFile] = useState(null);
  const user = AuthService.getCurrentUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title: title,
      description: desc,
      image: image,
      userId: user.id,
      username: user.username
    }

    
    // if (file) {
    //   const data = new FormData();
    //   const filename = Date.now() + file.name;
    //   data.append("name", filename);
    //   data.append("file", file);
    //   newPost.photo = filename;
    //   try {
    //     await axios.post("/upload", data);
    //   } catch (err) { }
    // }
    try {
      const res = await BlogDataService.create(newPost);
      window.location.replace("/blogs/" + res.data.id);
    } catch (err) { }
  };

  var user_id = null;
    try {
      user_id = user.id;

    } catch (err) {

    }
  return (


    <div className="container-fluid">
      <div className="write">

        { user_id != null && (
          <form className="writeForm" onSubmit={handleSubmit}>
            <div className="writeFormGroup">
              {/* <label htmlFor="fileInput">
              <i className="writeIcon fas fa-plus"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            /> */}
              <input
                type="text"
                placeholder="Title"
                className="writeInput"
                autoFocus={true}
                onChange={e => setTitle(e.target.value)}
              />
            </div>
            <div className="writeFormGroup">
              <textarea
                placeholder="Image Link..."
                type="text"
                className="writeInput writeLink"
                onChange={e => setImage(e.target.value)}
              ></textarea>

            </div>

            <div className="writeFormGroup">
              <textarea
                placeholder="Tell your story..."
                type="text"
                className="writeInput writeText"
                onChange={e => setDesc(e.target.value)}
              ></textarea>

            </div>

            <button className="writeSubmit" type="submit">
              Publish
            </button>
          </form>
        )}
      </div>
    </div>

  );
}