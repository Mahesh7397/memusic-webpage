import React from 'react'
import Songbox from './Songbox'
import { useSonglist } from '../../hooks/Controleprovider'
import Loader from './Loader'

const SongList = () => {
    const {songlist,handleAudio}=useSonglist()
  return (
        songlist.length?songlist.map((data)=><Songbox song={data} onClick={()=>handleAudio(data)}/>)
         :<Loader/>)
}

export default SongList