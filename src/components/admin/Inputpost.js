import React, { useState , useEffect} from "react";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import Swal from "sweetalert2";

export default function Inputpost() {
  let navigate = useNavigate();
  const location = useLocation();
  const initialSate = {
    user_id: "",
    title: "",
    desc: "",
   picture:"",
    location: "",
   
    price: "",
    details: "",
    contact: ""
  }
  const [postdata, setPostData] = useState(initialSate);
  const [errorMsg, setErrorMsg] = useState("");
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState();

  useEffect(() => {
    var token = localStorage.getItem('token');
    var userData =  localStorage.getItem('userData');
    const dataObject = JSON.parse(userData);
    setToken(token);
    setUserData(dataObject);
  }, []);

  const applyHandler = () => {
    if (userData._id) {
      if (postdata.title) {
        if (postdata.desc) {
                       if (postdata.details) {
                        if (postdata.picture) {
                if (postdata.salary) {
                  if (postdata.contact) {
                    if (postdata.location) {
                      if (postdata.check == "on") {
                        setErrorMsg("")
                      } else {
                        setErrorMsg("Please tick privacy policy")
                      }
                    } else {
                      setErrorMsg("Please enter location")
                    }
                  } else {
                    setErrorMsg("Please enter contact")
                  }
                } else {
                  setErrorMsg("Please enter price")
                }
              } else {
                setErrorMsg("Please Add Image")
              }
              } else {
                setErrorMsg("Please enter details")
              }
                    
        } else {
          setErrorMsg("Please enter name")
        }
      } else {
        setErrorMsg("Please enter title")
      }
    } else {
      setErrorMsg("Invalid User id")
    }
    if (userData._id && postdata.title && postdata.desc && postdata.date && postdata.duration && postdata.details && postdata.salary && postdata.contact && postdata.location) {
      var URL = "http://localhost:8080/api/add-job"
      var data = {
        user_id: userData._id,
        title: postdata.title,
        desc: postdata.desc,
        picture: postdata.picture,
        location: postdata.location,
        details: postdata.details,
        salary: postdata.salary,
       
        contact: postdata.contact
      }
      fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            Swal.fire({
              title: "Successfully Created !",
              icon: "success",
              cancelButtonColor: "#C6DCE4",
              confirmButtonColor: "#C6DCE4",
              iconColor: "#F2D1D1",
              showDenyButton: false,
              showCancelButton: false,
              confirmButtonText: "Ok",
            }).then((result) => {
              if (result.isConfirmed) {
                navigate("/HireJobs");
              } else if (result.isDenied) {
              }
            });
          } else {
            Swal.fire({
              title: "error!",
              text: data?.message,
              confirmButtonColor: "#C6DCE4",
              iconColor: "#F2D1D1",
              icon: "error",
              confirmButtonText: "Ok",
            });
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          Swal.fire({
            title: "error!",
            text: error.message,
            confirmButtonColor: "#C6DCE4",
            iconColor: "#F2D1D1",
            icon: "error",
            confirmButtonText: "Ok",
          });
        });
    }

  };
  const logoutFunc = () => {
    localStorage.clear();
  }


  const [file, setFile] = useState();
  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (

    <div>
    
      <Navbar bg="light" expand="lg" className="navbar-fixed-top">
        <Container>
        <Navbar.Brand href="#Home" ></Navbar.Brand>
                <img src="https://html.fairytheme.net/queen-flowers/images/story-flowers.png" alt="Bootstrap" width="100" height="40" style={{  
                margin: "5px 0px 0px -120px  ",}} />
        <Navbar.Brand id="#Home"style={{  color: "#343a40",
                padding: "5px 200px  ",
               margin: "5px 2px 0px 400px",
                width: "20px",
                fontSize:"30px",
                fontFamily:'MV Boli',
               
               }}>  </Navbar.Brand>
        

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            style={{ padding: "8px 30px 10px 140px",fontSize:"16px",color: "#343a40",fontFamily:'Century Gothic'}}
          >
            <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
              <Nav.Link href="/Admin" style={{ paddingLeft:"40px"}}>Dashboard</Nav.Link>

             
            
              <Nav.Link href="/" style={{ paddingLeft:"40px",color: "red" }} onClick={() => logoutFunc()}>
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div
        style={{
          marginTop: "-2px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          margin: "auto",
          //position: "relative",
          backgroundPosition: "90%",
          //overflow:'hidden',
          //backgroundColor: '#D3E7EE',
          backgroundImage:
            "url('https://ld-wt73.template-help.com/tf/bridal_v1/images/home-08-945x730.jpg')",
          height: "35vh",
          width: "100%",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "#1A120B",
            opacity: "40%",
            height: "35vh",
            width: "100%",
          }}
        ></div>
      </div>


      <Form style={{
        textAlign: "left",
        fontfamily: 'Poppins',
        fontSize: '20px',
        padding: "18px 50px  ",
        margin: "-11px 15px 25px 450px",
        width: "90vh",
        height: '110vh',
        backgroundColor: '#c8c8c0',
        boxShadow: '0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19)',


      }}>



        <div style={{ textAlign: "center", fontSize: '40px', fontFamily: 'Segoe Print', }}>
          <p className="mb-4">Create New Post</p>
        </div>
        <div style={{ fontSize: '15px' }}>
          <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
            {
              errorMsg?.length > 1 ?
                <div className="mb-2 border border-danger " style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Form.Label className="text-danger text-center">{errorMsg}</Form.Label>
                </div>
                : null
            }
            <div className="mb-2">
              <Form.Label>Category</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter Category" 
                onChange={(e) =>
                  setPostData({ ...postdata, title: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter Name" 
                onChange={(e) =>
                  setPostData({ ...postdata, desc: e.target.value })
                }
              />
            </div>
           
          
            <div className="mb-3">
              <Form.Label>Details</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter Details" 
                onChange={(e) =>
                  setPostData({ ...postdata, details: e.target.value })
                }
              />
            </div>
            <Form.Label>Price</Form.Label>
            <InputGroup className="mb-3">

              <InputGroup.Text>Rs</InputGroup.Text>
              <Form.Control 
                type="currency" 
                placeholder="Enter Price" 
                onChange={(e) =>
                  setPostData({ ...postdata, salary: e.target.value })
                }
              />
              <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup>
            <div className="mb-2">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control 
                type="phone" 
                placeholder="Enter Contact Number" 
                onChange={(e) =>
                  setPostData({ ...postdata, contact: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <Form.Label>Location</Form.Label>
              <Form.Control 
                type="phone" 
                placeholder="Enter Location" 
                onChange={(e) =>
                  setPostData({ ...postdata, location: e.target.value })
                }
              />
            </div>
            <div className="mb-2">
            <input type="file" onChange={handleChange} />
            <img src={file} 
                onChange={(e) =>
                  setPostData({ ...postdata, location: e.target.value })
                }
                />
            </div>
          
          


            <Button style={{
              width: "380px", height: "50px", fontSize: '22px', textAlign: "center", padding: "10px 55px", margin: "10px 50px -50px 70px", backgroundColor: "#696750",
              borderRadius: "30px", fontFamily: "Segoe Print",
            }}
              className="mt-1"
              onClick={(e) => applyHandler(e)}
              variant="secondary"
            >
              Post
            </Button>{" "}
          </Form.Group>
        </div>
      </Form>
    </div>
  );
}
