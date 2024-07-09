import { Col, Container, Row } from "react-bootstrap";

function Servicos() {
    return(

        <Container className="servicos" id="servicos">
            <Row>
                <Col className='center'>
                <h1>SERVIÇOS</h1><br/>
                </Col>
            </Row>
            <div className="servicos-texto">
            <Row>
              <Col >
              <p><h2>Abertura, alteração, baixa e contabilidade de empresa, associações e cooperativas</h2></p>
              </Col>
              <Col>
              <p><h2>Regularização as declarações (DCTF, GFIP, RAIS, DASN-MEI, DIRF, SPED, E-SOCIAL)</h2></p>
              </Col>
              <Col >
              <p><h2>Emissão de certificado digital - A1 ou A3 - (PRESENCIAL)</h2></p>
              </Col>  
            </Row>

            <Row>
              <Col >
              <p><h2>Regularização de CPF, CNPJ, PIS, DRSC</h2></p>
              </Col>
              <Col >
              <p><h2>Declaração de imposto de renda e Declaração de ITR</h2></p>
              </Col>
              <Col >
              <p><h2>Abertura e/ou regularização da matrícula CEI/CAEPF</h2></p>
              </Col>  
            </Row>
            
            <Row>
              <Col >
              <p><h2>Regularização das intimações fiscais</h2></p>
              </Col>
              <Col >
              <p><h2>Parcelamento de impostos federais, estaduais e municipais</h2></p>
              </Col>
              <Col >
              <p><h2>Cálculo de rescisão trabalhista e extratos previdenciários</h2></p>
              </Col>  
            </Row>
            <Row>
              <Col >
              <p><h2>Pedido de aposentadoria urbana e/ou rural</h2></p>
              </Col>
              <Col >
              <p><h2>Pedido de auxílios (doença, acidente, pensão, etc.), junto ao INSS</h2></p>
              </Col>
              <Col >
              <p><h2>Prestação de contas de campanha eleitoral do candidato e/ou partido, junto ao TRE</h2></p>
              </Col>
            </Row>
            </div>
        </Container>
    );
}

export default Servicos;