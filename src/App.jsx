import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './comp/Nav'
import Act from './comp/Act'
import Middle from './comp/Middle'

function App() {

 
  
  return (
    <>
  <div className='page'>
     <Nav className="nav"/>
     <Act className="act"/>
     <Middle className="middle"/>
     </div>
    </>
  )
}

export default App
