import React from 'react'
import '../../Styles/Songview.css'
import image from '../../image/logo192.png'
import { useSonglist } from '../../hooks/Controleprovider'
import { FaPlay, FaPause } from "react-icons/fa";
import { IoIosSkipForward, IoIosSkipBackward } from "react-icons/io";
import SubLoader from './SubLoader';

const Songview = ({ song }) => {
  const { isPlaying, handleAudio,loading,currentTime,duration ,Handlebackword,Handleforword} = useSonglist()
  const durationFormater=(time)=>{
    const min=Math.floor(time/60)
    const sec=Math.floor(time%60)
    if(sec>=10) return `${min}:${sec}`
    else if(time===0) return `0:00`
    return  `${min}:0${sec}`
  }
  return (
    <div className='container'>
      <img src={song?.image || image} className='imagecover' alt='songimage' />
      <div className='detail'>
        <h3>{(song?.title)?.length < 20 || true ? song?.title || 'Song Title' : <marquee width='60%'>{song?.title || 'Song Title'}</marquee>}</h3>
        <p>{(song?.Movie)?.length < 20 || true ? song?.Movie || 'Song discription' : <marquee width='60%'>{song.Movie}</marquee>}</p>
      </div>
      <div className='timebar'>
        <div className='time'>{durationFormater(currentTime)}</div>
        <div className='time'>{durationFormater(duration)}</div>
      </div>
      <div class="slidecontainer">
        <input type="range" min={0} max={1} value={currentTime/duration} class="slider" id="myRange"/>
      </div>
      <div className='controler'>
        <div onClick={()=>Handlebackword()}><IoIosSkipBackward size={25} color='#ffff' /></div>
        {loading?<SubLoader/>:<div onClick={() => handleAudio(song)}>{isPlaying ? <FaPause size={25} color='#ffff' /> : <FaPlay size={25} color='#ffff' />}</div>}
        <div onClick={()=>Handleforword()}><IoIosSkipForward size={25} color='#ffff' /></div>
      </div>
    </div>
  )
}

export default Songview