import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Login() {
  let navigate = useNavigate();
  const initialSate = {
    email: "",
    password: ""
  }
  const [loginData, setloginData] = useState(initialSate);
  const [errorMsg, setErrorMsg] = useState("");

  const loginHandler = (e) => {

    if (loginData.email) {
      if (loginData.password) {
        setErrorMsg("")
      } else {
        setErrorMsg("Please enter your password")
      }
    } else {
      setErrorMsg("Please enter your email")
    }
    if (loginData.email && loginData.password) {
      var URL = "http://localhost:8080/api/login"
      var data = {
        email: loginData.email,
        password: loginData.password
      }
      fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          if (data.success) {
            localStorage.setItem('token', data.data.token);
            localStorage.setItem('userData', JSON.stringify(data.user));
            if (data.user == "User") {
              navigate("/Home");
          
            } else if(data.user.userType == "Admin") {
              navigate("/Admin");
            }
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
           errorMsg?.length > 1 ?
           <div className="mb-2 border border-danger " style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
             <Form.Label className="text-danger text-center">{errorMsg}</Form.Label>
           </div>
           : null
           
             
          }
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            onChange={(e) =>
              setloginData({ ...loginData, email: e.target.value })
            }
          />
          <div className="mb-4">
            <Form.Label className="mt-4">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setloginData({ ...loginData, password: e.target.value })
              }
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
          
          onClick={(e) => loginHandler(e)}
            
           
         
          >
             <a href="/Home" style={{color:"white"}}>
           Login</a>
          </Button>{" "}

        </Form.Group>

      </Form>


    </>

  );
}

