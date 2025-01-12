import React, { useState } from 'react';
import './Global.css';

const items = [
  { label: 'Account settings', value: 'account' },
  { label: 'Support', value: 'support' },
  { label: 'License', value: 'license' },
  { label: 'Sign out', value: 'signout' },
];

export function App() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <>
      <div className="dropdown">
        <div tabIndex={0} onClick={toggleDropdown} role="button" className="btn m-1">
          Click
        </div>
        {isDropdownVisible && (
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            {items.map((item, index) => (
              <li key={index} className="menu-item">
                <button onClick={() => console.log('Clicked:', item)} className="flex items-center w-full px-2 py-1 text-left text-sm">
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
