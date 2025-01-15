import { Link } from "react-router-dom"
import CardDefault from "../../components/card"
import ContainerMain from "../../components/containerMain"
import GithubRepo from "../../services/githubServices/repos"

export default function Projects() {

  return (
    <ContainerMain>
      <CardDefault
        img='https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png'
        alt='Github logo'
        description='Api que retorna dados do Enem de 2011 a 2023'
        hrefName={<Link to='/projects/api-enem-docs'>Api Enem Docs</Link>}
        repo={<GithubRepo username={"tianosouza"} repo={"api_enem"} />}
      />
    </ContainerMain>
  )
}