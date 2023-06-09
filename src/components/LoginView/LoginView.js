import React, { useState } from 'react'
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
    <form>
      <h1>Signup</h1>
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
      <button type='submit' onClick={loginHandler}>
        Submit
      </button>
    </form>
  )
}
