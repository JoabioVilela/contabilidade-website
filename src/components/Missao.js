import { Container, Row, Col } from "react-bootstrap";

function Missao() {
    return(
            <Container fluid className="missao" id="missao">
                <Container>
                    <Row><Col className='center'><h1>MISSÃO</h1><br/></Col></Row>
                    <Row><Col className='center'><p>Ajudamos os empreendedores a se prepararem para abrir suas empresas, alterar, e dar baixa.
                        E também oferecemos soluções de contabilidade.</p></Col>
                    </Row>
                </Container>
            </Container>
    );
}

export default Missao;