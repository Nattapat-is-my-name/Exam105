import { Component } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Button,
  CardGroup,
  CardSubtitle,
  Popover,
  PopoverBody,
  PopoverHeader,
} from "reactstrap";

export default class PhotoGallerypage extends Component {
  render() {
    const imageClick = () => {
      alert(" short description!!!");
    };
    return (
      <CardGroup >
        <Card style={{margin :10}}>
          <img
            src="https://picsum.photos/318/180"
            onClick={() => imageClick()}
            
          />
        </Card>
        <Card style={{margin :10}}>
        <img
            src="https://picsum.photos/318/180"
            onClick={() => imageClick()}
          />
        </Card>
        <Card style={{margin :10}}>
        <img
            src="https://picsum.photos/318/180"
            onClick={() => imageClick()}
          />
        </Card>
        <Card style={{margin :10}}>
        <img
            src="https://picsum.photos/318/180"
            onClick={() => imageClick()}
          />
        </Card>
      </CardGroup>
    );
  }
}
