import React, { useEffect, useState} from 'react';
import {Card, Col, Row, Button, ListGroup} from "react-bootstrap"

function EpisodeList(props) {

    return (
      <Card className="Episode-List-Card">
        <Card.Header className="Card-Header">
            <Card.Title style={{fontSize:"20px"}}>Episode List</Card.Title>
        </Card.Header>
    
          {props.episodeIndex.map((ep, id) => {
                return (
                  <div className="episode-item" key={id}>
                    {ep.name}
                  </div>
                )
              })}

      </Card>
    )
  }
  
  export default EpisodeList;
  