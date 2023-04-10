import Icon from "./components/Icon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card, CardBody, Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import { useState } from "react";

const itemArray = new Array(9).fill("empty");

export default function App() {
  const [marked, setMarked] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const isReload = () => {
    setMarked(false);
    setWinMessage("");
    itemArray.fill("empty", 0, 9);
  };

  const checkWinner = () => {
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[1] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} wins`);
      toast(`${itemArray[0]} wins`, { type: "success" });
    } else if (
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5] &&
      itemArray[3] !== "empty"
    ) {
      setWinMessage(`${itemArray[3]} wins`);
      toast(`${itemArray[3]} wins`, { type: "success" });
    } else if (
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8] &&
      itemArray[6] !== "empty"
    ) {
      setWinMessage(`${itemArray[6]} wins`);
      toast(`${itemArray[6]} wins`, { type: "success" });
    } else if (
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} wins`);
      toast(`${itemArray[0]} wins`, { type: "success" });
    } else if (
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7] &&
      itemArray[1] !== "empty"
    ) {
      setWinMessage(`${itemArray[1]} wins`);
      toast(`${itemArray[1]} wins`, { type: "success" });
    } else if (
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8] &&
      itemArray[2] !== "empty"
    ) {
      setWinMessage(`${itemArray[2]} wins`);
      toast(`${itemArray[2]} wins`, { type: "success" });
    } else if (
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} wins`);
      toast(`${itemArray[0]} wins`, { type: "success" });
    } else if (
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6] &&
      itemArray[2] !== "empty"
    ) {
      setWinMessage(`${itemArray[2]} wins`);
      toast(`${itemArray[2]} wins`, { type: "success" });
    }
  };

  const isCheked = (index) => {
    if (itemArray[index] === "empty") {
      itemArray[index] = marked ? "cross" : "circle";
      setMarked(!marked);
    } else {
      return toast("Already filled!", { type: "error" });
    }
    checkWinner();
  };
  const checkReload = () => {
    //to appear reload button
    let count = 0;
    itemArray.forEach((element) => {
      if (element !== "empty") count++;
    });
    if (count === 9) return true;
  };

  return (
    <Container className="container">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          <h2 className="text-center p-2">Tic Tac Toe</h2>
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card className="card" onClick={() => isCheked(index)}>
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
          {winMessage ? (
            <button className="btn" color="success" onClick={isReload}>
              Reload Game
            </button>
          ) : checkReload() ? (
            <button className="btn" color="success" onClick={isReload}>
              Reload Game
            </button>
          ) : (
            console.log("Error")
          )}
        </Col>
      </Row>
    </Container>
  );
}
