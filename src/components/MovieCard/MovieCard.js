import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { Container, Row, Col } from 'react-bootstrap'
export const MovieCard = ({ movie, handleAddToFavorites }) => {
  const navigate = useNavigate()

  return (
    <Card className='movie-card'>
      <Card.Body>
        <Row>
          <Col sm={24} md={8} lg={8}>
            <Card.Title>{movie.Title}</Card.Title>
          </Col>
          <Col sm={24} md={8} lg={8}>
            <Button
              variant='secondary'
              onClick={() => {
                handleAddToFavorites(movie.id)
              }}
              className='mt-2 mr-4'
            >
              Add to Favorites
            </Button>
          </Col>
          <Col sm={24} md={8} lg={8}>
            <Button
              variant='secondary'
              onClick={() => {
                navigate(`/movie/${movie.id}`)
              }}
              className='mt-2 ml-4'
            >
              View Details
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}
