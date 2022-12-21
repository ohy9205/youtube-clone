import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import VideoCard from "./VideoCard";

export default function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi();

  const { isLoading, data: videos } = useQuery(
    ["related", id],
    () => {
      return youtube.related(id);
    },
    {
      staleTime: 1000 * 60 * 5,
    }
  );

  if (isLoading) return <p>Loading...</p>;

  console.log(videos);
  return (
    <aside>
      <h1>related</h1>
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} type="list" />
          ))}
        </ul>
      )}
    </aside>
  );
}
