import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useDarkMode } from "../context/DarkModeContext";

export default function SearchBar() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    setKeyword(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    navigate(`/videos/${keyword}`);
    setKeyword("");
  };

  return (
    <header className="p-4 border-b border-zinc-400 dark:border-zinc-700 flex justify-between">
      <button onClick={toggleDarkMode} className="text-3xl">
        {darkMode ? <BsFillMoonFill /> : <BsFillSunFill />}
      </button>
      <form
        className="flex justify-center flex-grow"
        onSubmit={onSubmitHandler}>
        <input
          className="w-7/12 p-2 bg-zinc-200 outline-none dark:border-none dark:bg-black dark:text-gray-300 rounded-l-md"
          type="text"
          value={keyword}
          onChange={onChangeHandler}
          placeholder="Search..."
        />
        <button className="  bg-zinc-400 dark:bg-zinc-600 dark:border-none p-4 rounded-r-md">
          <BiSearch />
        </button>
      </form>
    </header>
  );
}
