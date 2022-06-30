import "./single.css";
import Sidebar from "./SideBar";
import BlogPost from "./BlogPost";

export default function Single() {
  return (
    <div className="single">
      <BlogPost/>
      <Sidebar />
    </div>
  );
}