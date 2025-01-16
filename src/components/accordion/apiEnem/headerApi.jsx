export default function HeaderApi({methode, path, description}) {
  return (
    <div className="flex flex-col md:flex-row justify-start md:items-center m-1 gap-2 w-full">
      <div className="flex gap-2 items-center">
        <span className="p-1 rounded-sm border-1 border-white bg-blue-400 text-white text-sm">{methode}</span>
        <span className="text-xs font-semibold italic">{path}</span>
      </div>
      <span className="text-xs font-light">{description}</span>
    </div>
  )
}