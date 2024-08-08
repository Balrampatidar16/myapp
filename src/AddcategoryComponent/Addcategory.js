import './Addcategory.css';
import { useState } from 'react';
import { _apiURLCategory } from '../apiURL';
import axios from 'axios';

function Addcategory() {

    const [file, setFile] = useState()
    const [catName , setCatName] = useState();
    const [output , setOutput] = useState();
    
    const handleChange=(event)=>{
      setFile(event.target.files[0])
    }
    
    const handleSubmit=(event)=>{
      event.preventDefault();
      var formData = new FormData();
      formData.append('catname', catName);
      formData.append('caticon', file);
      const config = {
          'content-type': 'multipart/form-data'
      };
      axios.post(_apiURLCategory+"save", formData, config).then((response) => {
        setCatName("");
        setOutput("Category Added Successfully....");
      });
    }     

  return (
    <div>
 {/* About Start */}
<div class="container-fluid bg-secondary p-0">
<div class="row g-0">
<div class="col-lg-12">
<br/>
<h1 class="display-5 mb-4">Add Category Here!!!</h1>
<font color="blue">{output}</font>
<form onSubmit={handleSubmit} >

<label>
Category Name:
<input type="text" value={catName}
onChange={e => setCatName(e.target.value)} />
</label>
<br/><br/>

<label>
Category Icon:
<input type="file"
onChange={handleChange} />
</label>
<br/><br/>

<input type="submit" value="Add Category" />

</form>
<br/><br/>
</div>            
</div>
</div>
{/* About End */}
    </div>

  );
}

export default Addcategory;
