import './Addsubcategory.css';
import { useState , useEffect } from 'react';
import { _apiURLCategory , _apiURLSubCategory } from '../apiURL';
import axios from 'axios';

function Addsubcategory() {

    const [file, setFile] = useState()
    const [catName , setCatName] = useState();
    const [subCatName , setSubCatName] = useState();
    const [output , setOutput] = useState();
    const [categoryDetails , setCategoryDetails] = useState([]);
    
    useEffect(()=>{
      axios.get(_apiURLCategory+"fetch").then((result)=>{
        setCategoryDetails(result.data);
      });   
    },[]);

    const handleChange=(event)=>{
      setFile(event.target.files[0])
    }
    
    const handleSubmit=(event)=>{
      event.preventDefault();
      var formData = new FormData();
      formData.append('catname', catName);
      formData.append('subcatname', subCatName);
      formData.append('caticon', file);
      const config = {
          'content-type': 'multipart/form-data'
      };
      axios.post(_apiURLSubCategory+"save", formData, config).then((response) => {
        setCatName("");
        setSubCatName("");
        setOutput("Sub Category Added Successfully....");
      });
    }     

  return (
    <div>
 {/* About Start */}
<div class="container-fluid bg-secondary p-0">
<div class="row g-0">
<div class="col-lg-12">
<br/>
<h1 class="display-5 mb-4">Add SubCategory Here!!!</h1>
<font color="blue">{output}</font>
<form>

<label>
Category Name:
<select value={catName}
onChange={e => setCatName(e.target.value)}>
<option>Select Category</option>
{
  categoryDetails.map((row)=>(
    <option>{row.catname}</option>
  ))
}
</select>
</label>
<br/><br/>

<label>
SubCategory Name:
<input type="text" value={subCatName}
onChange={e => setSubCatName(e.target.value)} />
</label>
<br/><br/>

<label>
SubCategory Icon:
<input type="file"
onChange={handleChange} />
</label>
<br/><br/>

<input type="button" onClick={handleSubmit} value="Add Sub Category" />

</form>
<br/><br/>
</div>            
</div>
</div>
{/* About End */}
    </div>

  );
}

export default Addsubcategory;
