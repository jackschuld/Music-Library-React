import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './Components/SearchBar/SearchBar';
import MusicTable from './Components/MusicTable/MusicTable';
import AddNewSong from './Components/AddNewSong/AddNewSong'
import './App.css';

function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs() {
    let response = await axios.get('http://127.0.0.1:8000/api/music/');
    setSongs(response.data);
  }

  async function addNewSong(newSong) {
    let response = await axios.post('http://127.0.0.1:8000/api/music', newSong);
    console.log(response)
    if (response.status === 201) {
      await getAllSongs();
    }
  }


  return (
    <div>
      <SearchBar songs={songs} setSongs={setSongs}/>
      <button onClick={getAllSongs}>Reset Filter</button>
      <AddNewSong addNewSongProperty={addNewSong}/>
      <MusicTable songs={songs}/>
    </div>
  );
}

export default App;
