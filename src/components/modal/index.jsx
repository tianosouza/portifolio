import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'

export default function ModalComponent({ isOpen, onClose, title, message, actions }) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 flex items-center justify-center overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white p-6">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center">
                  <DialogTitle className="text-xs font-semibold text-gray-900 flex items-center gap-2">
                    <div className="mx-auto flex size-8 shrink-0 items-center justify-center rounded-full bg-green-100">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      </div>
                    {title}
                  </DialogTitle>
                  <div className="mt-6">
                    <p className="text-xs text-gray-500">{message}</p>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                {actions.map((action, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`mt-3 inline-flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-base font-medium shadow-sm ${action.className}`}
                    onClick={action.onClick}
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}