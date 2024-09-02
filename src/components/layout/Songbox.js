import React from 'react'
import '../../Styles/songbox.css'
import { useSonglist } from '../../hooks/Controleprovider'
import useDimention from '../../hooks/useDimention'
import { FaPlay , FaPause} from "react-icons/fa";
import SubLoader from './SubLoader';


const Songbox = ({song,onClick}) => {
  const {isPlaying,curSong,loading}=useSonglist()
  const {width}=useDimention()
  return (
    <main  className='contentbox' >
        <img src={song.image} alt='Song Cover' className='songimage'/>
        <div className='songdetail'>
        <h3 className='songtitle'>{song.title}</h3>
        {(((song.Movie)+(song.Artist)).length<30 || width>945) || !((song.Movie)+(song.Artist)).length>30 ?<p
        className='singer'>{song.Movie} - {song.Artist}</p>:<marquee className='singer' width='60%'>{song.Movie} - {song.Artist}</marquee>}
        </div>
        {loading && curSong.id===song.id?<SubLoader/>:<div className='controlbutton' onClick={onClick}>
          {isPlaying && curSong.id===song.id?<FaPause size={25} color='#ffff'/>:<FaPlay size={25} color='#ffff'/>}
        </div>}
        
    </main>
  )
}

export default Songbox