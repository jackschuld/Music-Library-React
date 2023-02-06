import React, { useState } from 'react';

const SearchBar = ({ songs, setSongs }) => {

    const [currentCategory, setCurrentCategory] = useState()
  
    const changeFilter = (currentCategory) => {
        setCurrentCategory(currentCategory)
    }

    function filterSongs(songFilterSelection) {
        let filteredSongs = songs.filter((song) => song[currentCategory] === songFilterSelection);
        setSongs(filteredSongs)
    }

    return ( 
        <div onSubmit={filterSongs}>
            <label>Select Category</label>
            <select id='category-filter' onChange={(event) => changeFilter(event.target.value)}
            value={currentCategory}>
                <option value=''>All</option>
                <option value='title'>Title</option>
                <option value='artist'>Artist</option>
                <option value='album'>Album</option>
                <option value='release_date'>Release Date</option>
                <option value='genre'>Genre</option>
            </select>
            <select id='filter-options' onChange={(event) => filterSongs(event.target.value)}>
            {songs.map((song) => {
                return (
                    <option>{song[currentCategory]}</option>
                    );
                })}
            </select>
        </div>
     );
}
 
export default SearchBar;