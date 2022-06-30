
import { useEffect, useState } from "react";
import Header from "./Header";
import Posts from "./Posts";
import Sidebar from "./SideBar";
import "./blog.css";

import BlogDataService from "../../services/blogService";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await BlogDataService.getAll();
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
      
    };
    fetchPosts();
  }, []);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}