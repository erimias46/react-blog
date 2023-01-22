import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div>
      Sorry Guys not found
      <Link to='/'> Home page</Link>
    </div>
  );
}

export default Notfound