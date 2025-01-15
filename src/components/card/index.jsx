import { Card } from "@material-tailwind/react"

export default function CardDefault({img, alt, description, hrefName, repo}) {
  return (    
    <Card className="p-4 rounded-md  dark:bg-slate-400 shadow-lg gap-2 justify-center items-center flex flex-col max-w-60">
      <img src={img} alt={alt} className="w-full mb-6 rounded-lg max-w-28" />
      <p className="leading-relaxed text-base">{description}</p>
      <a className="text-indigo-500 text-justify mt-4">{hrefName}</a>
      <div className="flex justify-center items-center gap-2 mt-4">
        {repo}
      </div>
    </Card>
  )
}