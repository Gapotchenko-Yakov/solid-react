import React from "react";

type Video = {
  title: string;
  duration: number;
  coverUrl: string;
};

type LiveStream = {
  name: string;
  previewUrl: string;
};

type ThumbnailProps = {
  coverUrl: string;
};

const Thumbnail = ({ coverUrl }: ThumbnailProps) => {
  return <img src={coverUrl} alt="Thumbnail" />;
};

type VideoListProps = {
  items: Array<Video | LiveStream>;
};

const VideoList = ({ items }: VideoListProps) => {
  return (
    <ul>
      {items.map((item) => {
        if ("coverUrl" in item) {
          return <Thumbnail coverUrl={item.coverUrl} />;
        } else {
          return <Thumbnail coverUrl={item.previewUrl} />;
        }
      })}
    </ul>
  );
};

export default VideoList;
