import { Col, Container, Row } from "react-bootstrap";

function Servicos() {
    return(

        <Container className="servicos" id="servicos">
            <Row>
                <Col className='center'>
                <h2>Nossos Serviços</h2><br/>
                </Col>
            </Row>
            <div className="servicos-texto">
            <Row>
              <Col >
              <p>Abertura, alteração, baixa e contabilidade de empresa, associações e cooperativas</p>
              </Col>
              <Col>
              <p>Regularização as declarações (DCTF, GFIP, RAIS, DASN-MEI, DIRF, SPED, E-SOCIAL)</p>
              </Col>
              <Col >
              <p>Emissão de certificado digital - A1 ou A3 - (PRESENCIAL)</p>
              </Col>  
            </Row>

            <Row>
              <Col >
              <p>Regularização de CPF, CNPJ, PIS, DRSCI</p>
              </Col>
              <Col >
              <p>Declaração de imposto de renda e Declaração de ITR</p>
              </Col>
              <Col >
              <p>Abertura e/ou regularização da matrícula CEI/CAEPF</p>
              </Col>  
            </Row>
            
            <Row>
              <Col >
              <p>Regularização das intimações fiscais</p>
              </Col>
              <Col >
              <p>Parcelamento de impostos federais, estaduais e municipais</p>
              </Col>
              <Col >
              <p>Cálculo de rescisão trabalhista e extratos previdenciários</p>
              </Col>  
            </Row>
            <Row>
              <Col >
              <p>Pedido de aposentadoria urbana e/ou rural</p>
              </Col>
              <Col >
              <p>Pedido de auxílios (doença, acidente, pensão, etc.), junto ao INSS</p>
              </Col>
              <Col >
              <p>Prestação de contas de campanha eleitoral do candidato e/ou partido, junto ao TRE</p>
              </Col>
            </Row>
            </div>
        </Container>
    );
}

export default Servicos;