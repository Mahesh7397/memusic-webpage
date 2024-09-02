import React from 'react'
import SearchHeader from '../layout/SearchHeader'
import SearchKeyWordList from '../layout/SearchKeyWordList'
import { useSonglist } from '../../hooks/Controleprovider'
import SearchResult from '../layout/SearchResult'

const Search = () => {
  const {searchkeyList,searchressc,searchresult}=useSonglist()
  return (
    <div className='searchcontainer'>
      <SearchHeader/>
      {searchkeyList?.length?<SearchKeyWordList/>:null}
      {searchressc?searchresult.length?<SearchResult/>:<div className='ntbx'><div className='nt'>NOT FOUND</div></div>:null}
    </div>
  )
}

export default Search