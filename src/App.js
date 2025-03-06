import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import CrudPage from "./CurdPage";
import Login from "./Login/Login";
import './App.css'



function App()
    {
return(

<Router>
<div className="App">
<nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
<div className="container-fluid">
<Link to="/" className="navbar-brand">SK PERFUME SHOP</Link>
<button className="navbar-toggler" type="button" data-bs-toggler="collapse" data-bs-target="#navbarnav" aria-controls="navbarNav" aria-expanded="false"  aria-label="Togglenavigation">
    <span className="navbar-toggler-icon"></span>
</button>
<input type="text" placeholder="Search-Products" className="search-box"/>
<div className="collapse navbar-collapse" id="navbarNav">

<ul className="navbar-nav ms-auto">
<li className="nav-item">
    <Link to="/" className="nav-link active" aria-current="page">Home</Link>
</li>
<li className="nav-item">
    <Link to="/login" className="nav-link active" aria-current="page">Login</Link>
</li>

<li className="nav-item">
    <Link to="/crud" className="nav-link active">Blogs</Link>
</li>

</ul>


</div>
</div>
</nav>



<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/crud" element={<CrudPage/>}/>
    <Route path="/login" element={<Login/>}/>
</Routes>






</div>
</Router>




)

    }

    export default App;