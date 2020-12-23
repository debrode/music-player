import {v4 as uuidv4} from "uuid";

function chillHop(){
    return[

      {
          name: "Carefree",
          artist: "dryhope, Gustav Gustav",
          cover: "https://chillhop.com/wp-content/uploads/2020/07/2a048a5780723e66fff64c3a60814ea64761284f-300x300.jpg",
          id: uuidv4(),
          active: false,
          color: ['#431F3B','#F3C0C5'],
          audio: 'https://mp3.chillhop.com/serve.php/?mp3=9311'

      },
      {
          name: "Murmuration",
          artist: "Blue Wednesday, Shopan",
          cover: "https://chillhop.com/wp-content/uploads/2020/07/bb0db71fd74f15627e9912ad2278c13cee72ac2d-300x300.jpg",
          id: uuidv4(),
          active: false,
          color: ['#078294','#F1F1F0'],
          audio: 'https://mp3.chillhop.com/serve.php/?mp3=7814'
      },
      {
          name: "ny90",
          artist: "Ezzy",
          cover: "https://chillhop.com/wp-content/uploads/2020/07/2a048a5780723e66fff64c3a60814ea64761284f-300x300.jpg",
          id:uuidv4(),
          active: false,
          color:['#431F3B','#F3C0C5'],
          audio: 'https://mp3.chillhop.com/serve.php/?mp3=9331'
      },
      {
          name: "Far From Home",
          artist: "Toonorth",
          cover: "https://chillhop.com/wp-content/uploads/2020/07/ad7fc4dda66ba986466fd2b1c416b0b12411ee28-300x300.jpg",
          id: uuidv4(),
          active: false,
          color: ['#62978F','#A9D0A2'],
          audio: 'https://mp3.chillhop.com/serve.php/?mp3=8127'

      }  

    ];
}

export default chillHop;