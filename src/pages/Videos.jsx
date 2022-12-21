import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import { useYoutubeApi } from "../context/YoutubeApiContext";

// let URL = "videos/search_bts.json";
export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(
    ["videos", keyword],
    () => {
      return youtube.search(keyword);

      // const youtube = new FakeYoutube();// context를 이용하도록 수정
      // const youtube = new Youtube();
      // return youtube.search(keyword);
    } //네트워크 연결 로직을 외부(Youtube.js, FakeYoutube.js)로 빼냈음(보안, 가독성 향상)
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      Videos🔥 {keyword}
      <section>
        {videos && (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4">
            {videos.map((video) => {
              // console.log(video);
              return <VideoCard key={video.id} video={video} />;
            })}
          </ul>
        )}
      </section>
    </div>
  );
}
