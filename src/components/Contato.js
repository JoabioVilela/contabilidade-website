import { Col, Container, Row } from 'react-bootstrap';
import QrCode from "../assets/images/qr-code-contato.png"

function Contato() {
  return (

    <Container className='contato' id='contato'>
      <Row>
        
        <Col className='center'>
         <h2>Contato e Endereço</h2><br/>
        </Col>
        
        </Row>

      <Row>
<Col className='avanco-margem'>

<span>Funcionamos de segunda-feira à sábado, das 8 às 18h</span><br/><br/><br/>

      <span>Telefone: (71) 9 9613 7000</span><br/>

      <span>E-mail: kabcontabilidade@gmail.com.br</span><br/><br/>

    <span>Endereço:<br/> <b>Praça Aquilino de Brito, Nº 56, </b><br/>
      <i>Marcionílio Souza - Bahia</i></span><br/>

</Col>

<Col className='center'>
<br/>
    <img
    alt=''
       src= {QrCode}
    />

</Col>


    </Row>
  <Row>

  <Col>

<div className='map-responsive'>

<iframe title="Mapa da localização"
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5113047122372!2d-40.5330406!3d-13.0030786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x74037db049fa243%3A0x22259320f791353e!2sKAB%20Contabilidade!5e0!3m2!1spt-BR!2sbr!4v1684780999991!5m2!1spt-BR!2sbr"
 allowfullscreen="" loading="lazy" width="1200" height="1200"
referrerpolicy="no-referrer-when-downgrade">

 </iframe>

</div>

</Col>

  </Row>
    </Container>
  );
}

export default Contato;