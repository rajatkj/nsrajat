import Sidebar from "../sidebar/Sidebar";
import "./Navbar.scss";

const Navbar = () => {
  return (
      <div className="navbar"> 
        <Sidebar/>
        <div className="wrapper">
            <span>
                nsrajat
            </span>
            <div className="socials">
              <a href="https://instagram.com">
                <img src="/icons/instagram.png" alt="" />
              </a>
              <a href="https://instagram.com">
                <img src="/icons/github.png" alt="" />
              </a>
              <a href="https://instagram.com">
                <img src="/icons/linkedin.png" alt="" />
              </a>
              <a href="https://instagram.com">
                <img src="/icons/mail.png" alt="" />
              </a>
            </div>
          </div>
      </div>
  );
};

export default Navbar;