import ContainerMain from "../../../components/containerMain"
import AccordionComponent from "../../../components/accordion"
import { AcordionsItems } from "./AcordionsItems"

export default function ApiEnemDocs() {
  return (
    <ContainerMain>
      <div className="flex flex-col gap-2 w-screen p-4">
        <div className="mb-10">
          <h1 className="mb-2 text-2xl font-bold">API do Enem :: Docs</h1>
          <code className="bg-black text-xs dark:bg-slate-200 dark:text-black p-2 rounded-md text-white">https://api-enem.fly.dev/</code>
        </div>
        <AccordionComponent items={AcordionsItems} />
      </div>
    </ContainerMain>
  )  
}