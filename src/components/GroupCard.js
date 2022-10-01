import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "../css/groupcard.css";
import CardGroup from "react-bootstrap/CardGroup";
import { Container, Row, NavLink } from "react-bootstrap";
import Sweet from "../images/Sweet.png";
// import Chilli from '../images/Chilli.png';
import Dropdown from "react-bootstrap/Dropdown";

// import Sweet from '../images/Sweet.png';

function GroupCard() {

  return (
    <>
      <Container>
        <Row className="row">
          <div className="newheading">
            <h3>New Arrivals</h3>
          </div>
          {Array(4).fill(0).map((eachItem) => (
            <div className="col-lg-3">
            <CardGroup>
              <Card className="card-overflow">
                <div className="imgbg">
                  <div className="discount">32% off</div>
                  <Card.Img
                    variant="top"
                    src={Sweet}
                    alt="sweet"
                    className="cardimg"
                  />
                </div>
                <div className="cardfooter">
                  <small className="smallfont">Buy Anita's kitchen</small>

                  <small className="text-muted">
                    {" "}
                    <span className="star"> &#9733;</span>4.9
                    <span className="rating">(98)</span>
                  </small>
                </div>
                <div className="titlename">
                  <p className="sweetname">
                    Bessan Laddu <span className="subtitle">(Desi Ghee)</span>
                  </p>
                </div>

                <div className="price">
                  <p className="saling">
                    ₹599{" "}
                    <span className="originalprice">
                      <s>₹999</s>{" "}
                      <small className="saving">You save ₹100 </small>
                    </span>
                  </p>
                </div>

                <div className="dropdown">
                  <Dropdown>
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="item-weight"
                    >
                      1200gm
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">1000gm</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">750gm</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">500gm</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <div>
                    <NavLink className="cardbtn" to="/">
                      Shop Now
                    </NavLink>
                  </div>
                </div>
              </Card>
            </CardGroup>
          </div>
          ))}
          
        </Row>
      </Container>
    </>
  );
  
}

export default GroupCard;

