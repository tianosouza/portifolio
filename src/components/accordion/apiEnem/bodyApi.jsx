export default function BodyApi({descripiton, children}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="dark:text-white mb-2">
        {descripiton}
      </span>
      {children}
    </div>
  )
}