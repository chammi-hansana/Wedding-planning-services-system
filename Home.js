import React from "react";
import NavigationBar from "./Navigation/Navbar";
import Carousel from "react-bootstrap/Carousel";

export default function Home() {
  return (
    <div>
      <NavigationBar />

      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
          height: "102vh",
          width: "218.5vh",
          marginTop: "-80vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          margin: "auto",
          //display: "fixed",
          backgroundPosition: "center",
          opacity: "0.8",
        }}
      >
        <div
          style={{
            textAlign: "center",
            fontSize: "115px",
            color: "#FFFFFF",
            fontFamily: "Goudy Old Style",
          }}
        >
          {" "}
          <hr
            className="mt-0 mb-4"
            style={{ padding: "250px 20px 0px 90px" }}
          />
          <p className="mb-8">Happily Ever&nbsp; &nbsp; After Weddings</p>
        </div>
        <div
          style={{
            backgroundImage:
              "url('https://html.fairytheme.net/wedding-story/img/leaf.png')",
            backgroundRepeat: "no-repeat",
            margin: "-10px 10px 0px 0px",
          }}
        ></div>
      </div>

      <div
        style={{
          textAlign: "center",
          fontSize: "70px",
          color: "#343a40",
          fontFamily: "Goudy Old Style",
          padding: "30px 60px 0px 100px",
        }}
      >
        <p className="mb-1">A b o u t ?</p>
      </div>

      <div
        style={{
          textAlign: "justify",
          fontSize: "17px",
          margin: "10px 260px 30px 240px",
          fontFamily: "Century Gothic",
        }}
      >
        <p className="mb-1">
          Wedding Planning Services System will offer a range of features and
          functions, including a flower bouquet category, indoor and outdoor
          celebration planning, photographers, and makeup artists, among others.
          These features will enable couples to easily browse, compare, and book
          wedding vendors and services, all from one centralized platform.
        </p>
      </div>

      <div
        style={{
          height: "80vh",
          width: "180vh",
          background: "#FFF5EB",
          margin: "120px 10px 30px 140px",
        }}
      >
        <div
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80')",
            display: "flex",
            height: "40vh",
            width: "50vh",
            backgroundSize: "cover",
            //opacity:"0.8",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            marginTop: "10px",

            //position: "fixed",
          }}
        >
          <div
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1501901609772-df0848060b33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
              display: "flex",
              height: "47vh",
              width: "55vh",
              backgroundSize: "cover",
              //opacity:"0.8",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              margin: "230px 20px 0px 180px",

              //position: "fixed",
            }}
          >
            <div
              style={{
                margin: "-200px 10px 0px 490px",
                fontFamily: "Goudy Old Style",
                fontSize: "55px",
                width: "60vh",
              }}
            >
              Our Benefits
              <div
                style={{
                  fontFamily: "Century Gothic",
                  marginTop: "-75px",
                  textAlign: "justify",
                  width: "65vh",
                }}
              >
                <br />
                <p
                  style={{
                    marginTop: "8px",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  Save time{" "}
                </p>
                <p
                  style={{
                    marginTop: "-8px",
                    fontSize: "18px",
                    fontFamily: "Century Gothic",
                  }}
                >
                  The services provided by our wedding planners can save you a
                  lot of time.{" "}
                </p>

                <p
                  style={{
                    marginTop: "8px",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Professional approach
                </p>
                <p
                  style={{
                    marginTop: "-8px",
                    fontSize: "18px",
                    fontFamily: "Century Gothic",
                  }}
                >
                  We will thoroughly plan every element of your wedding.
                </p>

                <p
                  style={{
                    marginTop: "8px",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Team of wedding experts
                </p>
                <p
                  style={{
                    marginTop: "-8px",
                    fontSize: "18px",
                    fontFamily: "Century Gothic",
                  }}
                >
                  Employs the best wedding experts.
                </p>

                <p
                  style={{
                    marginTop: "8px",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Acceptable prices
                </p>
                <p
                  style={{
                    marginTop: "-8px",
                    fontSize: "18px",
                    fontFamily: "Century Gothic",
                  }}
                >
                  Our clients value our affordable pricing policy and great
                  service.
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>

      <div
        style={{
          textAlign: "center",
          fontSize: "80px",
          color: "#343a40",
          fontFamily: "Goudy Old Style",
          padding: "30px 50px 0px 50px",
          marginTop: "150px",
        }}
      >
        <hr
          style={{
            backgroundColor: "#263A29",
            height: "1px",
            margin: "0px 400px 10px 400px",
          }}
        />
        <p className="mb-1">Facilities</p>
      </div>

      <Carousel style={{ marginTop: "50px" }}>
        <Carousel.Item>
          <img
            className="mb-1 "
            src="https://images.unsplash.com/photo-1641835928381-9fc6b2555e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
            style={{
              display: "flex",
              height: "95vh",
              width: "218.4vh",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              opacity: "0.7",
            }}
          />
          <Carousel.Caption>
            <h1 style={{ color: "#343a40" }}>Flower Boquet</h1>
            <p>
              A wedding flower bouquet is a beautiful arrangement of flowers
              that the bride carries during her ceremony.{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="mb-1"
            src="https://authenticstyle.co.uk/theme-content/uploads/2018/08/authenticstyle-the-cheese-wedding-cake.jpg"
            style={{
              display: "flex",
              height: "95vh",
              width: "218.4vh",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              opacity: "0.7",
            }}
          />

          <Carousel.Caption>
            <h1 style={{ color: "#343a40" }}>Wedding Cakes</h1>
            <p>
              Indulge in wedding cake perfection, where exquisite design meets
              irresistible flavors, creating a sweet masterpiece for your
              special day.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="mb-1"
            src="https://images.unsplash.com/photo-1623783356340-95375aac85ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80"
            style={{
              display: "flex",
              height: "95vh",
              width: "218.4vh",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              opacity: "0.7",
            }}
          />

          <Carousel.Caption>
            <h1 style={{ color: "#393E46" }}>Photographer</h1>
            <p>
              Wedding photographer captures the precious moments of a couple's
              special day, preserving them forever in stunning photographs.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="mb-1"
            src="https://images.unsplash.com/photo-1621691554154-39df33190691?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            style={{
              display: "flex",
              height: "95vh",
              width: "218.4vh",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              opacity: "0.7",
            }}
          />

          <Carousel.Caption>
            <h1 style={{ color: "#393E46" }}>Cosmetics Experts</h1>
            <p>
              A wedding cosmetics expert is a skilled professional specializing
              in bridal makeup and beauty.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div
        style={{
          height: "45vh",
          width: "218.5vh",
          background: "#F0F0F0",
        }}
      >
        <p
          style={{
            padding: "100px 40px 0px 220px",
            fontSize: "35px",
            color: "#343a40",
            fontFamily: "Century Gothic",
          }}
        >
          Location
        </p>
        <p
          style={{
            padding: "10px 40px 0px 220px",
            fontSize: "18px",
            fontFamily: "Century Gothic",
          }}
        >
          Galle,<br></br>
          Sri Lanka
        </p>

        <p
          style={{
            margin: "-160px 0px 0px 1100px",
            fontSize: "35px",
            color: "#343a40",
            fontFamily: "Century Gothic",
          }}
        >
          Contact
        </p>
        <p
          style={{
            margin: "30px 0px 0px 1100px",
            fontSize: "18px",
            fontFamily: "Century Gothic",
          }}
        >
          Let's talk about your event<br></br>
          We're here to help.<br></br>
          +94 912 256 234
        </p>
      </div>
    </div>
  );
}
