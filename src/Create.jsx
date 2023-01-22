import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Mario');
  const [ispending, setPending] = useState(false)
  const history=useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    setPending(true)
    const blog = { title, body, author }
    fetch("http://localhost:8000/blogs", {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body:JSON.stringify(blog)
    }).then(() => {
      setPending(false);
      history.push('/')
    });
    
   
  }
  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>
        <label htmlFor="">Blog author:</label>
        <select
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        >
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        {!ispending && <button>Add Blog</button>}
        {ispending && <button>Adding </button>}
      </form>
    </div>
  );
}

export default Create