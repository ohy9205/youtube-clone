import React from "react";
import { foramtAgo } from "../util/date";
export default function VideoCard({ video }) {
  const {
    snippet: { thumbnails, title, channelTitle, publishedAt },
  } = video;

  return (
    <li className="flex-row ">
      <img
        className="w-full"
        src={thumbnails.maxres.url}
        alt={`${title} 썸네일`}
      />
      <h1 className="font-semibold my-2 line-clamp-2">{title}</h1>
      <h2 className="text-sm opacity-80">{channelTitle}</h2>
      <time className="text-sm opacity-80">{foramtAgo(publishedAt)}</time>
    </li>
  );
}
