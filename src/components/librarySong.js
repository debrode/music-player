import React from "react";

const librarySong=({song})=>{
    return(
    <div className="library-song">
     <img src={song.cover} alt="picture"/>
      <h3>{song.name}</h3>
      <h4>{song.artist}</h4>
      </div>
    );
}

export default librarySong;