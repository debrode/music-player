import React from "react";
import librarySong from './librarySong';

const library=({songs})=>{

 return(
    
    <div className="library">
     <h1>Library</h1>
     <div className="librarySongs">
        {songs.map( (song)=> (
          <librarySong song={song} />)
         )}
     </div>

    </div>


 );

}

export default library;