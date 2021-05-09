import axios from 'axios'
import React, { useEffect } from 'react'
import {Chip} from '@material-ui/core'

const Genres = ({
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    setPage,
    type
}) => {

    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id))
        setPage(1)
    }

   const handleRemove = (genre) => {
       setSelectedGenres(
           selectedGenres.filter((selected) => selected.id !== genre.id)
       );
       setGenres([...genres, genre])
       setPage(1)
   }


    
    const fetchGenres = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`) 
        // console.log(data)
        setGenres(data.genres)
    }
    console.log(genres)

    useEffect(() => {
        fetchGenres();
        
        return () => {
            setGenres({});
        }
    })
    
    // Return in useEffect here cancel the api key call 



    return (
        <div style={{ padding: "6px 0"}}>
            {
                    selectedGenres.map((genre) => (
                        <Chip 
                            label={genre.name}
                            key={genre.id}
                            style={{margin: "2"}}
                            size="small"
                            color="primary"
                            clickable
                            onDelete={() => handleRemove(genre)}
                        />
                    ))
                }
            {
                genres.map((genre) => (
                    <Chip 
                        label={genre.name}
                        key={genre.id}
                        style={{margin: "2"}}
                        size="small"
                        clickable
                        onClick={() => handleAdd(genre)}
                    />
                ))
            }
        </div>
    )
}

export default Genres
