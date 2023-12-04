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
import Blockdoctor from './Components/Doctormanagement/Blockdoctor.jsx';
import Blockdoctorsuccess from './Components/Doctormanagement/Blockdoctorsuccess.jsx';
import Doctorpending from './Components/Doctormanagement/Doctorpending.jsx';
import Pharmacymanagement from './Components/Pharmacy/Pharmacymanagement.jsx';
import Pharmamedicine from './Components/Pharmacy/Pharmamedicine.jsx';
import Pharmabasicedit from './Components/Pharmacy/Pharmabasicedit.jsx';
import Pharmadocument from './Components/Pharmacy/Pharmadocument.jsx';
import Pharmabankinfo from './Components/Pharmacy/Pharmabankinfo.jsx';
import Pharmadetail from './Components/Pharmacy/Pharmadetail.jsx';
import Addpharma from './Components/Pharmacy/Addpharma.jsx';
import Addpharmaupload from './Components/Pharmacy/Addpharmaupload.jsx';
import Addpharmabank from './Components/Pharmacy/Addpharmabank.jsx';
import Addpharmasuccess from './Components/Pharmacy/Addpharmasuccess.jsx';
import Blockpharma from './Components/Pharmacy/Blockpharma.jsx';
import Blockpharmasuccess from './Components/Pharmacy/Blockpharmasuccess.jsx';
import Pharmabooking from './Components/Pharmacy/Pharmabooking.jsx';
import Pharmabookingdone from './Components/Pharmacy/Pharmabookingdone.jsx';
import Labmanagement from './Components/Labsmanagement/Labmanagement.jsx';
import Labdetails from './Components/Labsmanagement/Labdetails.jsx';
import Labdetailedit from './Components/Labsmanagement/Labdetailedit.jsx';
import Labdetaildocument from './Components/Labsmanagement/Labdetaildocument.jsx';
import Labdetailbank from './Components/Labsmanagement/Labdetailbank.jsx';
import Addlab from './Components/Labsmanagement/Addlab.jsx';
import Addlabupload from './Components/Labsmanagement/Addlabupload.jsx';
import Addlabuploads from './Components/Labsmanagement/Addlabuploads.jsx';
import Addlabbank from './Components/Labsmanagement/Addlabbank.jsx';
import Addlabsuccess from './Components/Labsmanagement/Addlabsuccess.jsx';
import Blocklab from './Components/Labsmanagement/Blocklab.jsx';
import Blocklabsuccess from './Components/Labsmanagement/Blocklabsuccess.jsx';
import Labbooking from './Components/Labsmanagement/Labbooking.jsx';
import Labbookingstarted from './Components/Labsmanagement/Labbookingstarted.jsx';
import Labbookingcompleted from './Components/Labsmanagement/Labbookingcompleted.jsx';
import Labnonurgent from './Components/Labsmanagement/Labnonurgent.jsx';
import Labstandalone from './Components/Labsmanagement/Labstandalone.jsx';
import Rolemanagement from './Components/Rolemanagement/Rolemanagement.jsx';
import Addrole from './Components/Rolemanagement/Addrole.jsx';
import Managerole from './Components/Rolemanagement/Managerole.jsx';
import Addsubadmin from './Components/Rolemanagement/Addsubadmin.jsx';
import Addsubadmincomplete from './Components/Rolemanagement/Addsubadmincomplete.jsx';
import Editpermision from './Components/Rolemanagement/Editpermision.jsx';
import Notification from './Components/Notification/Notification.jsx';
import Notificationcomplete from './Components/Notification/Notificationcomplete.jsx';
import Profile from './Components/Profile/Profile.jsx';
import Profilebasic from './Components/Profile/Profilebasic.jsx';
import Profiledocument from './Components/Profile/Profiledocument.jsx';
import Profilebank from './Components/Profile/Profilebank.jsx';
import Earning from './Components/Earnings/Earning.jsx';
import Earninghistory from './Components/Earnings/Earninghistory.jsx';
import Bookingrequestdha from './Components/Bookingrequests/Bookingrequestdha.jsx';

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
         <Route path='/blockdoctor' element={<Blockdoctor/>}/>
         <Route path='/blockdoctorsuccess' element={<Blockdoctorsuccess/>}/>
         <Route path='/doctorpending' element={<Doctorpending/>}/>
        <Route path='/pharmacymanagement' element={<Pharmacymanagement/>}/>
        <Route path='/pharmamedicine' element={<Pharmamedicine/>}/>
        <Route path='/pharmabasicedit' element={<Pharmabasicedit/>}/>
        <Route path='/pharmadocument' element={<Pharmadocument/>}/>
        <Route path='/pharmabankinfo' element={<Pharmabankinfo/>}/>
        <Route path='/pharmadetail' element={<Pharmadetail/>}/>
        <Route path='/addpharma' element={<Addpharma/>}/>
        <Route path='/addpharmaupload' element={<Addpharmaupload/>}/>
        <Route path='/addpharmabank' element={<Addpharmabank/>}/>
        <Route path='/addpharmasuccess' element={<Addpharmasuccess/>}/>
        <Route path='/blockpharma' element={<Blockpharma/>}/>
        <Route path='/blockpharmasuccess' element={<Blockpharmasuccess/>}/>
        <Route path='/pharmabooking' element={<Pharmabooking/>}/>
        <Route path='/pharmabookingdone' element={<Pharmabookingdone/>}/>
        <Route path='/labmanagement' element={<Labmanagement/>}/>
        <Route path='/labdetails' element={<Labdetails/>}/>
        <Route path='/labdetailedit' element={<Labdetailedit/>}/>
        <Route path='/labdetaildocument' element={<Labdetaildocument/>}/>
        <Route path='/labdetailbank' element={<Labdetailbank/>}/>
        <Route path='/addlab' element={<Addlab/>}/>
        <Route path='/addlabupload' element={<Addlabupload/>}/>
        <Route path='/addlabuploads' element={<Addlabuploads/>}/>
        <Route path='/addlabbank' element={<Addlabbank/>}/>
        <Route path='/addlabsuccess' element={<Addlabsuccess/>}/>
        <Route path='/blocklab' element={<Blocklab/>}/>
        <Route path='/blocklabsuccess' element={<Blocklabsuccess/>}/>
        <Route path='/labbooking' element={<Labbooking/>}/>
        <Route path='/labbookingstarted' element={<Labbookingstarted/>}/>
        <Route path='/labbookingcompleted' element={<Labbookingcompleted/>}/>
        <Route path='/labnonurgent' element={<Labnonurgent/>}/>
        <Route path='/labstandalone' element={<Labstandalone/>}/>
        <Route path='/rolemanagement' element={<Rolemanagement/>}/>
        <Route path='/addrole' element={<Addrole/>}/>
        <Route path='/managerole' element={<Managerole/>}/>
        <Route path='/addsubadmin' element={<Addsubadmin/>}/>
        <Route path='/addsubadmincomplete' element={<Addsubadmincomplete/>}/>
        <Route path='/editpermision' element={<Editpermision/>}/>
        <Route path='/notification' element={<Notification/>}/>
        <Route path='/notificationcomplete' element={<Notificationcomplete/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/profilebasic' element={<Profilebasic/>}/>
        <Route path='/profiledocument' element={<Profiledocument/>}/>
        <Route path='/profilebank' element={<Profilebank/>}/>
        <Route path='/earning' element={<Earning/>}/>
        <Route path='/earninghistory' element={<Earninghistory/>}/>
        <Route path='/bookingrequestdha' element={<Bookingrequestdha/>}/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
