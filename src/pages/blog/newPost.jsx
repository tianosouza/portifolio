// new post

import React, { useState } from 'react'
import ContainerMain from '../../components/containerMain'
import { createPost } from '../../services/apiBlog'
import { useNavigate } from 'react-router-dom'

export default function NewPost() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const navigate = useNavigate()

  const handleCreatePost = async () => {
    try {
      await createPost({ title, content })
      navigate('/blog')
    } catch (err) {
      console.error('Error creating post:', err)
    }
  }

  return (
    <ContainerMain>
      <div className='container justify-center items-center px-4 py-8 w-full'>
        <div className='flex flex-col justify-center w-full gap-2'>
          <input
            type='text'
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='placeholder-gray-500 input text-black'
          />
          <textarea
            placeholder='Content'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className='text-black input'
          />
          <button onClick={handleCreatePost} className='btn'>
            Create post
          </button>
        </div>
      </div>
    </ContainerMain>
  )
}