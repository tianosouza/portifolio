import HeaderApi from "../../../components/accordion/apiEnem/headerApi"
import BodyApi from "../../../components/accordion/apiEnem/bodyApi"
import Exams from "../../../components/accordion/apiEnem/exams/Exams"
import Exam from "../../../components/accordion/apiEnem/exams/Exam"
import Questions from "../../../components/accordion/apiEnem/questions/Questions"

export const AcordionsItems = [
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