import React from 'react'
import { Card } from 'react-bootstrap'

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <Card
      className='movie-card'
      onClick={() => {
        onMovieClick(movie)
      }}
    >
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
      </Card.Body>
    </Card>
  )
}
