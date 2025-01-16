import ContainerMain from "../../../components/containerMain"
import AccordionComponent from "../../../components/accordion"
import HeaderApi from "../../../components/accordion/apiEnem/headerApi"
import BodyApi from "../../../components/accordion/apiEnem/bodyApi";
import Exams from "../../../services/apiEnem/exams";
import Exam from "../../../services/apiEnem/exam";
import Questions from "../../../services/apiEnem/questions";

export default function ApiEnemDocs() {
  const accordionItems = [
    {
      header: (
        <HeaderApi methode="GET" path="/v1/exams" description="Retorna uma lista de exams" />
      ),
      body: (
        <BodyApi descripiton="Retorna uma lista de exams">
          <Exams />
        </BodyApi>        
      )
    },
    {
      header: (
        <HeaderApi methode="GET" path="/v1/exams/{year}" description="Retorna um exam para o ano especifico" />
      ),
      body: (
        <BodyApi descripiton="Retorna um exam para o ano especifico">
          <Exam />
        </BodyApi>
      )
    },
    {
      header: (
        <HeaderApi methode="GET" path="/v1/exams/questions" description="Retorna uma lista de questões" />
      ),
      body: (
        <BodyApi descripiton="Retorna uma lista de questões">
          <Questions />
        </BodyApi>
      )
    }
  ]

  return (
    <ContainerMain>
      <div className="flex flex-col gap-2 w-screen p-4">
        <div className="mb-10">
          <h1 className="mb-2 text-2xl font-bold">API do Enem :: Docs</h1>
          <code className="bg-black text-xs dark:bg-slate-200 dark:text-black p-2 rounded-md text-white">https://api-enem.fly.dev/</code>
        </div>
        <AccordionComponent items={accordionItems} />
      </div>
    </ContainerMain>
  )  
}