import { Component } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  Container,
  Button,
  CardGroup,
  CardSubtitle,
} from "reactstrap";
import "./aboutMepage.css";
import { CardText } from "reactstrap";
class AboutMepage extends Component {
  render() {
    return (
      <div class="container  bg-white mt-5 mb-5">
        <div class="row">
          <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
              <img src="/asstes/profile.jpeg" />
              <span
                class="font-weight-bold"
                style={{ color: "black", marginTop: 10 }}
              >
                Doge To the Moon
              </span>
              <span class="text-black-50">edogaru@mail.com.my</span>
              <span> </span>
            </div>
          </div>
          <div
            class="col-md-5 border-right"
            style={{ color: "black", marginTop: 10 }}
          >
            <div class="p-2 py-5">
              <div class="d-flex">
                <div class="d-flex flex-column">
                  <h2 class="p-2">Nattapat Teeranuntachai</h2>
                  <p class="p">
                    Currently studying for the first yer of Kmutt University
                  </p>
                  <p class="p">Graduated from phapathom School</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CardGroup style={{ padding:20 }}>
          <Card style={{ backgroundColor: "#282c34", color: "white" }}>
            <CardBody>
              <CardTitle tag="h3">Favorite Subject</CardTitle>
              <CardText>
                <div class="list-group">
                  <a
                    href="#"
                    class="list-group-item list-group-item-action flex-column align-items-start"
                  >
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">CSC105</h5>
                    </div>
                    <p class="mb-1">
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
                    </p>
                  </a>
                  <a
                    href="#"
                    class="list-group-item list-group-item-action flex-column align-items-start"
                  >
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">CSC209</h5>
                    </div>
                    <p class="mb-1">
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
                    </p>
                  </a>
                  <a
                    href="#"
                    class="list-group-item list-group-item-action flex-column align-items-start"
                  >
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">GEN241</h5>
                    </div>
                    <p class="mb-1">
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
                    </p>
                  </a>
                </div>
              </CardText>
            </CardBody>
          </Card>
          <Card style={{ backgroundColor: "#282c34", color: "white" }}>
            <CardBody>
              <CardTitle tag="h3">Favorite Movie</CardTitle>
              <CardText>
                <div class="list-group">
                  <a
                    href="#"
                    class="list-group-item list-group-item-action flex-column align-items-start"
                  >
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">IronMan</h5>
                    </div>
                    <p class="mb-1">
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
                    </p>
                  </a>
                  <a
                    href="#"
                    class="list-group-item list-group-item-action flex-column align-items-start"
                  >
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">Ironman2</h5>
                    </div>
                    <p class="mb-1">
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
                    </p>
                  </a>
                  <a
                    href="#"
                    class="list-group-item list-group-item-action flex-column align-items-start"
                  >
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">Ironman3</h5>
                    </div>
                    <p class="mb-1">
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
                    </p>
                  </a>
                </div>
              </CardText>
            </CardBody>
          </Card>
        </CardGroup>
      </div>
    );
  }
}
export default AboutMepage;
