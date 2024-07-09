import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row } from 'react-bootstrap';
import Imagem1 from "../assets/images/Banner1.jpeg";
import Imagem2 from "../assets/images/Banner2.jpeg";

function Carrossel() {

  return (

    <Container fluid className='carousel'>
      <Row>
    <Carousel indicators={true} controls={false} >

      <Carousel.Item className='center'>

      <img
       class="img-fluid"
       id="img-carousel"
       alt=''
       src= {Imagem1}
      />

      </Carousel.Item>

      <Carousel.Item className='center'>

      <img
       class="img-fluid"
       id="img-carousel"
       alt=''
       src= {Imagem2}
       />

      </Carousel.Item>

    </Carousel>
    </Row>
    </Container>
  );
}

export default Carrossel;