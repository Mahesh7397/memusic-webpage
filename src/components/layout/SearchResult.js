import React from 'react'
import { useSonglist } from '../../hooks/Controleprovider'
import Songbox from './Songbox'
import Loader from './Loader'

const SearchResult = () => {
  const {searchresult,handleAudio}=useSonglist()
  return (
    searchresult.length?searchresult.map((data)=><Songbox
    song={data} onClick={()=>handleAudio(data)}/>):<Loader/>)
}

export default SearchResult