import React, { useEffect, useState} from 'react';
import {Card, Col, Row, Button, ListGroup} from "react-bootstrap"

function EpisodeList(props) {

    return (
      <Card className="Episode-List-Card">
        <Card.Header style={{fontSize:"20px"}} className="Card-Header">
            Episode List
        </Card.Header>
        <ListGroup className="List-Group">
          {props.episodeIndex.map((ep, id) => {
                if(id == props.episodeIndex.findIndex(x => x.name === props.episode.name))
                {return (
                  <ListGroup.Item className="Selected-Episode-Item" key={id} onClick={() => {props.onClick(id)}}>
                    {ep.name}
                  </ListGroup.Item>
                )}
                else{
                  return (
                    <ListGroup.Item className="Episode-Item" key={id} onClick={() => {props.onClick(id)}}>
                      {ep.name}
                    </ListGroup.Item>
                  )
                }
              })}
        </ListGroup>
      </Card>
    )
  }
  
  export default EpisodeList;
  