import React from 'react'

import useFetch from '../useFetch';
import BlogList from './BlogList';

const Home = () => {
    const { data: blogs, ispending,error } = useFetch(
      "http://localhost:8000/blogs"
    );
    
  return (
    <div className="home">
          <div>
              {error && <div>{error}</div>}
              {ispending?<p>Loading...</p>:<p></p>}
              {blogs && <BlogList blogs={blogs} title={"All Blogs!"}  />}
              
             
      </div>
    </div>
  );
}

export default Home