import React from 'react'
import { FiHome } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { PiPlaylistBold } from "react-icons/pi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Leftsidebar = () => {
  const Navigate=useNavigate()
  return (
    <main className='sidebar'>
      <div className='sidebutton home' onClick={()=>Navigate('/')}><FiHome size={24} color='#ffff'/><span>Home</span></div>
      <div className='sidebutton seach' onClick={()=>Navigate('/search')}><FiSearch 
      size={24} color='#ffff'/> <span>search</span></div>
      <div className='sidebutton playlist' onClick={()=>Navigate('/playlist')}><PiPlaylistBold size={24} color='#ffff' /> <span>Playlist</span></div>
      <div className='sidebutton account' onClick={()=>Navigate('/account')}><MdOutlineAccountCircle size={28} color='#ffff'/> <span>Account</span></div>
    </main>
  )
}

export default Leftsidebar