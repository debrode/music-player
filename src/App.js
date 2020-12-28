import React,{useState} from "react";
import Song from "./components/Song";
import "./styles/app.scss";
import Player from "./components/Player";
import data from "./util";
import Library from "./components/library";
function App() {
  const [songs, setSongs] = useState(data()); 
  const [currentSong,setcurrentSong]=useState(songs[0]);
  const[isPlaying,setisPlaying]=useState(false);
  return (
    <div className="App">
     
      <Song currentSong={currentSong}/>
      <Player setisPlaying={setisPlaying} isPlaying={isPlaying} currentSong={currentSong}/>
      <Library songs={songs}/>
    </div>
  );
}

export default App;
