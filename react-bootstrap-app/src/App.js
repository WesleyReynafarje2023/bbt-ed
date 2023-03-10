import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Card, Col, Row} from "react-bootstrap"
import './App.css';

//https://www.pluralsight.com/guides/how-to-set-up-a-react-bootstrap-app

function App() {
  return(
      <div className="App">
        <Card className="Card">
          <Card.Header className="Card-Header">
            <Row>
              <Col>The Biggest Bangiest Theoriest BBT episode directory</Col>
              <Col>2 of 2</Col>
            </Row>
          </Card.Header>
          <Card.Body className="Card-Body">
            YOOOOOY
          </Card.Body>
        </Card> 
      </div>
  )
}

export default App;

