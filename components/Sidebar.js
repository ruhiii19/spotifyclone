import React from "react";
import "./Sidebar.css";

import { ReactComponent as Homeicon } from "../assets/Homeicon.svg";
import { ReactComponent as Searchicon } from "../assets/Searchicon.svg";
import { ReactComponent as Libraryicon } from "../assets/Libraryicon.svg";

const myPlaylist = [
  {
    id: 1,
    name: "Playlist 1",
  },
  {
    id: 2,
    name: "Playlist 2",
  },
  {
    id: 3,
    name: "Playlist 3",
  },
  {
    id: 4,
    name: "Playlist 4",
  },
  {
    id: 5,
    name: "Playlist 5",
  },
  {
    id: 6,
    name: "Playlist 6",
  },
  {
    id: 7,
    name: "Playlist 7",
  },
  {
    id: 8,
    name: "Playlist 8",
  },
  {
    id: 9,
    name: "Playlist 9",
  },
  {
    id: 10,
    name: "My Favourites",
  },
];

export default function Sidebar() {
  return (
    <div className="side-bar-container">
      <div className="side-bar-items">
        <Homeicon width={"18px"} strokeWidth={"2px"} /> Home
      </div>
      <div className="side-bar-items">
        <Searchicon width={"18px"} strokeWidth={"2px"} />
        Search
      </div>
      <div className="side-bar-items">
        <Libraryicon width={"18px"} strokeWidth={"2px"} /> Your Library
      </div>

      <div className="side-options">
        {myPlaylist.map((item) => {
          return (
            <div className="side-bar-items" key={item.id}>
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
