import { Link } from "react-router-dom"
import CardDefault from "../../components/card"
import ContainerMain from "../../components/containerMain"

export default function Projects() {

  return (
    <ContainerMain>
      <CardDefault 
        title='Api Enem' 
        img='src/assets/images/github-mark.svg'
        alt='Github logo'
        description='Api que retorna dados do Enem de 2019 a 2023'
        href='https://api-enem.fly.dev/api-docs'
        hrefName={<Link to='/projects/api-enem-docs'>Api Enem Docs</Link>}
      />
    </ContainerMain>
  )
}