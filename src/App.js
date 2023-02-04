import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MusicTable from './Components/MusicTable.jsx/MusicTable';

function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs() {
    try{
      let response = await axios.get('http://127.0.0.1:8000/api/music/');
      setSongs(response.data);
    } catch (exception) {
      console.log('Error in getAllSongs API call!');
    }
  }

  return (
    <div>
      <MusicTable parentSongs={songs}/>
      <button onClick={getAllSongs}>See all songs</button>
    </div>
  );
}

export default App;
