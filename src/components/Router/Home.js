import React from 'react'
import SongList from '../layout/SongList'
import { useSonglist } from '../../hooks/Controleprovider'
import Notfound from './Notfound'

const Home = () => {
  const {songlist,loading}=useSonglist()
  return !songlist.length && !loading?<Notfound/>:<SongList/>
}

export default Home