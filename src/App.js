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
    console.log(newSong)
    let response = await axios.post('http://127.0.0.1:8000/api/music/', newSong);
    console.log(response)
    if (response.status === 201) {
      await getAllSongs();
    }
  }


  return (
    <div className='bg-dark'>
      <div className='spacing'>
        <h1 class="text-white bg-dark">Jack's Music Library</h1>
      </div>
      <div className='spacing'>
        <h3 class="text-white bg-dark">Add Song</h3>
        <AddNewSong addNewSongProperty={addNewSong}/>
      </div>
      <div className='spacing'>
        <h3 class="text-white bg-dark">Filter Music Library</h3>
        <SearchBar songs={songs} setSongs={setSongs}/>
        <button class="text-white bg-dark" onClick={getAllSongs}>Reset Filter</button>
      </div>
      <div className='spacing'>
        <MusicTable songs={songs}/>
      </div>
    </div>
  );
}

export default App;
