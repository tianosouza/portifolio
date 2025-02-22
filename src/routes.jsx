import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import ApiEnemDocs from './pages/Projects/apiEnemDocs'
import Blog from './pages/blog'
import NewPost from './pages/blog/newPost'

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects/api-enem-docs" element={<ApiEnemDocs />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/new-post" element={<NewPost />} />
    </Routes>
  )
}