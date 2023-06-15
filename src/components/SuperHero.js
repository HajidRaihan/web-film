import {Card, Col, Container, Row, Image} from 'react-bootstrap';
import antmanImage from "../img/superhero/antman.jpg";
import avengerImage from "../img/superhero/avenger.jpg";
import batmanImage from "../img/superhero/batman.jpg";
import robinhoodImage from "../img/superhero/robinhood.jpg";
import spidermanImage from "../img/superhero/spiderman-cover.jpg";
import supermanImage from "../img/superhero/superman.jpg";




const SuperHero = () => {
    return (
        <div>
            <Container className='pt-3 pb-3'>
                <h1 className='text-white'>SUPERHERO MOVIES</h1>
                <Row>
                    <Col md={4} className='movieWrapper' id='superhero'>
                        <Card className="bg-dark text-white text-center movieImage">
                            <Image src={antmanImage} alt="Dune Movies" className='images'/>
                            <div className='p-2 m-2'>
                                <Card.Title className='text-center'>ANTMAN</Card.Title>
                                <Card.Text className='text-left'>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className='movieWrapper'>
                        <Card className="bg-dark text-white text-center movieImage">
                            <Image src={avengerImage} alt="Dune Movies" className='images'/>
                            <div className='p-2 m-2'>
                                <Card.Title className='text-center'>AVENGER</Card.Title>
                                <Card.Text className='text-left'>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className='movieWrapper'>
                        <Card className="bg-dark text-white text-center movieImage">
                            <Image src={batmanImage} alt="Dune Movies" className='images'/>
                            <div className='p-2 m-2'>
                                <Card.Title className='text-center'>BATMAN</Card.Title>
                                <Card.Text className='text-left'>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                
                    <Col md={4} className='movieWrapper'>
                        <Card className="bg-dark text-white text-center movieImage">
                            <Image src={robinhoodImage} alt="Dune Movies" className='images'/>
                            <div className='p-2 m-2'>
                                <Card.Title className='text-center'>ROBINHOOD</Card.Title>
                                <Card.Text className='text-left'>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className='movieWrapper'>
                        <Card className="bg-dark text-white text-center movieImage">
                            <Image src={spidermanImage} alt="Dune Movies"className='images'/>
                            <div className='p-2 m-2'>
                                <Card.Title className='text-center'>SPIDERMAN</Card.Title>
                                <Card.Text className='text-left'>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className='movieWrapper'>
                        <Card className="bg-dark text-white text-center movieImage">
                            <Image src={supermanImage} alt="Dune Movies" className='images'/>
                            <div className='p-2 m-2'>
                                <Card.Title className='text-center'>SUPERMAN</Card.Title>
                                <Card.Text className='text-left'>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
        
    )
}
export default SuperHero