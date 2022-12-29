import React from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import RelatedVideos from "../components/RelatedVideos";

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const {
    id,
    snippet: { title, channelId, channelTitle, description },
  } = video;

  return (
    <section className="flex flex-col lg:flex-row p-6 max-w-7xl m-auto">
      <article className="basis-8/12">
        <iframe
          title={title}
          id="player"
          type="text/html"
          width="100%"
          height="640"
          src={`https://www.youtube.com/embed/${id}`}></iframe>
        <div className="p-8">
          <h1 className="text-xl font-bold">{title}</h1>
          <h2>
            <ChannelInfo id={channelId} name={channelTitle} />
          </h2>
          <pre className="whitespace-pre-wrap">{description}</pre>
        </div>
      </article>
      <section className="basis-4/12">
        <RelatedVideos id={id} />
      </section>
    </section>
  );
}
