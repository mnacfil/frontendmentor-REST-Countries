import {Route, Routes, BrowserRouter} from 'react-router-dom'
import {Home, Detail, NotFoundPage} from './page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:countryName' element={<Detail />} />
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
