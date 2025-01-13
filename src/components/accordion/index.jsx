import React, { useState } from 'react'
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react'

export default function AccordionComponent({ items }) {
  const [open, setOpen] = useState(null)

  const handleOpen = (index) => {
    setOpen(open === index ? null : index)
  }

  return (
    <div className='flex flex-col gap-4'>
      {items.map((item, index) => (
        <Accordion key={index} open={open === index} className="p-1 border-2 rounded-md border-slate-900 dark:border-gray-200">
          <AccordionHeader onClick={() => handleOpen(index)} className=" p-1 border-2 rounded-sm border-slate-900 dark:border-gray-200">
            {item.header}
          </AccordionHeader>
          <AccordionBody className="p-4">
            {item.body}
          </AccordionBody>
        </Accordion>
      ))}
    </div>
  )
}