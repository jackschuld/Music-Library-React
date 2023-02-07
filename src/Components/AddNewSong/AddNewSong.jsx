import React, { useState } from "react";

const AddNewSong = (props) => {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [release_date, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');
    const [likes, setLikes] = useState(0);
    
    
    function handleNewSong(event) {
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            release_date: release_date,
            genre: genre,
            likes: likes
        };

        props.addNewSongProperty(newSong);
  }

  return (
    <form onSubmit={handleNewSong} className='spacing'>
        <div>
            <label class="text-white bg-dark">Title</label>
            <input class="text-white bg-dark" type='text' value={title} onChange={(event) => setTitle(event.target.value)} />            
        </div>
        <div>
            <label class="text-white bg-dark">Artist</label>
            <input class="text-white bg-dark" type='text' value={artist} onChange={(event) => setArtist(event.target.value)}/>
        </div>
        <div>
            <label class="text-white bg-dark">Album</label>
            <input class="text-white bg-dark" type='text' value={album} onChange={(event) => setAlbum(event.target.value)}/>
        </div>
        <div>
            <label class="text-white bg-dark">Release Date</label>
            <input class="text-white bg-dark" type='date' value={release_date} onChange={(event) => setReleaseDate(event.target.value)}/>
        </div>
        <div>
            <label class="text-white bg-dark">Genre</label>
            <input class="text-white bg-dark" type='text' value={genre} onChange={(event) => setGenre(event.target.value)}/>
        </div>
        <div>
            <label class="text-white bg-dark">Likes</label>
            <input class="text-white bg-dark" type='number' value={likes} onChange={(event) => setLikes(event.target.value)}/>
        </div>
        <button class="text-white bg-dark" type='submit'>Add</button>
    </form>

  )

}

export default AddNewSong;