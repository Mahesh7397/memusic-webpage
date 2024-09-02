import React from 'react'
import '../../Styles/songbar.css'
import image from '../../image/logo192.png'
import { FaPlay , FaPause } from "react-icons/fa";
import { IoIosSkipForward } from "react-icons/io";
import { useSonglist } from '../../hooks/Controleprovider';
import SubLoader from './SubLoader';

const SongBar = () => {
  const {isPlaying,curSong,handleAudio,loading,Handleforword}=useSonglist()
  return (
    <main key={curSong?.id || 1} className='barbox'>
        <img src={curSong?.image || image} alt='Song Cover' className='songimage'/>
        <div className='songdetail'>
        <h3 className='songtitle'>{curSong?.title || 'XXXXXXXXX'}</h3>
        <p
        className='singer'>{curSong?.Movie||'XXXXXXXXXXXXXXX'}</p>
        </div>
        <div className='barcontroler'>
          {loading?<SubLoader/>:<div onClick={()=>handleAudio(curSong)}>{isPlaying?<FaPause size={20} color='#ffff' />:<FaPlay size={20} color='#ffff'/>}</div>}
          <div onClick={()=>Handleforword()}><IoIosSkipForward size={25} color='#ffff'/></div>
        </div>
        
    </main>
  )
}

export default SongBar