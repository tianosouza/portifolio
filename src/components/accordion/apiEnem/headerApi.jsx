export default function HeaderApi({methode, path, description}) {
  return (
    <div className="flex justify-start items-center mb-1 gap-2 w-full">
      <span className="p-1 rounded-sm border-1 border-white bg-blue-400 text-white text-sm">{methode}</span>
      <span className="text-xs font-semibold italic">{path}</span>
      <span className="text-xs font-light">{description}</span>
    </div>
  )
}