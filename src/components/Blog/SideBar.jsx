import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">SHARE ABOUT YOUR CAREER</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/blogs/technology">
              Technology
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/blogs/accountancy">
              Accountancy
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/blogs/startup">
              Startups
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/blogs/investmentbanking">
              Investment Banking
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/blogs/engineering">
              Engineering
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/blogs/sports">
              Sports
            </Link>
          </li>
        </ul>
      </div>
  
    </div>
  );
}