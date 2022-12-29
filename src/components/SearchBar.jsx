import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

export default function SearchBar() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    setKeyword(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // 라우팅
    navigate(`/videos/${keyword}`);
    setKeyword("");
  };

  return (
    <header className="p-4 text-2xl border-b border-zinc-600 mb-4">
      <form className="flex justify-center " onSubmit={onSubmitHandler}>
        <input
          className="w-7/12 p-2 outline-none bg-black text-gray-500 rounded-l-md"
          type="text"
          value={keyword}
          onChange={onChangeHandler}
          placeholder="Search..."
        />
        <button className="bg-zinc-600 p-4 rounded-r-md">
          <BiSearch />
        </button>
      </form>
    </header>
  );
}
