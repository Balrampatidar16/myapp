import './Searchproperty.css';
import { useState , useEffect } from 'react';
import { _apiURLCategory } from '../apiURL';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Searchproperty() {
  
 const [ cDetails , setCategoryDetails ] = useState([]);

 useEffect(()=>{
    axios.get(_apiURLCategory+"fetch").then((response)=>{
        setCategoryDetails(response.data);        
    }).catch((err)=>{
        console.log(err);
    });    
  });

  return (  
    <div>
        {/* About Start */}
        <div class="container-fluid bg-secondary p-0">
        <div class="row g-0">
<div class="col-lg-12">
<br/>
<h1 class="display-5 mb-4">Category List </h1>
<center>
<div id="container">
{ cDetails.map((row)=>{
    const image = '/assets/uploads/categoryicons/'+row.caticonname;
    const path = '/viewsubcat/'+row.catname;
    return(
    <Link to={path} >    
    <div class="container_part">
    <img src={image} height="120" width="150" />
    <br/>
    <b>{row.catname}</b>
    </div>
    </Link>
    )
  }
)}


</div>
</center>

<br/><br/>
</div>            
        </div>
    </div>
    {/* About End */}
    </div>

  );
}

export default Searchproperty;
