import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Discover} from './pages';
import { Sidebar, MusicPlayer, TopPlay } from './components';
const App = () => {
  const { activeSong } = useSelector((state) => state.player);
  return (
    <div className="relative flex">
      <Sidebar/>
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#0a4a22]">
        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Discover />} />
            </Routes>
          </div>
          <div className="xl:sticky relative top-0 h-fit">
          <TopPlay />
          </div>
        </div>
      </div>
      {(
        <div className="absolute h-28 bottom-0 left-0 right-0 flex  
        bg-[#000000] backdrop rounded-t-2xl z-10">
         <MusicPlayer />
        </div>
      )}
    </div>
    
  );
};
export default App;


