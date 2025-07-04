import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const Index = ({children}) =>  {
  return (
    <div className='flex size-full'>
        {/* <Sidebar/> */}
        <main className='grow bg-[#EBEDF0] flex flex-col'>
            {/* <Header/> */}
            {children}
        </main>
    </div>
  )
}

export default Index;