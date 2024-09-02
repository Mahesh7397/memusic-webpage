import React from 'react'
import '../../Styles/SearchKeyWordList.css'

const Keybox = ({data,onclick}) => {
  return (
    <div className='box' onClick={onclick}>
        <h3>{data}</h3>
    </div>
  )
}

export default Keybox