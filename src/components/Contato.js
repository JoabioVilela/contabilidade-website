import { Col, Container, Row } from 'react-bootstrap';
import QrCode from "../assets/images/qr-code-contato.png"
import WhatsAppButton from './WhatsAppButton';

function Contato() {
  return (

    <Container fluid className='contato' id='contato'>
      <Container>
        <Row>
          <Col className='center'>
            <h1>CONTATO</h1><br/>
          </Col>
        </Row>

        <Row>
          <Col>
            <h4>Funcionamos de segunda-feira à sábado, das 8 às 18h</h4>
            <h4>Telefone: (71) 9 9613 7000</h4><br/>
            <h4>E-mail: kabcontabilidade@gmail.com.br</h4><br/>

            <h4>Endereço:</h4>
            <h4>Praça Aquilino de Brito, Nº 56, </h4>
            <h4>Marcionílio Souza - Bahia</h4>
          </Col>

          <Col className='area-wp'>
              <WhatsAppButton /> <br/>
              <h4>Ou escanei o QR Code</h4>
              <img
                alt=''
                src= {QrCode}
                width={400}
                className="hide-on-mobile"
                />
          </Col>
        </Row>
      </Container>

      <div className='Mapa'>
          <Col>
            <div className='map-responsive'>
              <iframe title="Mapa da localização"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5113047122372!2d-40.5330406!3d-13.0030786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x74037db049fa243%3A0x22259320f791353e!2sKAB%20Contabilidade!5e0!3m2!1spt-BR!2sbr!4v1684780999991!5m2!1spt-BR!2sbr"
                allowfullscreen="" loading="lazy" width="1200" height="1200"
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </Col>
      </div>

    </Container>
  );
}

export default Contato;