import React from "react";
import { useNavigate } from "react-router-dom";
import { foramtAgo } from "../util/date";
export default function VideoCard({ video, type }) {
  const {
    id,
    snippet: { thumbnails, title, channelTitle, publishedAt },
  } = video;
  const navigate = useNavigate();
  const isList = type === "list";

  const onClickHandler = (e) => {
    navigate(`/videos/watch/${id}`, { state: { video: video } });
  };

  return (
    <li
      className={
        isList ? "flex gap-1 m-2 cursor-pointer" : "flex-row cursor-pointer"
      }
      onClick={onClickHandler}>
      <img
        className={isList ? "w-60 mr-2" : "w-full"}
        src={thumbnails.maxres ? thumbnails.maxres.url : thumbnails.high.url}
        alt={`${title} 썸네일`}
      />
      <div>
        <h1 className="font-semibold my-2 line-clamp-2">{title}</h1>
        <h2 className="text-sm opacity-80">{channelTitle}</h2>
        <time className="text-sm opacity-80">{foramtAgo(publishedAt)}</time>
      </div>
    </li>
  );
}
