import ButtonComponent from "../../button"

export default function BodyApi({descripiton, stats, query, result}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="dark:text-white mb-2">
        {descripiton}
      </span>
      <div className="flex justify-between items-center p-1 bg-gray-200 dark:bg-slate-200 px-3">
        <span>{stats}</span>
        <ButtonComponent className="rounded-sm bg-blue-400">{query}</ButtonComponent>
      </div>
      <pre className="bg-gray-800 dark:bg-slate-200 p-4 rounded-lg text-yellow-300">
        {result}
        {console.log(result)}
      </pre>
    </div>
  )
}