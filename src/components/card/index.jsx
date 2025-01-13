import { Card } from "@material-tailwind/react"

export default function CardDefault({title, img, alt, description, href, hrefName}) {
  return (    
    <Card className="p-4 rounded-md  dark:bg-slate-400 shadow-lg gap-2 justify-center items-center flex flex-col max-w-60">
      <h2 className="text-xl font-medium title-font mb-2">{title}</h2>
      <img src={img} alt={alt} className="w-full mb-6 rounded-lg max-w-28" />
      <p className="leading-relaxed text-base">{description}</p>
      <a href={href} className="text-indigo-500 text-justify mt-4">{hrefName}</a>
    </Card>
  )
}