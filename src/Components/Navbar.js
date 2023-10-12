import React ,{useEffect, useState}from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
const [activeLink , setActiveLink] = useState("home");
const [scrolled , setScrolled] = useState(false);

useEffect(()=>{

    function onScroll()
    {
        if(window.scrollY > 50)
        {
            setScrolled(true);
        }
        else{
            setScrolled(false);
        }
    }

 window.addEventListener("scroll",onScroll)   ;
 return() => window.removeEventListener("scroll",onScroll);
 
},[])

function onUpdateActiveLink(value)
{
    setActiveLink(value); 
}


  return (
    <Navbar expand="lg" className={scrolled ? "scrolled":null}>
      <Container>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
         <span className="nav_bar_toggler_icon"></span>   
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==="home" ? "active navbar-link" : "navbar-link"}   onClick={()=>onUpdateActiveLink("home")} >Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink==="skills" ? "active navbar-link" : "navbar-link"} onClick={()=>onUpdateActiveLink("skills")} >Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink==="projects" ? "active navbar-link" : "navbar-link"} onClick={()=>onUpdateActiveLink("projects")} >Projects</Nav.Link>
          </Nav>
         <span className='navbar-text'>
         
         <a className='vvd' href="#contacts" ><span>Contact Me</span></a>

         </span>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default NavBar