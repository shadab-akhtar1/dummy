import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login.jsx';
import Verification from './Components/Verification/Verification.jsx';
import Successfulverify from './Components/Successfulverify/Successfulverify.jsx';
import Dhamanagement from './Components/Dhamanagement/Dhamanagement.jsx';
import Dharequest from './Components/Dhamanagement/Dharequest.jsx';
import Dhadetailsview from './Components/Dhamanagement/Dhadetailsview.jsx';
import Dhadetailsedit from './Components/Dhamanagement/Dhadetailsedit.jsx';
import Adddha from './Components/Dhamanagement/Adddha.jsx';
import Adddhaupload from './Components/Dhamanagement/Adddhaupload.jsx';
import Adddhabank from './Components/Dhamanagement/Adddhabank.jsx';
import Adddhasuccess from './Components/Dhamanagement/Adddhasuccess.jsx';
import Blockdha from './Components/Dhamanagement/Blockdha.jsx';
import Blockdhasuccess from './Components/Dhamanagement/Blockdhasuccess.jsx';
import Dhadocumentedit from './Components/Dhamanagement/Dhadocumentedit.jsx';
import Dhabankinfoedit from './Components/Dhamanagement/Dhabankinfoedit.jsx';



function App() {
  return (
     <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/verification' element={<Verification/>}/>
      <Route path='/successfulverify' element={<Successfulverify/>}/>
      <Route path='/dhamanagement' element={<Dhamanagement/>} />
      <Route path='/dharequest' element={<Dharequest/>} />
      <Route path='/dhadetailsview' element={<Dhadetailsview/>} />
      <Route path='/dhadetailsedit' element={<Dhadetailsedit/>} />
      <Route path='/adddha' element={<Adddha/>} />
      <Route path='/adddhaupload' element={<Adddhaupload/>} />
      <Route path='/adddhabank' element={<Adddhabank/>} />
      <Route path='/adddhasuccess' element={<Adddhasuccess/>} />
       <Route path='/blockdha' element={<Blockdha/>} />
       <Route path='/blockdhasuccess' element={<Blockdhasuccess/>} />
       <Route path='/dhadocumentedit' element={<Dhadocumentedit/>} />
       <Route path='/dhabankinfoedit' element={<Dhabankinfoedit/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
