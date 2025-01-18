import React, { useState, useEffect } from 'react'
import { fetchPosts } from '../../services/apiBlog'
import ContainerMain from '../../components/containerMain'
import BlogCard from '../../components/card/BlogCard'
import { Link } from 'react-router-dom'

export default function Blog() {
  const [posts, setPosts] = useState([])

  const handleFetchPosts = async () => {
    try {
      const data = await fetchPosts()
      setPosts(data || [])
    } catch (err) {
      console.error('Error fetching posts:', err)
    }
  }

  useEffect(() => {
    handleFetchPosts()
  }, [])

  return (
    <ContainerMain>
      <div className='container justify-center items-center px-4 py-8 w-full'>
      <Link to='/blog/new-post' className='btn'>New post</Link>
        <div className='flex flex-col justify-center w-full gap-2'>
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              date={new Date(post.created_at).toLocaleString('pt-BR',{
                month: 'short',
                day: '2-digit',
                year: 'numeric',
              })}
              title={post.title}
              content={post.content}
            />
          ))}
        </div>
      </div>
    </ContainerMain>
  )
}