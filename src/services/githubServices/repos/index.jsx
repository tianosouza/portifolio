import React, { useEffect, useState } from "react"
import { Card } from "@material-tailwind/react"

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
    <Card className="p-4 rounded-md shadow-lg gap-4 justify-center items-center flex flex-col">
      <img src="src/assets/images/github-mark.svg" alt="" />
      <h1 className="font-semibold">
        <a href={repoData.html_url}>{modifyRepoName(repoData.name)}</a>
      </h1>
    </Card>
  )
}