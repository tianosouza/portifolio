import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Field, Label, Switch } from '@headlessui/react'
import ContainerMain from "../../components/containerMain"
import ModalComponent from '../../components/modal'

export default function Contact() {
  const [agreed, setAgreed] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  const actions = [
    {
      label: 'Fechar',
      onClick: handleCloseModal,
      className: 'bg-red-600 text-white hover:bg-red-500 sm:ml-3'
    }    
  ]
  
  return (
    <ContainerMain>
      <div className="isolate rounded-md shadow-lg bg-white px-6 sm:py-12 lg:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-xl font-semibold tracking-tight text-gray-900 sm:text-3xl">Contact me</h2>
          <p className="mt-2 text-lg/8 text-gray-600"></p>
        </div>
        <div  className="mx-auto mt-6 max-w-xl sm:mt-10">
          <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
            <div className='mt-2'>
              <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
                Primeiro nome
              </label>
              <div className="mt-2">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-slate-200"
                />
              </div>
            </div>
            <div className='mt-2'>
              <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
                Último nome
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-slate-200"
                />
              </div>
            </div>            
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-slate-200"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">
                Telefone
              </label>
              <div className="mt-1">
                <div className="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-slate-200">
                  <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country"
                      aria-label="Country"
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pl-3.5 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-slate-200 sm:text-sm/6"
                    >
                      <option>US</option>
                      <option>CA</option>
                      <option>EU</option>
                      <option>BR</option>
                    </select>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    />
                  </div>
                  <input
                    id="phone-number"
                    name="phone-number"
                    type="text"
                    placeholder="123-456-7890"
                    className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-slate-200"
                  defaultValue={''}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              className="block w-full rounded-md hover:bg-slate-200 px-3.5 py-2.5 text-center text-sm font-semibold dark:text-white shadow-sm bg-gray-800 text-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-200"
              onClick={handleOpenModal}
            >
              Enviar
            </button>
            <ModalComponent
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              title="Alert"
              message="Estamos trabalhando para implementer essa funcionalidade"
              actions={actions}
            />
          </div>
        </div>
      </div>
    </ContainerMain>
  )
}