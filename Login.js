import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export default function Login() {
 
  
 
  return (

    <>
      <div
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1613256253718-77ab794998ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80')",
          height: '100.3vh',
          width: '135vh',
          marginTop: '-3px',
          backgroundSize: 'cover',
          //opacity:"0.8",
          backgroundRepeat: 'no-repeat',
          color: "black",
          backgroundPosition: "right",

          position: "absolute",


        }}
      >
      </div>
      <Form style={{
        textAlign: "left",
        fontfamily: 'Goudy Old Style',
        fontSize: '20px',
        padding: "65px 60px 150px ",
        margin: "1px 45px 2px 950px",
        width: "82.8vh",
        height: '99.4vh',
        backgroundColor: 'white',
        boxShadow: '0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19)',

      }}>

        <div style={{ textAlign: "center", fontSize: '70px', }}>
          <p className="mb-4" >Login </p>
        </div>

        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
          {
          
           
             
          }
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
          
          />
          <div className="mb-4">
            <Form.Label className="mt-4">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
             
            />

            {/* <div style={{ textAlign: "right", fontStyle: "italic", fontSize: '15px' }}>

              <a href="#">Forgot Password?</a>

            </div> */}
          </div>
          <div style={{ textAlign: "left", fontSize: '24px', color:"#dba96d"}}
          
         
          
          >
          
            <a href="/Signup" > Signup</a></div>
           
          <Button type="button" class="btn btn-warning" style={{ fontSize: '21px', width: "380px", height: "52px", textAlign: "center", 
          padding: "5px 55px", margin: "50px 20px 100px 45px",backgroundColor:"#dba96d",borderColor:"#dba96d"}}
          
         
            
           
         
          >
            Login
          </Button>{" "}

        </Form.Group>

      </Form>


    </>

  );
}

