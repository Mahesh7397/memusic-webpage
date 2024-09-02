import './App.css';
import Header from './components/Header';
import SongBar from './components/layout/SongBar';
import Leftsidebar from './components/Leftsidebar';
import Main from './components/Main';
import RightSidebar from './components/RightSidebar';
import SongProvider from './hooks/Controleprovider';

function App() {
  return (
    <SongProvider>
    <div className="App">
       <Header/>
       <div className='Appbody'>
       <Leftsidebar/>
       <Main/>
       <RightSidebar/>
       <SongBar/>
       </div>
    </div>
    </SongProvider>
  );
}

export default App;
