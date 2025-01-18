import React, { useState } from 'react'
import { GetExam } from '../../../../services/apiEnem/exams/GetExams'

export default function Exam() {
  const [exam, setExam] = useState([])
  const [year, setYear] = useState('')
  const [visible, setVisible] = useState(false)
  const [copied, setCopied] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState(null)
  const urlbase = 'https://api-enem.fly.dev/v1/exams/'

  const clipBoard = (url) => {
    navigator.clipboard.writeText(url)
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
      .catch(err => {
        console.error('Failed to copy: ', err)
      })
  }

  const fetchExam = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setIsSuccess(false)
    setError(null)

    try{
      const data = await GetExam()
      setExam(data.data || [])
      setIsSuccess(true)      
    }
    catch(err){
      console.error('Error fetching exam:', err)
      setError(err.message)
    } 
    finally{
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={fetchExam} className="flex flex-col gap-2">
        <div className="flex flex-col md:flex-row gap-2">
          <div className='flex flex-col gap-2 flex-1 dark:text-slate-200'>
            <label htmlFor="year" className='flex flex-col md:flex-row'>
              <span>Ano</span>
              <span>&#123; inteiro &#125;</span>
            </label>
            <input
              name='year'
              type="text"
              placeholder="Ano"
              value={year}
              onChange={e => setYear(e.target.value)}
              className="border p-2 rounded mr-2 placeholder:text-xs "
              required={true}
            />
          </div>
        </div>
        <button type="submit" className="bg-blue-500 text-white mt-2 p-2 rounded font-semibold">
          Buscar
        </button>
      </form>
      
      {isLoading && (
        <div className="flex justify-center mt-4">
          <div className="loader border-t-4 border-blue-500 border-solid rounded-full w-8 h-8 animate-spin"></div>
        </div>
      )}

      {!isLoading && error && (
        <div className="flex justify-center mt-4">
          <div className="text-red-500">{error}</div>
        </div>
      )}

      {!isLoading && isSuccess && (
        <div className="flex flex-col gap-2 mt-4">
          <div className="flex flex-col gap-2">
            <span className='font-semibold dark:text-slate-100'>Curl</span>
            <pre className="curl microlight" style={{ display: 'block', overflowX: 'auto', padding: '0.5em', background: 'rgb(51, 51, 51)', color: 'white' }}>
              <code className="language-bash" style={{ whiteSpace: 'pre' }}>
                <span>curl -X </span>
                <span style={{ color: 'rgb(162, 252, 162)' }}>'GET'</span>
                <span> \</span>
                <span>  </span>
                <span style={{ color: 'rgb(162, 252, 162)' }}>'{urlbase}{year}'</span>
                <span> \</span>
                <span>  -H </span>
                <span style={{ color: 'rgb(162, 252, 162)' }}>'accept: application/json'</span>
              </code>
            </pre>
          </div> 
          <div className="flex flex-col gap-2">
            <span className='font-semibold dark:text-slate-100'>Url da Requisição</span>
            <code 
              className="bg-black dark:bg-slate-200 dark:text-black p-2 px-6 rounded-md text-white overflow-auto relative" 
              onMouseEnter={() => setVisible(true)} 
              onMouseLeave={() => setVisible(false)}
            >
              {visible && (
                <div className='absolute top-1.5 cursor-pointer right-2' onClick={() => clipBoard(`${urlbase}${year}`)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                  </svg>
                  {copied && (
                    <span className="absolute top-0 right-0 mt-8 mr-2 bg-gray-700 text-white text-xs rounded p-1">
                      Copiado!
                    </span>
                  )}
                </div>
              )}
              {urlbase}{year}
            </code>
          </div> 
          <div className="flex flex-col gap-4 mt-4">
            <pre className="container mx-auto w-full max-h-80 bg-gray-800 dark:bg-slate-200 p-4 rounded-lg text-yellow-300 dark:text-black overflow-auto">
              {JSON.stringify(exam, null, 2)}
            </pre>
          </div>   
        </div>        
      )}
    </div>
  )
}