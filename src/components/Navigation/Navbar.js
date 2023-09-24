import { backgroundColorNames } from "chalk";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavigationBar() {
  return (
    
    <Navbar variant="light" bg="light" expand="lg" className="navbar-fixed-top"  >
      
      <Container>
     
      
      
 
        <Navbar.Brand href="#Home" ></Navbar.Brand>
                <img src="https://html.fairytheme.net/queen-flowers/images/story-flowers.png" alt="Bootstrap" width="100" height="40" style={{  
                margin: "5px 0px 0px -120px  ",}} />
        <Navbar.Brand id="#Home"style={{  color: "#343a40",
                padding: "5px 200px  ",
               margin: "5px 2px 0px 5px",
                width: "20px",
                fontSize:"30px",
                fontFamily:'MV Boli',
               
               }}>  </Navbar.Brand>
        
             

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ padding: "8px 30px 10px 140px",fontSize:"16px",color: "#343a40",fontFamily:'Century Gothic'
       }}>
          <Nav className="me-auto">
            
          <Nav.Link href="/Home">Home</Nav.Link>
          <Nav.Link href="/FlowerBoquet"style={{ paddingLeft:"40px"}}>FlowerBoquet </Nav.Link>
          <Nav.Link href="/Cakes"style={{ paddingLeft:"40px"}}>Cakes</Nav.Link>
          <Nav.Link href="/Photographer"style={{ paddingLeft:"40px"}}>Photographer</Nav.Link>
          <Nav.Link href="/MakeupArtist"style={{ paddingLeft:"40px"}}>MakeupArtist</Nav.Link>
          <Nav.Link href="/" style={{ paddingLeft:"40px",color: "red" }}>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
       
      </Container>
     
    </Navbar>
   
  );
}


