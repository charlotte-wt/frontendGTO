
import { useEffect, useState } from "react";
import Header from "./Header";
import Posts from "./Posts";
import Sidebar from "./SideBar";
import "./blog.css";
import axios from "axios";
import { useLocation } from "react-router";
import BlogDataService from "../../services/blogService";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await BlogDataService.getAll();
        setPosts(res.data);
      } catch (err) {
        
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