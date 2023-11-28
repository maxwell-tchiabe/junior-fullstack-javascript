import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import  SearchBar  from './components/SearchBar'
import  Create  from './components/create'
import Read from './components/Read'
import Edit from './components/Edit'

function App() {

  return (
    
     
      <div className='App'>
        <div className='search-bar'>
        <BrowserRouter>
          <Routes >
             <Route  path='/' element={<SearchBar/>}/>
             <Route  path='/create' element={<Create/>}/>
             <Route  path='/read/:id' element={<Read/>}/>
             <Route  path='/edit/:id' element={<Edit/>}/>
          </Routes>
        </BrowserRouter>
        </div>
      </div>
  
   
   
  )
}

export default App
