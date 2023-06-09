import { useState, useEffect } from 'react'
import { MovieCard } from '../MovieCard/MovieCard'
import { MovieView } from '../MovieView/MovieView'
import { LoginView } from '../LoginView/LoginView'
import SignupView from '../SignupView/SignupView'

export const MainView = () => {
  // movies data array
  const storedUser = JSON.parse(localStorage.getItem('user'))
  const storedToken = localStorage.getItem('token')
  const [movies, setMovies] = useState([])
  const [user, setUser] = useState(storedUser)
  const [token, setToken] = useState(storedToken)

  // login function
  const handleLogin = (loggedInUser, loggedInToken) => {
    // Update the user and token states when the user logs in
    setUser(loggedInUser)
    setToken(loggedInToken)
  }

  const handleLogout = () => {
    // Update the user and token states when the user logs out
    setUser(null)
    setToken(null)
    localStorage.clear()
  }

  // API Call
  // API Call
  useEffect(() => {
    if (!token) return
    console.log(token)
    fetch('http://localhost:8080/movies', {
      headers: { Authorization: `Bearer ${token}` },
    }).then((response) =>
      response
        .json()
        .then((data) => {
          console.log(data)
          const movies = data.map((m) => ({
            id: m.Title,
            Title: m.Title,
            Description: m.Description,
            Genre: m.Genre.Name,
            Director: m.Director.Name,
            ImageURL: m.ImageURL,
            Year: m.Year,
          }))

          setMovies(movies)
        })
        .catch((err) => console.log(err))
    )
  }, [])

  const [selectedMovie, setSelectedMovie] = useState(null)

  if (!user)
    return (
      <>
        <LoginView onLoggedIn={handleLogin} />
        or
        <SignupView />
      </>
    )

  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    )
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie)
          }}
        />
      ))}

      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
