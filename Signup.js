import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";


export default function Signup() {
  let navigate = useNavigate();
  const initialSate = {
    name: "",
    phone: "",
    age: "",
    address: "",
    email: "",
    password: ""
  }
  const [regData, setRegData] = useState(initialSate);
  const [errorMsg, setErrorMsg] = useState("");

 

  const loginHandler = (e) => {
    if (regData.name) {
      if (regData.phone) {
       
          if (regData.address) {
            if (regData.email) {
              if (regData.password) {
                setErrorMsg("")
              } else {
                setErrorMsg("Please enter your password")
              }
            } else {
              setErrorMsg("Please enter your email")
            }
          } else {
            setErrorMsg("Please enter your address")
          }
       
      } else {
        setErrorMsg("Please enter your phone")
      }
    } else {
      setErrorMsg("Please enter your name")
    }
    if (regData.address && regData.age && regData.email && regData.name && regData.password && regData.phone ) {
      var URL = "http://localhost:8080/api/register"
      var data = {
        name: regData.name,
        phone: regData.phone,
       
        address: regData.address,
        email: regData.email,
        
        password: regData.password
      }
     
       
    }
  };

  return (
    <>
      <div
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1613256253718-77ab794998ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80')",
          height: '100.5vh',
          width: '130.3vh',
          backgroundSize: 'cover',
          //opacity:"0.8",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: "center",
          margin: "-1px 2px 0px 630px",
          position: "fixed",


        }}
      >
      </div>
      <Form style={{
        textAlign: "left",
        fontfamily: 'Poppins',
        fontSize: '20px',
        padding: "8px 50px  ",
        margin: "1px 15px 2px 1px",
        width: "90vh",
        height: '99.6vh',
        backgroundColor: 'white',
        boxShadow: '0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19)',

      }}>



        <div style={{ textAlign: "center", fontSize: '60px' }}>
          <p className="mb-2">Signup</p>
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
            <div className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                onChange={(e) =>
                  setRegData({ ...regData, name: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="phone"
                placeholder="Enter your phone"
                onChange={(e) =>
                  setRegData({ ...regData, phone: e.target.value })
                }
              />
            </div>
            {/* <div className="mb-2">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your age"
                onChange={(e) =>
                  setRegData({ ...regData, age: e.target.value })
                }
              />
            </div> */}
            <div className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your address"
                onChange={(e) =>
                  setRegData({ ...regData, address: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your email"
                onChange={(e) =>
                  setRegData({ ...regData, email: e.target.value })
                }
              />
            </div>
           
            <div className="mb-3">
              <Form.Label className="mt-1">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  setRegData({ ...regData, password: e.target.value })
                }
              />
            </div>

            <div style={{ textAlign: "left", fontSize: '20px' }}>
              Already registered <a href="/login" > Login </a></div>

            <Button style={{ width: "380px", height: "50px", fontSize: '19px', textAlign: "center", padding: "10px 55px", margin: "70px 30px 10px 50px",backgroundColor:"#dba96d",borderColor:"#dba96d" }}
              className="mt-5"
              onClick={(e) => loginHandler(e)}
             
            >
              <a href="/Home" > Signup </a>
            </Button>{" "}
          </Form.Group>
        </div>
      </Form>


    </>
  );
}
