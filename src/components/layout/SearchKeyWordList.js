import React from 'react'
import Keybox from './Keybox'
import '../../Styles/SearchKeyWordList.css'
import { useSonglist } from '../../hooks/Controleprovider'

const SearchKeyWordList = () => {
    const {searchkeyList,displaykey,setsearch}=useSonglist()
    const selectsearch=(data)=>{
        setsearch(data)
    }
  return (
    <div className='keycontainer' hidden={displaykey}>
        {searchkeyList.map(data=><Keybox data={data} onclick={()=>selectsearch(data)}/>)}        
    </div>
  )
}

export default SearchKeyWordList