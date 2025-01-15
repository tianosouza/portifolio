import Exam from "../../../services/apiEnem/exam"
import Exams from "../../../services/apiEnem/exams"

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