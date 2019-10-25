import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import TopNav from './Panel-TopNav';
import LeftNav from './Panel-LeftNav';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class Panel extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <TopNav></TopNav>
        <div>
          <div>
            <LeftNav></LeftNav>
          </div>
          <div>
            <h1>Dividing</h1>
            <Card style={{width: '18rem'}}>
              <Card.Img
                variant='top'
                src='https://imgur.com/gallery/xn4cYl4.png'
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href='#'>Card Link</Card.Link>
                <Card.Link href='#'>Another Link</Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Panel;