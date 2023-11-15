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
import Doctormanagement from './Components/Doctormanagement/Doctormanagement.jsx';
import Doctorrequests from './Components/Doctormanagement/Doctorrequests.jsx';
import Doctordetails from './Components/Doctormanagement/Doctordetails.jsx';
import Doctordetailsbasic from './Components/Doctormanagement/Doctordetailsbasic.jsx';
import Doctordocument from './Components/Doctormanagement/Doctordocument.jsx';
import Doctorbank from './Components/Doctormanagement/Doctorbank.jsx';
import Adddoctor from './Components/Doctormanagement/Adddoctor.jsx';
import Adddoctorupload from './Components/Doctormanagement/Adddoctorupload.jsx';
import Adddoctorbank from './Components/Doctormanagement/Adddoctorbank.jsx';
import Adddoctorsuccess from './Components/Doctormanagement/Adddoctorsuccess.jsx';
import Doctorcasedetail from './Components/Doctormanagement/Doctorcasedetail.jsx';
import Dhacasedetail from './Components/Dhamanagement/Dhacasedetail.jsx';



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
       <Route path='/doctormanagement' element={<Doctormanagement/>}/>
        <Route path='/doctorrequests' element={<Doctorrequests/>}/>
        <Route path='/doctordetails' element={<Doctordetails/>}/>
        <Route path='/doctordetailsbasic' element={<Doctordetailsbasic/>}/>
         <Route path='/doctordocument' element={<Doctordocument/>}/>
         <Route path='/doctorbank' element={<Doctorbank/>}/>
         <Route path='/adddoctor' element={<Adddoctor/>}/>
         <Route path='/adddoctorupload' element={<Adddoctorupload/>}/>
         <Route path='/adddoctorbank' element={<Adddoctorbank/>}/>
         <Route path='/adddoctorsuccess' element={<Adddoctorsuccess/>}/>
         <Route path='/doctorcasedetail' element={<Doctorcasedetail/>}/>
         <Route path='/dhacasedetail' element={<Dhacasedetail/>}/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
