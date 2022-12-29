import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import { useYoutubeApi } from "../context/YoutubeApiContext";

// let URL = "videos/search_bts.json";
export default function Videos() {
  const { keyword, categoryId } = useParams();
  const params = useParams();
  const { youtube } = useYoutubeApi();

  const isCategory = !!params.categoryId;

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(
    ["videos", isCategory ? `category/${categoryId}` : keyword],
    () => {
      return isCategory
        ? youtube.category(categoryId)
        : youtube.search(keyword);

      // const youtube = new FakeYoutube();// context를 이용하도록 수정
      // const youtube = new Youtube();
      // return youtube.search(keyword);
    }, //네트워크 연결 로직을 외부(Youtube.js, FakeYoutube.js)로 빼냈음(보안, 가독성 향상)
    {
      staleTime: 1000 * 60,
    }
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <section className="p-8 max-w-7xl m-auto">
      {videos && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 gap-y-10">
          {videos.map((video) => {
            return <VideoCard key={video.id} video={video} />;
          })}
        </ul>
      )}
    </section>
  );
}
