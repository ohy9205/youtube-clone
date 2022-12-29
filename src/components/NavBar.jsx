import React from "react";
import { Link } from "react-router-dom";
import { IoLogoYoutube } from "react-icons/io";

const BASE_TO = "/videos/category";
export default function NavBar() {
  return (
    <section className="flex flex-col border-r border-zinc-700 ">
      <Link to="/" className="flex items-center justify-center py-8">
        <IoLogoYoutube className="text-xl md:text-3xl text-brand" />
        <h1 className="font-bold ml-2 text-xl lg:text-3xl">YouTube</h1>
      </Link>
      <nav>
        <ul className="flex flex-col justify-center item text-lg">
          <Link to={BASE_TO + "/10"}>
            <li className="border-t">Music</li>
          </Link>
          <Link to={BASE_TO + "/24"}>
            <li>Entertainment</li>
          </Link>
          <Link to={BASE_TO + "/17"}>
            <li>Sports</li>
          </Link>
          <Link to={BASE_TO + "/25"}>
            <li>News</li>
          </Link>
        </ul>
      </nav>
    </section>
  );
}
