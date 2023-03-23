import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import {Card, Col, Row, Button, ListGroup} from "react-bootstrap"
import './App.css';
import EpisodeList from './EpisodeList';

import bigSheldon from './images/tbbt_logo.png'

function App() {

  const [episodeIndex, setEpisodeIndex] = useState([]);
  const [episode, setEpisode] = useState({
    "id": 2913,
    "url": "http://www.tvmaze.com/episodes/2913/the-big-bang-theory-1x01-pilot",
    "name": "Pilot",
    "season": 1,
    "number": 1,
    "airdate": "2007-09-24",
    "airtime": "20:30",
    "airstamp": "2007-09-25T00:30:00+00:00",
    "runtime": 30,
    "image": {
      "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/4/12368.jpg",
      "original": "http://static.tvmaze.com/uploads/images/original_untouched/4/12368.jpg"
    },
    "summary": "<p>Is a comedy about brilliant physicists, Leonard and Sheldon, who are the kind of \"beautiful minds\" that understand how the universe works. But none of that genius helps them interact with people, especially women. All this begins to change when a free-spirited beauty named Penny moves in next door. Sheldon, Leonard's roommate, is quite content spending his nights playing Klingon Boggle with their socially dysfunctional friends, fellow Cal Tech scientists Wolowitz and Koothrappali. However, Leonard sees in Penny a whole new universe of possibilities... including love.</p>",
    "_links": { "self": { "href": "http://api.tvmaze.com/episodes/2913" } }
  })
  
  useEffect(() => {
    fetch("https://us-central1-big-bang-theory-25fd5.cloudfunctions.net/bbt363395/bbt/episodes")
    .then(res => res.json())
    .then(data => {
      const episodedata = data.data._embedded.episodes
      setEpisodeIndex(episodedata)
    });
  },[])

  const onClick = (episodeNum) => {
    setEpisode(episodeIndex[episodeNum])
    console.log(episode)
  }

  return(
      <div className="App">
        <Card className="Card">
          <Card.Header className="Card-Header">
            <Row>
              <Col>
                <img src={bigSheldon} alt="TBBT Logo" width="300"/>
              </Col>
              <Col>
                <Card.Title style={{fontSize:"30px", marginTop:20 }}>The Big Bang Theory</Card.Title>
                <Card.Title style={{fontSize:"20px"}}>Episode Directory</Card.Title>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body className="Card-Body">
            <Row>
              <Col>
                <EpisodeList episodeIndex={episodeIndex} episode={episode} onClick={onClick}>  </EpisodeList>
              </Col>
              <Col>
                <Card className="Episode-List-Card">
                  <Card.Header style={{fontSize:"20px"}} className="Card-Header">
                    Current Episode
                  </Card.Header>
                  <Col>
                    <Row>
                      <img className="Episode-Pic" src={episode.image.original} alt="new"/>
                    </Row>
                    <Row >
                      <Card.Title> S{episode.season} E{episode.number} {episode.name}</Card.Title>
                      <Card.Text>{episode.summary.replace(/<[^>]+>/g, '')}</Card.Text>
                    </Row>
                    <Row>
                      <Card.Text style={{fontSize:"10px"}}>{episode.airdate} </Card.Text>
                    </Row>
                  </Col>
               </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card> 
      </div>
  )
}

export default App;

