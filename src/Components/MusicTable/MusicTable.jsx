import React from 'react';


const MusicTable = ({ songs }) => {
    return ( 
        <table class="table table-hover table-dark">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Song</th>
                    <th scope="col">Artist</th>
                    <th scope="col">Album</th>
                    <th scope="col">Release Date</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Likes</th>            
                </tr>
            </thead>
            <tbody>
            {songs.map((song, index) => {
                return (
                    <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{song.title}</td>
                        <td>{song.artist}</td>
                        <td>{song.album}</td>
                        <td>{song.release_date}</td>
                        <td>{song.genre}</td>
                        <td>{song.likes}</td>
                    </tr>
                    );
            })}
            </tbody>
        </table>
    );
}
 
export default MusicTable;