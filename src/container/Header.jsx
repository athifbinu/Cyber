import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "../assets/image/logo.png";
import "../styles/Header.css";
import profile from "../assets/image/profile.png";
const Header = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Mentorship Program", link: "/" },
    { name: "Resource Allocation", link: "/" },
    { name: "Enterprise Services offered", link: "/" },
  ];

  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [menuVisible, setMenuVisible] = useState(false);

  const handleProfileClick = () => {
    setMenuVisible(!menuVisible);
  };

  const handleClickOutside = (event) => {
    if (!event.target.matches("#profile-logo")) {
      setMenuVisible(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`w-full fixed top-0 left-0 z-10 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="md:flex  items-center justify-between  py-4 md:px-10 px-7 ">
        <div className="font-bold cursor-pointer flex">
          <Link to="/" className="">
            <img src={logo} alt="Logo" className="h-10" />
          </Link>
        </div>

        <div
          onClick={toggleMenu}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <IoMdClose /> : <IoMenu />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-xl font-bold md:my-0 my-7"
            >
              <Link
                to={link.link}
                className="text-white text-lg hover:text-yellow-500 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="md:ml-8 text-xl font-bold md:my-0 my-7">
            <div className="profile-section">
              <div className="">
                <div className="">
                  <div className="profile-logo d-flex align-items-center gap-3">
                    <img
                      src={profile}
                      alt="Profile Logo"
                      id="profile-logo"
                      onClick={handleProfileClick}
                    />
                  </div>

                  <div
                    className={`menu ${menuVisible ? "show" : ""}`}
                    id="menu"
                  >
                    <ul>
                      <li>
                        <a href="#">
                          <i className=""></i>Student verification{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className=""></i>Login
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className=""></i>Signup
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className=""></i>Signout
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
