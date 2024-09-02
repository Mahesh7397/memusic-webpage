// This for Musice Player UI

import React from 'react'
import { useSonglist } from '../hooks/Controleprovider'
import Songview from './layout/Songview'
import useDimention from '../hooks/useDimention'

const RightSidebar = () => {
  const { curSong }=useSonglist()
  const {width}=useDimention()
  return (
    <div className='playbar' style={ width<765 ? {height:`${0.3*width*2}px`}:null}>
        <Songview song={curSong}/>
    </div>
  )
}

export default RightSidebar