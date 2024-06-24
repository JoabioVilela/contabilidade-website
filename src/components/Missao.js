import { Container, Row, Col } from "react-bootstrap";

function Missao() {
    return(
            <Container className="missao">

                <Row><Col className='center'><h2>Nossa missão</h2><br/></Col></Row>
                <Row><Col className='center'>Ajudamos os empreendedores a se prepararem para abrir suas empresas, alterar, e dar baixa.
                    E também oferecemos soluções de contabilidade.</Col>
                </Row>
            </Container>
    );
}

export default Missao;