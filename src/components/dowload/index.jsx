import { Tooltip } from "@material-tailwind/react"

export default function Download() {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = import.meta.env.VITE_URL_DOWNLOAD
    link.download = 'CV_CRISTIANO_SOUZA.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (

    <div className="flex justify-center items-center">
      <Tooltip content="Download Currículo">
        <button
          onClick={handleDownload}
          className="bg-blue-500 z-50 text-white p-2 rounded-full hover:bg-blue-400"
        >
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
        </svg>
        </button>
      </Tooltip>
    </div>
  )
}