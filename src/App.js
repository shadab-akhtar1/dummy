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
import Doctormanagement from './Components/Doctormanagement/Doctormanagement.jsx';
import Doctorrequests from './Components/Doctormanagement/Doctorrequests.jsx';
import Doctordetails from './Components/Doctormanagement/Doctordetails.jsx';
import Doctordetailsbasic from './Components/Doctormanagement/Doctordetailsbasic.jsx';
import Adddoctor from './Components/Doctormanagement/Adddoctor.jsx';
import Adddoctorupload from './Components/Doctormanagement/Adddoctorupload.jsx';
import Adddoctorbank from './Components/Doctormanagement/Adddoctorbank.jsx';
import Adddoctor1 from './Components/Doctormanagement/Adddoctor1.jsx';
import Adddoctorsuccess from './Components/Doctormanagement/Adddoctorsuccess.jsx';
import Doctorcasedetail from './Components/Doctormanagement/Doctorcasedetail.jsx';
import Dhacasedetail from './Components/Dhamanagement/Dhacasedetail.jsx';
import Blockdoctor from './Components/Doctormanagement/Blockdoctor.jsx';
import Blockdoctorsuccess from './Components/Doctormanagement/Blockdoctorsuccess.jsx';
import Doctorpending from './Components/Doctormanagement/Doctorpending.jsx';
import Pharmacymanagement from './Components/Pharmacy/Pharmacymanagement.jsx';
import Pharmacymanagementmain from './Components/Pharmacy/Pharmacymanagementmain.jsx';
import Pharmacyrequest from './Components/Pharmacy/Pharmacyrequest.jsx';
import Pharmabasicedit from './Components/Pharmacy/Pharmabasicedit.jsx';
import Pharmadetail from './Components/Pharmacy/Pharmadetail.jsx';
import Addpharma from './Components/Pharmacy/Addpharma.jsx';
import Addpharmaupload from './Components/Pharmacy/Addpharmaupload.jsx';
import Addpharmabank from './Components/Pharmacy/Addpharmabank.jsx';
import Addpharmasuccess from './Components/Pharmacy/Addpharmasuccess.jsx';
import Blockpharma from './Components/Pharmacy/Blockpharma.jsx';
import Blockpharmasuccess from './Components/Pharmacy/Blockpharmasuccess.jsx';
import Pharmabooking from './Components/Pharmacy/Pharmabooking.jsx';
import Pharmabookingdone from './Components/Pharmacy/Pharmabookingdone.jsx';
import Pharmabookingvaccine from './Components/Pharmacy/Pharmabookingvaccine.jsx';
import Pharmabookingvaccinedone from './Components/Pharmacy/Pharmabookingvaccinedone.jsx';
import Labmanagement from './Components/Labsmanagement/Labmanagement.jsx';
import Labdetails from './Components/Labsmanagement/Labdetails.jsx';
import Labdetailedit from './Components/Labsmanagement/Labdetailedit.jsx';
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
import Labbookingdownload from './Components/Labsmanagement/Labbookingdownload.jsx';
import Labnonurgent from './Components/Labsmanagement/Labnonurgent.jsx';
import Labstandalone from './Components/Labsmanagement/Labstandalone.jsx';
import Rolemanagement from './Components/Rolemanagement/Rolemanagement.jsx';
import Blockrole from './Components/Rolemanagement/Blockrole.jsx';
import Blockrolesuccess from './Components/Rolemanagement/Blockrolesuccess.jsx';
import Addrole from './Components/Rolemanagement/Addrole.jsx';
import Managerole from './Components/Rolemanagement/Managerole.jsx';
import Addsubadmin from './Components/Rolemanagement/Addsubadmin.jsx';
import Addsubadmincomplete from './Components/Rolemanagement/Addsubadmincomplete.jsx';
import Editpermision from './Components/Rolemanagement/Editpermision.jsx';
import Notification from './Components/Notification/Notification.jsx';
import Notificationcomplete from './Components/Notification/Notificationcomplete.jsx';
import Profile from './Components/Profile/Profile.jsx';
import Profilebasic from './Components/Profile/Profilebasic.jsx';
import Earning from './Components/Earnings/Earning.jsx';
import Earninghistory from './Components/Earnings/Earninghistory.jsx';
import Earningdha from './Components/Earnings/Earningdha.jsx';
import Earningdoctor from './Components/Earnings/Earningdoctor.jsx';
import Earningpharmacy from './Components/Earnings/Earningpharmacy.jsx';
import Earninglab from './Components/Earnings/Earninglab.jsx';
import Earningdhahistory from './Components/Earnings/Earningdhahistory.jsx';
import Earningdoctorhistory from './Components/Earnings/Earningdoctorhistory.jsx';
import Earningpharmacyhistory from './Components/Earnings/Earningpharmacyhistory.jsx';
import Earninglabhistory from './Components/Earnings/Earninglabhistory.jsx';
import Bookingrequestdha from './Components/Bookingrequests/Bookingrequestdha.jsx';
import Bookingdhaassign from './Components/Bookingrequests/Bookingdhaassign.jsx';
import Bookingdhadoctorassign from './Components/Bookingrequests/Bookingdhadoctorassign.jsx';
import Bookingdhaassigndoctor from './Components/Bookingrequests/Bookingdhaassigndoctor.jsx';
import Bookingdhadhaassign from './Components/Bookingrequests/Bookingdhadhaassign.jsx';
import Bookingdhahospital from './Components/Bookingrequests/Bookingdhahospital.jsx';
import Bookingdhacase from './Components/Bookingrequests/Bookingdhacase.jsx';
import Bookingrequestdoctor from './Components/Bookingrequests/Bookingrequestdoctor.jsx';
import Bookingdoctorcase from './Components/Bookingrequests/Bookingdoctorcase.jsx';
import Bookingdoctorassigndoctor from './Components/Bookingrequests/Bookingdoctorassigndoctor.jsx';
import Bookingdoctordoctorassign from './Components/Bookingrequests/Bookingdoctordoctorassign.jsx';
import Bookingdoctorhospital from './Components/Bookingrequests/Bookingdoctorhospital.jsx';
import Bookingrequestpharmacy from './Components/Bookingrequests/Bookingrequestpharmacy.jsx';
import Bookingrequestlab from './Components/Bookingrequests/Bookingrequestlab.jsx';
import Bookingrequestlabdetail from './Components/Bookingrequests/Bookingrequestlabdetail.jsx';
import Bookingpendingdha from './Components/Bookingpending/Bookingpendingdha.jsx';
import Bookingdhastandalone from './Components/Bookingpending/Bookingdhastandalone.jsx';
import Pendingdhaassigndoctor from './Components/Bookingpending/Pendingdhaassigndoctor.jsx';
import Pendingdhadoctorassign from './Components/Bookingpending/Pendingdhadoctorassign.jsx';
import Pendingdhadhaassign from './Components/Bookingpending/Pendingdhadhaassign.jsx';
import Pendingdhaassigndha from './Components/Bookingpending/Pendingdhaassigndha.jsx';
import Pendingdhaurgentcase from './Components/Bookingpending/Pendingdhaurgentcase.jsx';
import Pendingdoctor from './Components/Bookingpending/Pendingdoctor.jsx';
import Pendingdoctorhospital from './Components/Bookingpending/Pendingdoctorhospital.jsx';
import Pendingdoctornonurgentcase from './Components/Bookingpending/Pendingdoctornonurgentcase.jsx';
import Pendingdoctorassigndoctor from './Components/Bookingpending/Pendingdoctorassigndoctor.jsx';
import Pendingdoctordoctorassign from './Components/Bookingpending/Pendingdoctordoctorassign.jsx';
import Pendingcasecompleted from './Components/Bookingpending/Pendingcasecompleted.jsx';
import Pendingpharmacy from './Components/Bookingpending/Pendingpharmacy.jsx';
import Pendingpharmacycase1 from './Components/Bookingpending/Pendingpharmacycase1.jsx';
import Pendingaddquotation2 from './Components/Bookingpending/Pendingaddquotation2.jsx';
import Pendingaddquotation3 from './Components/Bookingpending/Pendingaddquotation3.jsx';
import Pendingaddquotation4 from './Components/Bookingpending/Pendingaddquotation4.jsx';
import Pendinglab from './Components/Bookingpending/Pendinglab.jsx';
import Pendinglabdetail from './Components/Bookingpending/Pendinglabdetail.jsx';
import Dhahospital from './Components/Bookingcompleted/Dhahospital.jsx';
import Dhahospital1 from './Components/Bookingcompleted/Dhahospital1.jsx';
import Doctorhospital from './Components/Bookingcompleted/Doctorhospital.jsx';
import Doctorhospital1 from './Components/Bookingcompleted/Doctorhospital1.jsx';
import Pharmacyhospital from './Components/Bookingcompleted/Pharmacyhospital.jsx';
import Labhospital from './Components/Bookingcompleted/Labhospital.jsx';
import Completedaddquotation from './Components/Bookingcompleted/Completedaddquotation.jsx';
import Completedlabdetails from './Components/Bookingcompleted/Completedlabdetails.jsx';
import Casedetailscompleted from './Components/Bookingcompleted/Casedetailscompleted.jsx';
import Rejectdhahospital from './Components/Bookingrejected/Rejectdhahospital.jsx';
import Rejectdhahospital1 from './Components/Bookingrejected/Rejectdhahospital1.jsx';
import Rejectdoctorhospital from './Components/Bookingrejected/Rejectdoctorhospital.jsx';
import Rejectdoctorhospital1 from './Components/Bookingrejected/Rejectdoctorhospital1.jsx';
import Rejectpharmacyhospital from './Components/Bookingrejected/Rejectpharmacyhospital.jsx';
import Rejectlabhospital from './Components/Bookingrejected/Rejectlabhospital.jsx';
import Rejectaddquotation from './Components/Bookingrejected/Rejectaddquotation.jsx';
import Rejectlabtestdetail from './Components/Bookingrejected/Rejectlabtestdetail.jsx';
import Rejectrejected from './Components/Bookingrejected/Rejectrejected.jsx';

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
       <Route path='/doctormanagement' element={<Doctormanagement/>}/>
        <Route path='/doctorrequests' element={<Doctorrequests/>}/>
        <Route path='/doctordetails' element={<Doctordetails/>}/>
        <Route path='/doctordetailsbasic' element={<Doctordetailsbasic/>}/>
         <Route path='/adddoctor' element={<Adddoctor/>}/>
         <Route path='/adddoctor1' element={<Adddoctor1/>}/>
         <Route path='/adddoctorupload' element={<Adddoctorupload/>}/>
         <Route path='/adddoctorbank' element={<Adddoctorbank/>}/>
         <Route path='/adddoctorsuccess' element={<Adddoctorsuccess/>}/>
         <Route path='/doctorcasedetail' element={<Doctorcasedetail/>}/>
         <Route path='/dhacasedetail' element={<Dhacasedetail/>}/>
         <Route path='/blockdoctor' element={<Blockdoctor/>}/>
         <Route path='/blockdoctorsuccess' element={<Blockdoctorsuccess/>}/>
         <Route path='/doctorpending' element={<Doctorpending/>}/>
        <Route path='/pharmacymanagement' element={<Pharmacymanagement/>}/>
        <Route path='/pharmacymanagementmain' element={<Pharmacymanagementmain/>}/>
        <Route path='/pharmacyrequest' element={<Pharmacyrequest/>}/>
        
        <Route path='/pharmabasicedit' element={<Pharmabasicedit/>}/>
        <Route path='/pharmadetail' element={<Pharmadetail/>}/>
        <Route path='/addpharma' element={<Addpharma/>}/>
        <Route path='/addpharmaupload' element={<Addpharmaupload/>}/>
        <Route path='/addpharmabank' element={<Addpharmabank/>}/>
        <Route path='/addpharmasuccess' element={<Addpharmasuccess/>}/>
        <Route path='/blockpharma' element={<Blockpharma/>}/>
        <Route path='/blockpharmasuccess' element={<Blockpharmasuccess/>}/>
        <Route path='/pharmabooking' element={<Pharmabooking/>}/>
        <Route path='/pharmabookingdone' element={<Pharmabookingdone/>}/>
        <Route path='/pharmabookingvaccine' element={<Pharmabookingvaccine/>}/>
        <Route path='/pharmabookingvaccinedone' element={<Pharmabookingvaccinedone/>}/>
        <Route path='/labmanagement' element={<Labmanagement/>}/>
        <Route path='/labdetails' element={<Labdetails/>}/>
        <Route path='/labdetailedit' element={<Labdetailedit/>}/>
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
        <Route path='/labbookingdownload' element={<Labbookingdownload/>}/>
        <Route path='/labnonurgent' element={<Labnonurgent/>}/>
        <Route path='/labstandalone' element={<Labstandalone/>}/>
        <Route path='/rolemanagement' element={<Rolemanagement/>}/>
        <Route path='/blockrole' element={<Blockrole/>}/>
        <Route path='/blockrolesuccess' element={<Blockrolesuccess/>}/>
        <Route path='/addrole' element={<Addrole/>}/>
        <Route path='/managerole' element={<Managerole/>}/>
        <Route path='/addsubadmin' element={<Addsubadmin/>}/>
        <Route path='/addsubadmincomplete' element={<Addsubadmincomplete/>}/>
        <Route path='/editpermision' element={<Editpermision/>}/>
        <Route path='/notification' element={<Notification/>}/>
        <Route path='/notificationcomplete' element={<Notificationcomplete/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/profilebasic' element={<Profilebasic/>}/>
        <Route path='/earning' element={<Earning/>}/>
        <Route path='/earningdha' element={<Earningdha/>}/>
        <Route path='/earningdoctor' element={<Earningdoctor/>}/>
        <Route path='/earningpharmacy' element={<Earningpharmacy/>}/>
        <Route path='/earninglab' element={<Earninglab/>}/>
        <Route path='/earninghistory' element={<Earninghistory/>}/>
        <Route path='/earningdhahistory' element={<Earningdhahistory/>}/>
        <Route path='/earningdoctorhistory' element={<Earningdoctorhistory/>}/>
        <Route path='/earningpharmacyhistory' element={<Earningpharmacyhistory/>}/>
        <Route path='/earninglabhistory' element={<Earninglabhistory/>}/>
        <Route path='/bookingrequestdha' element={<Bookingrequestdha/>}/>
        <Route path='/bookingdhaassign' element={<Bookingdhaassign/>}/>
        <Route path='/bookingdhadoctorassign' element={<Bookingdhadoctorassign/>}/>
        <Route path='/bookingdhaassigndoctor' element={<Bookingdhaassigndoctor/>}/>
        <Route path='/bookingdhadhaassign' element={<Bookingdhadhaassign/>}/>
        <Route path='/bookingdhahospital' element={<Bookingdhahospital/>}/>
        <Route path='/bookingdhacase' element={<Bookingdhacase/>}/>
        <Route path='/bookingrequestdoctor' element={<Bookingrequestdoctor/>}/>
        <Route path='/bookingdoctorcase' element={<Bookingdoctorcase/>}/>
        <Route path='/bookingdoctorassigndoctor' element={<Bookingdoctorassigndoctor/>}/>
        <Route path='/bookingdoctordoctorassign' element={<Bookingdoctordoctorassign/>}/>
        <Route path='/bookingdoctorhospital' element={<Bookingdoctorhospital/>}/>
        <Route path='/bookingrequestpharmacy' element={<Bookingrequestpharmacy/>}/>
        <Route path='/bookingrequestlab' element={<Bookingrequestlab/>}/>
        <Route path='/bookingrequestlabdetail' element={<Bookingrequestlabdetail/>}/>
        <Route path='/bookingpendingdha' element={<Bookingpendingdha/>}/>
        <Route path='/bookingdhastandalone' element={<Bookingdhastandalone/>}/>
        <Route path='/pendingdhaassigndoctor' element={<Pendingdhaassigndoctor/>}/>
        <Route path='/pendingdhadoctorassign' element={<Pendingdhadoctorassign/>}/>
        <Route path='/pendingdhadhaassign' element={<Pendingdhadhaassign/>}/>
        <Route path='/pendingdhaassigndha' element={<Pendingdhaassigndha/>}/>
        <Route path='/pendingdhaurgentcase' element={<Pendingdhaurgentcase/>}/>
        <Route path='/pendingdoctor' element={<Pendingdoctor/>}/>
        <Route path='/pendingdoctorhospital' element={<Pendingdoctorhospital/>}/>
        <Route path='/pendingdoctornonurgentcase' element={<Pendingdoctornonurgentcase/>}/>
        <Route path='/pendingdoctorassigndoctor' element={<Pendingdoctorassigndoctor/>}/>
        <Route path='/pendingdoctordoctorassign' element={<Pendingdoctordoctorassign/>}/>
        <Route path='/pendingcasecompleted' element={<Pendingcasecompleted/>}/>
        <Route path='/pendingpharmacy' element={<Pendingpharmacy/>}/>
        <Route path='/pendingpharmacycase1' element={<Pendingpharmacycase1/>}/>
        <Route path='/pendingaddquotation2' element={<Pendingaddquotation2/>}/>
        <Route path='/pendingaddquotation3' element={<Pendingaddquotation3/>}/>
        <Route path='/pendingaddquotation4' element={<Pendingaddquotation4/>}/>
        <Route path='/pendinglab' element={<Pendinglab/>}/>
        <Route path='/pendinglabdetail' element={<Pendinglabdetail/>}/>
        <Route path='/dhahospital' element={<Dhahospital/>}/>
        <Route path='/dhahospital1' element={<Dhahospital1/>}/>
        <Route path='/doctorhospital' element={<Doctorhospital/>}/>
        <Route path='/doctorhospital1' element={<Doctorhospital1/>}/>
        <Route path='/pharmacyhospital' element={<Pharmacyhospital/>}/>
        <Route path='/labhospital' element={<Labhospital/>}/>
        <Route path='/completedaddquotation' element={<Completedaddquotation/>}/>
        <Route path='/completedlabdetails' element={<Completedlabdetails/>}/>
        <Route path='/casedetailscompleted' element={<Casedetailscompleted/>}/>
        <Route path='/rejectdhahospital' element={<Rejectdhahospital/>}/>
        <Route path='/rejectdhahospital1' element={<Rejectdhahospital1/>}/>
        <Route path='/rejectdoctorhospital' element={<Rejectdoctorhospital/>}/>
        <Route path='/rejectdoctorhospital1' element={<Rejectdoctorhospital1/>}/>
        <Route path='/rejectpharmacyhospital' element={<Rejectpharmacyhospital/>}/>
        <Route path='/rejectlabhospital' element={<Rejectlabhospital/>}/>
        <Route path='/rejectaddquotation' element={<Rejectaddquotation/>}/>
        <Route path='/rejectlabtestdetail' element={<Rejectlabtestdetail/>}/>
        <Route path='/rejectrejected' element={<Rejectrejected/>}/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
