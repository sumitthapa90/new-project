import React, { useState } from "react";
import {
  AiOutlineBars,
  AiOutlineClose,
  AiOutlineInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdOutgoingMail } from "react-icons/md";

function Navbar() {
  const [toogle, setToogle] = useState(true);

  const handleToggle = () => {
    setToogle(!toogle);
  };

  return (
    <div className="navbar text-white flex justify-around items-center h-22  mx-auto max-w-full px-4">
      <Link to="/">
        <h1 className="w-full text-orange-600 text-3xl font-mono">
          WebTech Dezine..
        </h1>
      </Link>

      <ul className="hidden md:flex">
        <Link to="/">
          <li className="p-4 font-bold text-lg font-serif hover:text-cyan-600">Home</li>
        </Link>

        <Link to="/about">
          <li className="p-4 font-bold text-lg font-serif hover:text-cyan-600">About</li>
        </Link>
        <Link to="/contact">
          <li className="p-4 font-bold text-lg font-serif hover:text-cyan-600">Contact</li>
        </Link>
        <Link to="/services">
          <li className="p-4 font-bold text-lg font-serif hover:text-cyan-600">Services</li>
        </Link>
        <Link to="/portfoliyo">
          <li className="p-4 font-bold text-lg font-serif hover:text-cyan-600">Carriers</li>
        </Link>
      </ul>

      <div className="icons-s flex gap-3 ">
        <AiOutlineInstagram className="text-2xl cursor-pointer hover:text-cyan-600" />
        <AiFillFacebook className="text-2xl cursor-pointer hover:text-cyan-600"/>
        <MdOutgoingMail className="text-2xl cursor-pointer hover:text-cyan-600"/>
      </div>

      <div className="block md:hidden" onClick={handleToggle}>
        {!toogle ? <AiOutlineClose size={20} /> : <AiOutlineBars size={20} />}
      </div>
      <div
        className={
          !toogle
            ? "fixed left-0 top-0 w-[50%] border-r border-r-gray-600 bg-gray-900 h-full"
            : "fixed left-[-100] hidden"
        }
      >
        <h1 className="w-full text-yellow-500 text-3xl m-3">
          WebTech Dezine...
        </h1>
        <ul className=" p-4 uppercase ">
          <Link to="/">
            <li className="p-4 font-bold text-lg font-serif">Home</li>
          </Link>

          <Link to="/about">
            <li className="p-4 font-bold text-lg font-serif">About</li>
          </Link>
          <Link to="/contact">
            <li className="p-4 font-bold text-lg font-serif">Contact</li>
          </Link>
          <Link to="/services">
            <li className="p-4 font-bold text-lg font-serif">Services</li>
          </Link>
          <Link to="/carriers">
            <li className="p-4 font-bold text-lg font-serif">Carriers</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
