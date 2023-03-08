import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './page/Home';
import Detail from './page/Detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
