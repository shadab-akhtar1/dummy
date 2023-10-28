import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login.jsx';
import Verification from './Components/Verification/Verification.jsx';
import Successfulverify from './Components/Successfulverify/Successfulverify.jsx';


function App() {
  return (
     <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/verification' element={<Verification/>}/>
      <Route path='/successfulverify' element={<Successfulverify/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
