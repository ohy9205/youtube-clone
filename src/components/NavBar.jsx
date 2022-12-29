import React from "react";
import { Link } from "react-router-dom";
import { IoLogoYoutube } from "react-icons/io";

export default function NavBar() {
  return (
    <section className="flex flex-col gap-5 w-7/12">
      <Link to="/" className="flex items-center">
        <IoLogoYoutube className="text-4xl text-brand" />
        <h1 className="font-bold ml-2 text-3xl">YouTube</h1>
      </Link>
      <nav>
        <ul className="flex flex-col justify-center text-xl">
          <Link to="/videos/category/10">
            <li>Music</li>
          </Link>
          <Link to="/videos/category/24">
            <li>Entertainment</li>
          </Link>
          <Link to="/videos/category/26">
            <li>Howto & Style</li>
          </Link>
          <Link to="/videos/category/25">
            <li>News & Politics</li>
          </Link>
        </ul>
      </nav>
    </section>
  );
}
