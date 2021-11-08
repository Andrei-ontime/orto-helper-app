import { Routes, Route } from 'react-router-dom';
import { Header } from './Header';
import { Homepage } from './pages/Homepage';
import { Calculate } from './pages/Calculate';
import { Colors } from './pages/Colors';
import { NotFound } from './pages/NotFound';

import '../styles/Header.css';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/homepage' element={<Homepage />}></Route>
        <Route path='/calculate' element={<Calculate />}></Route>
        <Route path='/colors' element={<Colors />}></Route>
        <Route path='/*' element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
