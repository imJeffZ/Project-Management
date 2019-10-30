import React from 'react';
import TopNav from './components/Home/TopNav';
import LeftNav from './components/Home/LeftNav';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import PopupAction from './components/Project/PopupAction'
import ListGroup from 'react-bootstrap/ListGroup';

class Home extends React.Component {
	state = {};
	render() {
		return (
			<div>
				<div className='container-fluid p-0'>
					<TopNav />
					<div className='row'>
						<div className='col'>
							<LeftNav />
						</div>
						<div className='col'>
							<Card style={{ width: '18rem' }}>
								<Card.Img variant='top' src='https://imgur.com/gallery/xn4cYl4.png' />
								<Card.Body>
									<Card.Title>Card Title</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the
										card's content.
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
				<PopupAction />
			</div>
		);
	}
}
export default Home;
