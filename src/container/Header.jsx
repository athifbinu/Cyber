import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "../assets/image/logo.png";
import profile from "../assets/image/profile.png";
import "../styles/Header.css";
const Header = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Mentorship Program", link: "/" },
    { name: "Resource Allocation", link: "/" },
    { name: "Enterprise Services offered", link: "/" },
  ];

  const [open, setOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const handleProfileClick = () => {
    setMenuVisible(!menuVisible);
  };

  const handleClickOutside = (event) => {
    if (!event.target.matches("#profile-logo")) {
      setMenuVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full bg-customBackground relative z-50">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
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
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in bg-customBackground mrt  ${
            open ? "top-20" : "top-[-490px]"
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
          <li className="md:ml-8 text-xl font-bold md:my-0 my-7 relative">
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
                    className={`menu absolute right-0 mt-2 shadow-lg rounded-md py-2 w-48 ${
                      menuVisible ? "block" : "hidden"
                    }`}
                    id="menu"
                  >
                    <ul>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <a href="#">Student verification</a>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <a href="#">Login</a>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <a href="#">Signup</a>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <a href="#">Signout</a>
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
