import './About.css';
import axios from 'axios';
import { useState } from 'react';

function About() {
  const [ pDetails , setPostDetails ] = useState([]);
  const [ apiURL , setAPIUrl ] = useState("https://jsonplaceholder.typicode.com/posts");

  //web service to call web api (dummy api)
  axios.get(apiURL).then((response)=>{
    //console.log(response.data);
    setPostDetails(response.data);
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
                <h1 class="display-5 mb-4">Welcome To <span class="text-primary">RoomRent.com , About Component
                </span></h1>
                <h2>View & Manage Post Details</h2>
                <table class="table table-bordered">
                <tr>
                <th>UserId</th>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
                </tr>    
                {
                 pDetails.map((row)=>(
                    <tr>
                    <td>{row.userId}</td>
                    <td>{row.id}</td>
                    <td>{row.title}</td>
                    <td>{row.body}</td>
                    </tr>   
                 ))    
                }
                </table>
            </div>            
        </div>
    </div>
    {/* About End */}
    </div>

  );
}

export default About;
