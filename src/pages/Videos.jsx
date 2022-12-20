import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import Youtube, { search } from "../api/youtube";
import FakeYoutube from "../api/fakeYoutube";
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
        {videos &&
          videos.map((video) => {
            return <VideoCard key={video.id} video={video} />;
          })}
      </section>
    </div>
  );
}
