import './Viewsubcat.css';
import { useState , useEffect } from 'react';
import { _apiURLCategory , _apiURLSubCategory } from '../apiURL';
import axios from 'axios';
import { Link , useParams } from 'react-router-dom';

function Viewsubcat() {
  
 const params = useParams();
 const [ cDetails , setCategoryDetails ] = useState([]);
 const [ scDetails , setSubCategoryDetails ] = useState([]);

 useEffect(()=>{
    axios.get(_apiURLSubCategory+"fetch?catname="+params.catname).then((response)=>{
        setSubCategoryDetails(response.data);        
    }).catch((err)=>{
        console.log(err);
    });    

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
<div class="col-lg-4">
<h1 class="display-5 mb-4">Category List </h1>
<ul>
{ cDetails.map((row)=>{
    const path = '/viewsubcat/'+row.catname;
    return(

    <li><Link to={path} >{row.catname}</Link></li>      
  )
  }
  )}
</ul>
</div>
<div class="col-lg-8">
<br/>
<h1 class="display-5 mb-4">SubCategory List {params.catname}</h1>
<center>
<div id="container">
{ scDetails.map((row)=>{
    const image = '/assets/uploads/subcategoryicons/'+row.subcaticonname;
    //const path = '/viewsubcat/'+row.catname;
    return(
    <div class="container_part">
    <img src={image} height="120" width="150" />
    <br/>
    <b>{row.subcatname}</b>
    </div>
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

export default Viewsubcat;
