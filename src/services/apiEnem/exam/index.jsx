import React, { useState } from 'react'

export default function Exam() {
  const [exam, setExam] = useState([])
  const [year, setYear] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState(null)
  const urlbase = 'https://api-enem.fly.dev/v1/exams/'

  const fetchExam = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setIsSuccess(false)
    setError(null)
    fetch(`${urlbase}${year}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Status code: ${response.status}`)
        }
        return response.json()
      })
      .then(data => {
        setExam(data.data || [])
        setIsSuccess(true)
      })
      .catch(error => {
        console.error('Error fetching exam:', error)
        setError(error.message)
      })
      .finally(() => setIsLoading(false))
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
            <code className="bg-black dark:bg-slate-200 dark:text-black p-1 px-6 rounded-md text-white overflow-auto">
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