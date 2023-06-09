import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

export const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const loginHandler = (e) => {
    e.preventDefault()

    const data = {
      Username: username,
      Password: password,
    }

    // make request to api
    fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => {
      return response.json().then((data) => {
        if (response.ok) {
          console.log(data)

          // store token in local storage
          localStorage.setItem('token', data.token)
          localStorage.setItem('user', JSON.stringify(data.user))
          onLoggedIn(data.user, data.token)
        } else {
          console.log(data)
          if (data.errors) {
            alert(data.errors[0].msg)
          } else alert(data.message)
        }
      })
    })

    console.log(data)
  }
  return (
    <Form>
      <h1>Login</h1>
      <Form.Group controlId='formUsername'>
        <Form.Label>Username:</Form.Label>
        <Form.Control
          type='text'
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId='formPassword'>
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant='primary' type='submit' onClick={loginHandler}>
        Submit
      </Button>
    </Form>
  )
}
