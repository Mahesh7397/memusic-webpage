import { createContext, useContext, useEffect, useState } from "react";
import api from '../api/song' ;
import {Howl} from 'howler';

const Songlist=createContext()

export default function SongProvider({children}){
    const [songlist,setsonglist]=useState([])
    const [isPlaying, setIsPlaying] = useState(false);
    const [curSong,setcurSong]=useState({})
    const [pastSong,setpastSong]=useState({})
    const [audio,setaudio]=useState({})
    const [duration,setduration]=useState(0)
    const [currentTime,setcurrentTime]=useState(0)
    const [loading,setloading]=useState(false)
    const [search,setsearch]=useState('')
    const [searchresult,setsearchresult]=useState([])
    const [searchkeyList,setsearchkeyList]=useState([])
    const [displaykey,setdisplaykey]=useState(true)
    const [searchressc,setsearchressc]=useState(false)

    
    const fetchSong=async()=>{
        try {
            const response=await api.get('/songs')
            setsonglist(response.data)
        } 
        catch (err) {
        if(err.response){
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        }
        else{
          console.log(`ERROR:${err.message}`)
        }
        } 
    }
     
    const Audioloader=(data)=>{
       setloading(true)
       let Song=new Howl({
        src:data.url,
        html5:true,
        onplay:()=>{setIsPlaying(true)},
        onpause:()=>{setIsPlaying(false)},
        onload:()=>{
            setloading(false)
            setduration(Song?.duration())
            setaudio(Song)
        },
        onend:()=>setIsPlaying(false)
       })
       setcurrentTime(0)
       Song.play()
    }
    
    const handleAudio=async(data)=>{
        if(curSong?.id!==data.id){
            if(isPlaying){
                setpastSong(curSong)
                audio?.pause()
                setIsPlaying(false)
                setduration(0)
                setcurrentTime(0)
                setcurSong(data)
                Audioloader(data)
            }
            else{
               setIsPlaying(false)
               setduration(0)
               setcurrentTime(0)
               setcurSong(data)
               Audioloader(data)
            }
        }
        else if(isPlaying && curSong?.id===data.id){
            audio?.pause()
            setIsPlaying(false)
        }
        else if(!isPlaying && curSong?.id===data.id){
            audio?.play()
            setIsPlaying(true)
        }
        else{
            console.log(data)
        }
    }


    const Handlesearch=async()=>{
        setdisplaykey(true)
        try {
            setsearchressc(true)
            const response=await api.get(`/songs/search/result/${search}`)
            //console.log(response.data)
            setsearchresult(response.data)  
        } catch (err) {
            if(err.response){
                //console.log(err.response.data)
                //console.log(err.response.status)
                //console.log(err.response.headers)
            }
            else{
              //console.log(`ERROR:${err.message}`)
            }
        }
    }
   
    setInterval(()=>{
    isPlaying && !loading?updateseektime():setcurrentTime(0) 
   },500)
   
   

    const updateseektime=()=>{
        if(isPlaying ){
            const seek=audio?.seek()
            if(currentTime!==seek){
              setcurrentTime(seek)
            }
        }
    }

    const Searchkey=async()=>{
        try {
            const response=await api.get(`songs/search/${search.trim()}`)
            setsearchkeyList(response.data)
            setdisplaykey(false)
        } catch (err) {
            setdisplaykey(true)
            if(err.response){   
                //console.log(err.response.data)
                //console.log(err.response.status)
                //console.log(err.response.headers)
            }
            else{
              //console.log(`ERROR:${err.message}`)
            }   
        }
    }


    const Handleforword=()=>{
        if(songlist){
            const song=songlist[Math.floor(Math.random()*songlist?.length)]
            //setcurSong(song)
            //console.log(song)
            handleAudio(song)
        } 
    }
    

    const Handlebackword=()=>{
        if(pastSong){
            handleAudio(pastSong)
        }
        else{
            const song=songlist[Math.floor(Math.random)*songlist?.length]
            //setcurSong(song)
            handleAudio(song)
        }
    }

    useEffect(()=>{
        if(search?.length>1){
            Searchkey()
        }
        else if(!search){
            setdisplaykey(true)
            setsearchressc(false)
        }
    },[search,Searchkey])

    
    return(
        <Songlist.Provider value={{songlist,fetchSong,setcurSong,setIsPlaying,isPlaying,curSong,handleAudio,loading,duration,currentTime,search,setsearch,searchkeyList,searchresult,displaykey,Handlesearch,searchressc,Handlebackword,Handleforword}}>
            {children}
        </Songlist.Provider>
    )
}

export const useSonglist=()=>useContext(Songlist)