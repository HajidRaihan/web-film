import {Card, Col, Container, Row, Image} from 'react-bootstrap';
import duneImage from "../img/trending/dune.jpg";
import everythingImage from "../img/trending/everything.jpg";
import infiniteImage from "../img/trending/infinite.jpg";
import jokerImage from "../img/trending/joker.jpg";
import lightyearImage from "../img/trending/lightyear.jpg";
import morbiusImage from "../img/trending/morbius.jpg";




const Trending = () => {
    return (
        <div>
            <Container className='pt-3 pb-3'>
                <h1 className='text-white'>TRENDING MOVIES</h1>
                <Row>
                    <Col md={4} className='movieWrapper' id='trending'>
                        <Card className="bg-dark text-white text-center movieImage">
                            <Image src={duneImage} alt="Dune Movies" className='images'/>
                            <div className='p-2 m-2'>
                                <Card.Title className='text-center'>DUNE</Card.Title>
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
                            <Image src={everythingImage} alt="Dune Movies" className='images'/>
                            <div className='p-2 m-2'>
                                <Card.Title className='text-center'>EVERYTHING EVERYWHERE</Card.Title>
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
                            <Image src={infiniteImage} alt="Dune Movies" className='images'/>
                            <div className='p-2 m-2'>
                                <Card.Title className='text-center'>INFINITE</Card.Title>
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
                            <Image src={jokerImage} alt="Dune Movies" className='images'/>
                            <div className='p-2 m-2'>
                                <Card.Title className='text-center'>JOKER</Card.Title>
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
                            <Image src={lightyearImage} alt="Dune Movies"className='images'/>
                            <div className='p-2 m-2'>
                                <Card.Title className='text-center'>LIGHTYEAR</Card.Title>
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
                            <Image src={morbiusImage} alt="Dune Movies" className='images'/>
                            <div className='p-2 m-2'>
                                <Card.Title className='text-center'>MORBIUS</Card.Title>
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
export default Trending