import React from 'react'
import SideBar from './sideNavBar'

const ClientTerminal = ({ children }) => {
  return (
    <div className='h-screen flex flex-row justify-start'>
      <SideBar />
        <div className='bg-gray-900 flex-1 text-gray-600 border-1 border-dashed'>
          {children}
        </div>
    </div>
  )
}

export default ClientTerminal