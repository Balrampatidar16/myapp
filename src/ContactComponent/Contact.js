import './Contact.css';
import axios from 'axios';
import { useState } from 'react';
import { _apiURLUser } from '../apiURL';

function Contact() {

    const [ responseData , setResponseData ] = useState();
    
    //web service to call web api (dummy api)
    axios.get(_apiURLUser+"test").then((response)=>{
      //console.log(response.data);
      setResponseData(response.data.msg);
    }).catch((error)=>{
      console.log("Invalid url resource invoked");
    })   

  return (
    <div>
    {/* About Start */}
    <div class="container-fluid bg-secondary p-0">
    <div class="row g-0">
        <div class="col-lg-12">
            <br/>
            <h1 class="display-5 mb-4">Welcome To <span class="text-primary">RoomRent.com</span> , Contact Component</h1>
            <h2>API Response</h2>
            <p>{responseData}</p>
        </div>            
    </div>
</div>
{/* About End */}
</div>

  );
}

export default Contact;
