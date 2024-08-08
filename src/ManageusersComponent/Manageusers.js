import './Manageusers.css';
import { useState , useEffect } from 'react';
import { _apiURLUser } from '../apiURL';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Manageusers() {

  const navigate = useNavigate();
  const [ userDetails , setUserDetails ] = useState([]);    

  useEffect(()=>{
    axios.get(_apiURLUser+"fetch?role=user").then((response)=>{
        setUserDetails(response.data);        
    }).catch((err)=>{
        console.log(err);
    });    
  });
  
  const manageUserStatus=(_id,s)=>{
    if(s=="block")
    {
     let updateDetails={"condition_obj":{"_id":_id},"content_obj":{"status":0}}; 
     axios.patch(_apiURLUser+"update",updateDetails).then((response)=>{
      navigate("/manageusers");    
     }); 
    }
    else if(s=="verify")
    {
     let updateDetails={"condition_obj":{"_id":_id},"content_obj":{"status":1}}; 
     axios.patch(_apiURLUser+"update",updateDetails).then((response)=>{
      navigate("/manageusers");   
     });
    }  
    else
    {
     axios.delete(_apiURLUser+"delete/"+_id).then((response)=>{
      navigate("/manageusers");   
     });
    }
  }

  return (
    <div>
        {/* About Start */}
        <div class="container-fluid bg-secondary p-0">
        <div class="row g-0">
<div class="col-lg-12">
<center>
<br/>
<h1>View & Manage User Details</h1>
<br/>
<table class="table table-bordered">
<tr>
<th>ID</th>
<th>Name</th>    
<th>Email</th>
<th>Mobile</th>
<th>Address</th>
<th>City</th>
<th>Gender</th>
<th>Info</th>
<th>Status</th>
<th>Action</th>
</tr>
{
  userDetails.map((row)=>(
  <tr>
  <td>{row._id}</td>
  <td>{row.name}</td>
  <td>{row.email}</td>
  <td>{row.mobile}</td>
  <td>{row.address}</td>
  <td>{row.city}</td>
  <td>{row.gender}</td>
  <td>{row.info}</td>
  <td>
  {row.status == 0 &&
    <a style={{"color":"green"}} onClick={()=>{manageUserStatus(row._id,"verify")}} >Verify User</a>
  }
  {row.status == 1 &&
    <a style={{"color":"orange"}} onClick={()=>{manageUserStatus(row._id,"block")}} >Block User</a>
  }    
  </td>
  <td>
    <a style={{"color":"red"}} onClick={()=>{manageUserStatus(row._id,"delete")}} >Delete</a>
  </td>
  </tr>
 ))    
}
</table>
</center>
<br/>
</div>            
        </div>
    </div>
    {/* About End */}
    </div>

  );
}

export default Manageusers;
