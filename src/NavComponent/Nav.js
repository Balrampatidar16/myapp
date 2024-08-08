import './Nav.css';
import { Link } from 'react-router-dom';
import { useState , useEffect } from 'react';

function Nav() {

    const [ NavContent , setNavContent ] = useState();

    useEffect(()=>{
            if(localStorage.getItem("role")=="admin")
            {
             setNavContent(    <div>
                {/* Navbar Start */}
                <nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
                <a href="" class="navbar-brand p-0">
                    <h1 class="m-0 text-uppercase text-primary"><i class="far fa-smile text-primary me-2"></i>RoomRent.com</h1>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto py-0 me-n3">
                        <a class="nav-item nav-link active"><Link to="/user" >Admin Home</Link></a>
                        <a class="nav-item nav-link"><Link to="/manageusers" >Manage Users</Link></a>
                        <div class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Category</a>
                            <div class="dropdown-menu m-0">
                                <a class="dropdown-item"><Link to="/addcategory" >Add Category</Link></a>
                                <a class="dropdown-item"><Link to="/addsubcategory" >Add Sub Category</Link></a>
                            </div>
                        </div>
                        <a class="nav-item nav-link"><Link to="/logout" >Logout</Link></a>
                    </div>
                </div>
            </nav>
            {/* Navbar End */}  
            </div>);    
            }
            else if(localStorage.getItem("role")=="user")
            {
             setNavContent(    <div>
                {/* Navbar Start */}
                <nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
                <a href="" class="navbar-brand p-0">
                    <h1 class="m-0 text-uppercase text-primary"><i class="far fa-smile text-primary me-2"></i>RoomRent.com</h1>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto py-0 me-n3">
                        <a class="nav-item nav-link active"><Link to="/user" >User Home</Link></a>
                        <a class="nav-item nav-link"><Link to="/searchproperty" >Search Property</Link></a>
                        <a class="nav-item nav-link"><Link to="/logout" >Logout</Link></a>
                    </div>
                </div>
            </nav>
            {/* Navbar End */}  
            </div>);    
            }                     
            else
            {
             setNavContent(<div>
                {/* Navbar Start */}
                <nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
                <a href="" class="navbar-brand p-0">
                    <h1 class="m-0 text-uppercase text-primary"><i class="far fa-smile text-primary me-2"></i>RoomRent.com</h1>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto py-0 me-n3">
                        <a class="nav-item nav-link active"><Link to="/" >Home</Link></a>
                        <a class="nav-item nav-link"><Link to="/about" >About</Link></a>
                        <a class="nav-item nav-link"><Link to="/contact" >Contact</Link></a>
                        {/*<div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div class="dropdown-menu m-0">
                                <a href="blog.html" class="dropdown-item">Blog Grid</a>
                                <a href="detail.html" class="dropdown-item">Blog Detail</a>
                                <a href="feature.html" class="dropdown-item">Features</a>
                                <a href="quote.html" class="dropdown-item">Quote Form</a>
                                <a href="team.html" class="dropdown-item">The Team</a>
                                <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                            </div>
                        </div>*/}
                        <a class="nav-item nav-link"><Link to="/service" >Service</Link></a>
                        <a class="nav-item nav-link"><Link to="/register" >Register</Link></a>
                        <a class="nav-item nav-link"><Link to="/login" >Login</Link></a>
                    </div>
                </div>
            </nav>
            {/* Navbar End */}  
            </div>);    
            }
    });  
  
    return (
        <div>{ NavContent }</div>  
    );
}

export default Nav;
