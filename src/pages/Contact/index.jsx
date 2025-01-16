import React, { useState, useEffect, useRef } from 'react'
import emailjs from 'emailjs-com'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import ContainerMain from "../../components/containerMain"
import ModalComponent from '../../components/modal'

export default function Contact() {
  const [agreed, setAgreed] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    country: 'BR',
    phoneNumber: '',
    message: ''
  })
  const form = useRef()
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_PUBLIC_API_KEY)
  }, [])

  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_API_KEY
      )
      .then(
        () => {
          console.log('SUCCESS!')
          handleOpenModal()

          setFormData({
            name: '',
            lastName: '',
            email: '',
            country: 'BR',
            phoneNumber: '',
            message: ''
          })
        },
        (error) => {
          console.error('FAILED...', error)
        }
      )
    console.log('form submitted', formData)
  }

  const actions = [
    {
      label: 'Fechar',
      onClick: handleCloseModal,
      className: 'bg-green-600 text-white hover:bg-green-500'
    }
  ]

  return (
    <ContainerMain>
      <div className="isolate flex-col rounded-md shadow-lg bg-white dark:bg-slate-400 p-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-xl font-semibold tracking-tight text-gray-900 sm:text-xl">Contact me</h2>
          <p className="mt-2 text-lg/8 text-gray-600"></p>
        </div>
        <div className="mx-auto mt-3 max-w-xl sm:mt-4">
          <form ref={form} id="contact-form" onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2 md:gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm/6 font-semibold text-gray-900">
                  Nome
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="given-name"
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full dark:bg-slate-300 rounded-md bg-white p-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-slate-200"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                  Email
                </label>                
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full dark:bg-slate-300 rounded-md bg-white p-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-slate-200"
                  required
                />                
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phoneNumber" className="block text-sm/6 font-semibold text-gray-900">
                  Telefone
                </label>                
                <div className="flex rounded-md dark:bg-slate-300 bg-white outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-slate-200">
                  <div className="grid shrink-0 rounded-md dark:bg-slate-300 grid-cols-1 focus-within:relative">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country"
                      aria-label="Country"
                      value={formData.country}
                      onChange={handleChange}
                      className="col-start-1 dark:bg-slate-300 row-start-1 w-full appearance-none rounded-md py-2 pl-3 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-slate-200 sm:text-sm/6"
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
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    placeholder="123-456-7890"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="block dark:bg-slate-300 rounded-md min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                    required
                  />
                </div>                
              </div>
            </div>
            <div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm/6  font-semibold text-gray-900">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full dark:bg-slate-300 rounded-md bg-white p-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-slate-200"
                    required
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex items-center justify-center">
                  <input
                    id="agreed"
                    name="agreed"
                    type="checkbox"
                    checked={agreed}
                    onChange={() => setAgreed(!agreed)}
                    className="h-3 w-3 mt-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 placeholder:bg-slate-400"
                    required
                  />
                  <label htmlFor="agreed" className="ml-2 mt-2 block text-xs font-normal text-gray-900">
                    Concordo com os termos e condições
                  </label>
                </div>
              </div>
              <div className="sm:col-span-2 mt-2">
                <button
                  type="submit"
                  className="block w-full rounded-md hover:bg-slate-200 p-2.5 text-center text-sm font-semibold shadow-sm bg-gray-800 text-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-200"
                >
                  Enviar
                </button>
              </div>
            </div>
          </form>
          <ModalComponent
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            title="Mensagem Enviada"
            message="Em breve entrarei em contato"
            actions={actions}
          />
        </div>
      </div>
    </ContainerMain>
  )
}