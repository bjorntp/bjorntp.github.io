import './App.css';
import MainBox from './components/MainBox';
import Newtab from './components/newtab/Newtab';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="bg-ahus bg-cover bg-fixed bg-center font-Robot">
      <div className='font-mono w-screen h-screen'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainBox />} />
            <Route path='/newtab' element={<Newtab />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
