import ContainerMain from "../../../components/containerMain"
import AccordionComponent from "../../../components/accordion"
import HeaderApi from "../../../components/accordion/apiEnem/headerApi"
import BodyApi from "../../../components/accordion/apiEnem/bodyApi";

export default function ApiEnemDocs() {
  const result = [
    {
      "id": 0,
      "title": "string",
      "year": 0,
      "disciplines": [
        "string"
      ],
      "languages": [
        "string"
      ]
    }
  ]

  const accordionItems = [
    {
      header: (
        <HeaderApi methode="GET" path="/v1/exams" description="Retorna uma lista de exams" />
      ),
      body: (
        <BodyApi  
          descripiton="Retorna uma lista de exams"
          stats="200"
          query="query"
          result={JSON.stringify(result, null, 2)}
        />
      )
    },
    {
      header: (
        <HeaderApi methode="GET" path="/v1/exams/{year}" description="Retorna um exam de um ano específico" />
      ),
      body: (
        <BodyApi  
          descripiton="Retorna um exam de um ano específico"
          stats="200"
          query="query"
          result={JSON.stringify(result, null, 2)}
        />
      )
    },
    {
      header: (
        <HeaderApi methode="GET" path="/v1/questions" description="Retorna uma lista de quetsões" />
      ),
      body: (
        <BodyApi  
          descripiton="Retorna uma lista de quesões"
          stats="200"
          query="query"
          result={JSON.stringify(result, null, 2)}
        />
      )
    },
    {
      header: (
        <HeaderApi methode="GET" path="/v1/questions/{id}" description="Retorna uma questão específica" />
      ),
      body: (
        <BodyApi  
          descripiton="Retorna uma questão específica"
          stats="200"
          query="query"
          result={JSON.stringify(result, null, 2)}
        />
      )
    }
  ]

  return (
    <ContainerMain>
      <div className="flex flex-col w-screen ">
        <div className="mb-10">
          <h1 className="mb-2 text-2xl font-bold">API do Enem :: Docs</h1>
          <code className="bg-black dark:bg-slate-200 dark:text-black p-1 px-6 rounded-md text-white">https://api-enem.fly.dev/</code>
        </div>
        <AccordionComponent items={accordionItems} />
      </div>
    </ContainerMain>
  )
  
}