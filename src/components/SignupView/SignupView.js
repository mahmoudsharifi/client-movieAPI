import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
const SignupView = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')

  const signupHandler = (e) => {
    e.preventDefault()

    const data = {
      Username: username,
      Password: password,
      Email: email,
      Age: age,
    }

    // make request to api
    fetch('http://localhost:8080/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => {
      response.json().then((data) => {
        if (response.ok) {
          console.log(data)
          alert('You have successfully registered. Please login.')
        } else {
          console.log(data)
          if (data.errors) {
            alert(data.errors[0].msg)
          } else alert(data.message)
        }
      })
    })
  }

  return (
    <div>
      <h1>Signup</h1>
      <Form>
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

        <Form.Group controlId='formEmail'>
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId='formAge'>
          <Form.Label>Age:</Form.Label>
          <Form.Control
            type='number'
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Group>

        <Button variant='primary' type='submit' onClick={signupHandler}>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default SignupView
