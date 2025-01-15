import React, { useState } from 'react'

export default function Exams() {
  const [exams, setExams] = useState([])
  const [pageNumber, setPageNumber] = useState('')
  const [pageSize, setPageSize] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const urlbase = 'https://api-enem.fly.dev/v1/exams'

  const fetchExams = (e) => {
    e.preventDefault()
    setIsLoading(true)
    fetch(`${urlbase}?page%5Bnumber%5D=${pageNumber}&page%5Bsize%5D=${pageSize}`)
      .then(response => response.json())
      .then(data => {
        setExams(data.data || [])
      })
      .catch(error => console.error('Error fetching exams:', error))
      .finally(() => setIsLoading(false))
  }

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={fetchExams} className="flex flex-col gap-2">
        <div className="flex flex-col md:flex-row gap-2">
          <div className='flex flex-col gap-2 flex-1 dark:text-slate-200'>
            <label htmlFor="pageNumber" className='flex flex-col md:flex-row'>
              <span>Quantidade de Páginas</span>
              <span>&#123; inteiro &#125;</span>
            </label>
            <input
              name='pageNumber'
              type="text"
              placeholder="Quantidade de Páginas"
              value={pageNumber}
              onChange={e => setPageNumber(e.target.value)}
              className="border p-2 rounded mr-2 placeholder:text-xs "
              required={true}
            />
          </div>
          <div className='flex flex-col gap-2 flex-1 dark:text-slate-200'>
            <label htmlFor="pageSize" className='flex flex-col md:flex-row'>
              <span>Quantidade de Itens por Página</span>
              <span>&#123; inteiro &#125;</span>
            </label>
            <input
              name='pageSize'
              type="text"
              placeholder="Quantidade de Itens por Página"
              value={pageSize}
              onChange={e => setPageSize(e.target.value)}
              className="border p-2 rounded mr-2 placeholder:text-xs flex-1"
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

      {!isLoading && exams.length > 0 && (
        <div className="flex flex-col gap-2 mt-4">
          <div className="flex flex-col gap-2">
            <span className='font-semibold dark:text-slate-100'>Curl</span>
            <pre className="curl microlight" style={{ display: 'block', overflowX: 'auto', padding: '0.5em', background: 'rgb(51, 51, 51)', color: 'white' }}>
              <code className="language-bash" style={{ whiteSpace: 'pre' }}>
                <span>curl -X </span>
                <span style={{ color: 'rgb(162, 252, 162)' }}>'GET'</span>
                <span> \</span>
                <span>  </span>
                <span style={{ color: 'rgb(162, 252, 162)' }}>'{urlbase}?page%5Bnumber%5D={pageNumber}&amp;page%5Bsize%5D={pageSize}'</span>
                <span> \</span>
                <span>  -H </span>
                <span style={{ color: 'rgb(162, 252, 162)' }}>'accept: application/json'</span>
              </code>
            </pre>
          </div>
          <div className="flex flex-col gap-2">
            <span className='font-semibold dark:text-slate-100'>Url da Requisição</span>
            <code className="bg-black dark:bg-slate-200 dark:text-black p-1 px-6 rounded-md text-white overflow-auto">
              {urlbase}?page%5Bnumber%5D={pageNumber}&page%5Bsize%5D={pageSize}
            </code>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <pre className="container mx-auto w-full max-h-80 bg-gray-800 dark:bg-slate-200 p-4 rounded-lg text-yellow-300 dark:text-black overflow-auto">
              {JSON.stringify(exams, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  )
}
