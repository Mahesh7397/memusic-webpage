import React from 'react'
import logo from '../image/logo192.png'


const Header = () => {
  return (
    <main className='header'>
      <div style={{display:'flex'}}>
         <img
         src={logo}
         alt='LogoCover'
         className='lableimage'/>
        <h2 className='HeaderTitle'>Memusic</h2>
        </div>
    </main>
  )
}

export default Header