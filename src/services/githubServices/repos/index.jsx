import React, { useEffect, useState } from "react"
import { Card } from "@material-tailwind/react"
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group"

export default function GithubRepo({ username, repo }) {
  const [repoData, setRepoData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`https://api.github.com/repos/${username}/${repo}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok')
        }
        return res.json()
      })
      .then((data) => {
        setRepoData(data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [username, repo])

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Não Localizado</p>
  }

  function modifyRepoName(name) {
    return name.replace(/_/g, ' ')
  }

  return (
    <Card className="p-4 rounded-md shadow-lg gap-2 justify-center items-center flex flex-col">
      <span className="font-semibold flex gap-2">
        <img 
          src='https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png' 
          alt="Logo GitHub" 
          style={{ width: 30}} 
        />
        <a href={repoData.html_url}>{modifyRepoName(repoData.name)}</a>
      </span>
    </Card>
  )
}