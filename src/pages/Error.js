import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>oops! it's a dead end</h1>
        <Link to="/" className="btn btn-primary">
          Back home
        </Link>
      </div>
      <h2>error page</h2>
    </section>
  )
}

export default Error
