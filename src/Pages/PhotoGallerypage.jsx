import { Component, React } from "react";
import {
  Card,
  CardGroup,
  ModalFooter,
  Container,
  Button,
  Modal,
} from "reactstrap";
import { connect } from "react-redux";
import { addtodos } from "../Redux/createStore";
class PhotoGallerypage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      title: "",
      message: "",
      score: "",
      id: "",
    };

    this.toggle = this.toggle.bind(this);
    this.toggle2 = this.toggle2.bind(this);
  }
  addtodos = () => {
    this.props.addtodos({
      title: this.state.title,
      message: this.state.message,
      score: this.state.score,
      id: this.state.id,
    });
  };
  hanndleSubmit = (e) => {
    e.preventDefault();
    const title = this.state.title;
    const message = this.state.message;
    const score = this.state.score;
    const id = new Date().toString;
    const data = {
      title,
      message,
      score,
      id,
    };
    this.addtodos();
    console.log(data);
  };

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }
  toggle2() {
    this.setState({
      modal2: !this.state.modal2,
    });
  }
  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal2}>
          <Container style={{ padding: 10 }} onClick={this.toggle2}>
            <div style={{ padding: 10 }}>
              <p>Your Name : {this.state.title}</p>

              <p>Your Message : {this.state.message}</p>

              <p>View Your Score : {this.state.score}</p>
            </div>
          </Container>
        </Modal>
        <Modal isOpen={this.state.modal}>
          <Container style={{ padding: 10 }}>
            <form
              style={{ padding: 10, paddingTop: 20 }}
              onSubmit={this.hanndleSubmit}
            >
              <div class="form-group">
                <label>Name</label>
                <input
                  type="text"
                  value={this.state.title}
                  class="form-control"
                  placeholder="Enter Name"
                  onChange={(e) => this.setState({ title: e.target.value })}
                  required
                />
              </div>
              <div class="form-group">
                <label>Comment</label>
                <input
                  type="text"
                  value={this.state.message}
                  class="form-control"
                  placeholder="Need To Say Something?"
                  onChange={(e) => this.setState({ message: e.target.value })}
                  required
                />
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox2"
                  value={this.state.score}
                  onChange={() => this.setState({ score: 1 })}
                />
                <label class="form-check-label" for="inlineCheckbox2">
                  1
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox2"
                  value={this.state.score}
                  onChange={() => this.setState({ score: "2" })}
                />
                <label class="form-check-label" for="inlineCheckbox2">
                  2
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox2"
                  value={this.state.score}
                  onChange={() => this.setState({ score: "3" })}
                />
                <label class="form-check-label" for="inlineCheckbox2">
                  3
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox2"
                  value={this.state.score}
                  onChange={() => this.setState({ score: "4" })}
                />
                <label class="form-check-label" for="inlineCheckbox2">
                  4
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox2"
                  value={this.state.score}
                  onChange={() => this.setState({ score: "5" })}
                />
                <label class="form-check-label" for="inlineCheckbox2">
                  5
                </label>
              </div>

              <ModalFooter>
                <Button type="submit" color="primary" onClick={this.toggle}>
                  {" "}
                  Submit{" "}
                </Button>{" "}
                <Button color="secondary" onClick={this.toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </form>
          </Container>
        </Modal>

        <CardGroup>
          <Card style={{ margin: 10 }} onClick={this.toggle}>
            <img src="https://picsum.photos/318/180" />
          </Card>

          <Card style={{ margin: 10 }} onClick={this.toggle}>
            <img src="https://picsum.photos/318/180" />
          </Card>
          <Card style={{ margin: 10 }} onClick={this.toggle}>
            <img src="https://picsum.photos/318/180" />
          </Card>
          <Card style={{ margin: 10 }} onClick={this.toggle}>
            <img src="https://picsum.photos/318/180" />
          </Card>
        </CardGroup>
        <Button style={{ marginTop: 100 }} onClick={this.toggle2}>
          Click Here To See Comment Detail
        </Button>
      </div>
    );
  }
}
export default connect((state) => ({ ...state }), { addtodos })(
  PhotoGallerypage
);
