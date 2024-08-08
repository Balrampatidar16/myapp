import './App.css';
import { Routes , Route } from 'react-router-dom';

import Header from './HeaderComponent/Header';
import Nav from './NavComponent/Nav';
import Banner from './BannerComponent/Banner';
import Content from './ContentComponent/Content';
import About from './AboutComponent/About';
import Service from './ServiceComponent/Service';
import Contact from './ContactComponent/Contact';
import Register from './RegisterComponent/Register';
import Login from './LoginComponent/Login';
import Adminhome from './AdminhomeComponent/Adminhome';
import Manageusers from './ManageusersComponent/Manageusers';
import Addcategory from './AddcategoryComponent/Addcategory';
import Addsubcategory from './AddsubcategoryComponent/Addsubcategory';
import Userhome from './UserhomeComponent/Userhome';
import Searchproperty from './SearchpropertyComponent/Searchproperty';
import Viewsubcat from './ViewsubcatComponent/Viewsubcat';
import Sidebar from './SidebarComponent/Sidebar';
import Footer from './FooterComponent/Footer';
import Logout from './LogoutComponent/Logout';


function App() {
  return (
    <div>

    <Header />  

    <Nav />

     <Banner /> 

    <Routes>
      <Route path="/" element={<Content />} ></Route>
      <Route path="/about" element={<About />} ></Route>
      <Route path="/contact" element={<Contact />} ></Route>
      <Route path="/service" element={<Service />} ></Route>
      <Route path="/register" element={<Register />} ></Route>
      <Route path="/login" element={<Login />} ></Route>
      <Route path="/logout" element={<Logout />} ></Route>
      <Route path="/admin" element={<Adminhome />} ></Route>
      <Route path="/addcategory" element={<Addcategory />} ></Route>
      <Route path="/addsubcategory" element={<Addsubcategory />} ></Route>
      <Route path="/manageusers" element={<Manageusers />} ></Route>
      <Route path="/user" element={<Userhome />} ></Route>
      <Route path="/searchproperty" element={<Searchproperty />} ></Route>
      <Route path="/viewsubcat/:catname" element={<Viewsubcat />} ></Route>
    </Routes>    

    <Footer />    

    {/* Back to Top */}
    <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i class="bi bi-arrow-up"></i></a>

    </div>
  );
}

export default App;
