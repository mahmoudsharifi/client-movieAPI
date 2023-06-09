import React, { useState } from 'react'

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
      <form>
        <label>
          Username:
          <input
            type='text'
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>

        <label>
          Password:
          <input
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <label>
          Email:
          <input
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Age:
          <input type='number' onChange={(e) => setAge(e.target.value)} />
        </label>

        <button type='submit' onClick={signupHandler}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default SignupView
