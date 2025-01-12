import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function Dropdown({
  buttonText = 'Options',
  items = [],
  onItemClick = () => { },
  buttonColor = '',
  iconColor = '',
  menuClassName = '',
}) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton
          className={`inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 ${buttonColor} dark:text-gray-200`}
        >
          {buttonText}
          <ChevronDownIcon aria-hidden="true" className={`-mr-1 size-5 ${iconColor}`} />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in ${menuClassName}`}
      >
        <div className="py-1">
          {items.map((item, index) => (
            <MenuItem key={index}>
              {({ active }) => (
                <button
                  onClick={() => onItemClick(item)}
                  className={`block w-full px-4 py-2 text-left text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                    }`}
                >
                  {item.label}
                </button>
              )}
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}
