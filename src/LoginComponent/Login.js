import './Login.css';
import { useState } from 'react';
import { _apiURLUser } from '../apiURL';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();
  const [ output , setOutput ] = useState();
  const [ email , setEmail ] = useState();
  const [ password , setPassword ] = useState();
  
  const handleSubmit=(evt)=>{
    evt.preventDefault();
    let userDetails={"email":email,"password":password};

    axios.post(_apiURLUser+"login",userDetails).then((response)=>{
      //console.log(response.data);
      localStorage.setItem("token",response.data.token);
      const obj=response.data.userDetails;
      localStorage.setItem('name',obj.name);
      localStorage.setItem('email',obj.email);
      localStorage.setItem('password',obj.password);
      localStorage.setItem('mobile',obj.mobile);
      localStorage.setItem('address',obj.address);
      localStorage.setItem('city',obj.city);
      localStorage.setItem('gender',obj.gender);
      localStorage.setItem('role',obj.role);
      localStorage.setItem('status',obj.status);
      localStorage.setItem('info',obj.info);
      
      obj.role=="admin"?navigate("/admin"):navigate("/user");
      
    }).catch((err)=>{
      localStorage.setItem("token","error");  
      setOutput("Invalid user please login or verify your account....");
      setEmail('');
      setPassword('');
    });

  }    

  return (
    <div>
    {/* About Start */}
    <div class="container-fluid bg-secondary p-0">
    <div class="row g-0">
        <div class="col-lg-12">
            <br/>
<h1 class="display-5 mb-4">Login <span class="text-primary">Here!!!</span></h1>
<font style={{"color":"blue"}}>{output}</font>
<form onSubmit={handleSubmit} >
    <div class="form-group">
      <label for="email">Email address:</label>
      <input type="email" class="form-control" value={email} onChange={e => setEmail(e.target.value)} />
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" value={password} onChange={e => setPassword(e.target.value)} />
    </div>
    <button type="submit" class="btn btn-success">Submit</button>
  </form>
  <br/><br/>
        </div>            
    </div>
</div>
{/* About End */}
</div>

  );
}

export default Login;
