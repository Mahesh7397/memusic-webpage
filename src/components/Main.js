import React, { useEffect } from 'react'
import useDimention from '../hooks/useDimention'
import { useSonglist } from '../hooks/Controleprovider'
import { Routes , Route, useNavigate, Outlet } from 'react-router-dom'
import Home from './Router/Home'
import Search from './Router/Search'
import Playlist from './Router/Playlist'
import Account from './Router/Account'
import Notfound from './Router/Notfound'

const Main = () => {
  const {height}=useDimention()
  const {fetchSong }=useSonglist()
  useEffect(()=>{
    fetchSong()
  })

  return (
    <div className='mainbody' style={{height:height-70}}>
       <Routes>
         <Route path='/' element={<Home />}/>
         <Route path='/search' element={<Search/>}/>
         <Route path='/playlist' element={<Playlist/>}/>
         <Route path='/account' element={<Account/>}/>
         <Route path='*' element={<Notfound/>}/>
       </Routes>
       <Outlet/>
    </div>
  )
}

export default Main