import { Component } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardText,
  CardGroup,
  Container,
} from "reactstrap";
import { Button } from "bootstrap";
import './Home.css'
class Homepage extends Component {
  render() {
    return (
      <div>
        <CardGroup>
          <Card style={{ width: "18rem" }}>
            <CardBody style={{ color: "black" }}>
              <CardTitle tag="h1">Gallery</CardTitle>
              <CardImg variant="top" src="/asstes/220528075128-severodonetsk-ukraine-shelling-0526-large-tease.jpeg" />
              <CardText style={{ marginTop: 15 }}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
            </CardBody>
          </Card>
          <Card style={{ width: "18rem", marginLeft: 50 }}>
            <CardBody style={{ color: "black"}} className="ttt">
              
                <CardTitle tag="h1" style={{  marginLeft: 10}}>Breaking News</CardTitle>
                <CardText tag="h3" style={{ marginTop: 15, textAlign: "left" ,marginLeft: 50}}>
                  Intense Russian shelling is pounding the key city of
                  Severodonetsk in embattled Luhansk as Moscow tries to
                  consolidate its grip on eastern Ukraine
                </CardText>
            
            </CardBody>
          </Card>
        </CardGroup>
      </div>
    );
  }
}
export default Homepage;
