const urlBase = 'http://localhost:3000'

export const fetchPosts = async () => {
  const response = await fetch(`${urlBase}/posts`)
  if (!response.ok) {
    throw new Error(`Status code: ${response.status}`)
  }
  return response.json()
}

export const fetchPost = async (id) => {
  const response = await fetch(`${urlBase}/posts/${id}`)
  if (!response.ok) {
    throw new Error(`Status code: ${response.status}`)
  }
  return response.json()
}

export const createPost = async (post) => {
  const response = await fetch(`${urlBase}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  })
  if (!response.ok) {
    throw new Error(`Status code: ${response.status}`)
  }
  return response.json()
}

export const updatePost = async (id, post) => {
  const response = await fetch(`${urlBase}/posts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  })
  if (!response.ok) {
    throw new Error(`Status code: ${response.status}`)
  }
  return response.json()
}

export const deletePost = async (id) => {
  const response = await fetch(`${urlBase}/posts/${id}`, {
    method: 'DELETE',
  })
  if (!response.ok) {
    throw new Error(`Status code: ${response.status}`)
  }
  return response.json()
}