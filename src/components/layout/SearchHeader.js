import React from 'react'
import '../../Styles/SearchHeader.css'
import { useSonglist } from '../../hooks/Controleprovider'
import { FiSearch } from "react-icons/fi";


const SearchHeader = () => {
    const {search,setsearch,Handlesearch}=useSonglist()
  return (
    <div className='searchheader'>
        <input type='text' placeholder='Song Name & Movie Name' 
        className='searchinput'
        value={search}
        onChange={(e)=>setsearch(e.target.value)}/>
        <div className='button' onClick={Handlesearch}><FiSearch 
      size={24} color='#ffff'/></div>
    </div>
  )
}

export default SearchHeader