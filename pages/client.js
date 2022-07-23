import React from 'react'
import ClientTerminal from '../components/clientTerminal'
import ClientDashboard from '../components/clientDashboard'
import ClientDashboardTalble from '../components/clientDashboardTalble'

const Client = () => {
  return (
    <ClientTerminal>
       <ClientDashboard />
       <br></br>
       <br></br>
       <ClientDashboardTalble />
    </ClientTerminal>
  )
}

export default Client