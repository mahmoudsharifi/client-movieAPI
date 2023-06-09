import React from 'react'
import PropTypes from 'prop-types'
import { Card, Button } from 'react-bootstrap'

export const MovieView = ({ movie, onBackClick }) => {
  return (
    <Card className='movie-view'>
      <Card.Img src={movie.ImageURL} className='movie-image' />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>
          <strong>Description: </strong>
          {movie.Description}
        </Card.Text>
        <Card.Text>
          <strong>Genre: </strong>
          {movie.Genre.Name}
        </Card.Text>
        <Card.Text>
          <strong>Director: </strong>
          {movie.Director.Name}
        </Card.Text>
        <Card.Text>
          <strong>Year: </strong>
          {movie.Year}
        </Card.Text>
        <Button onClick={onBackClick}>Back</Button>
      </Card.Body>
    </Card>
  )
}

MovieView.propTypes = {
  movie: PropTypes.shape({
    ImageURL: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
    }).isRequired,
    Description: PropTypes.string.isRequired,
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
    }).isRequired,
    Year: PropTypes.number.isRequired,
  }).isRequired,
  onBackClick: PropTypes.func.isRequired,
}
