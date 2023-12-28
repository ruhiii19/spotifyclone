import React from "react";
import "./PlayerPlaylist.css";

const playlist = [
  {
    id: 1,
    title: "Sugar",
    artist: "Maroon 5",
    album: "V",
    duration: "3:45",
  },
  {
    id: 2,
    title: "Khoj (Passing By)",
    artist: "When Chai Met Toast",
    album: "Believe",
    duration: "3:31",
  },
  {
    id: 3,
    title: "Joy of Little Things",
    artist: "When Chai Met Toast",
    album: "Joy of Little Things",
    duration: "3:59",
  },
  {
    id: 4,
    title: "Heather",
    artist: "Conan Gray",
    album: "Kid Krow",
    duration: "3:18",
  },
  {
    id: 5,
    title: "Heather",
    artist: "Conan Gray",
    album: "Kid Krow",
    duration: "3:18",
  },
  {
    id: 6,
    title: "Heather",
    artist: "Conan Gray",
    album: "Kid Krow",
    duration: "3:18",
  },
];

export default function PlayerPlaylist() {
  return (
    <div className="player-playlist-container">
      <div className="player-playlist-header">
        <div className="playlist-image-card"></div>
        <div className="playlist-body">
          <p>PLAYLIST</p>
          <h1>Best of Mine</h1>
        </div>
      </div>

      <div className="playlist-list">
        <div className="playlist-list-id">#</div>
        <div className="playlist-list-title">Title</div>
        <div className="playlist-list-album">Album</div>
        <div className="playlist-list-duration">Duration</div>
      </div>

      <div className="playlist-list-container">
        {playlist.map((item) => {
          return (
            <div className="playlist-list">
              <div className="playlist-list-id">{item.id}</div>
              <div className="playlist-list-title">{item.title}</div>
              <div className="playlist-list-album">{item.album}</div>
              <div className="playlist-list-duration">{item.duration}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
