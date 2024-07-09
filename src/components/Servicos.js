import { Col, Container, Row } from "react-bootstrap";

function Servicos() {
    return(

      <Container fluid>
        <Container className="servicos" id="servicos">
            <Row>
                <Col className='center'>
                <h1>SERVIÇOS</h1><br/>
                </Col>
            </Row>
            <div className="servicos-texto d-flex">
            
              <div className="item-servico">
              <p>Abertura, alteração, baixa e contabilidade de empresa, associações e cooperativas</p>
              </div>
              <div className="item-servico">
              <p>Regularização as declarações (DCTF, GFIP, RAIS, DASN-MEI, DIRF, SPED, E-SOCIAL)</p>
              </div>
              <div className="item-servico">
              <p>Emissão de certificado digital - A1 ou A3 - (PRESENCIAL)</p>
              </div>  

              <div className="item-servico">
              <p>Regularização de CPF, CNPJ, PIS, DRSC</p>
              </div>
              <div className="item-servico">
              <p>Declaração de imposto de renda e Declaração de ITR</p>
              </div>
              <div className="item-servico">
              <p>Abertura e/ou regularização da matrícula CEI/CAEPF</p>
              </div>  
            
              <div className="item-servico">
              <p>Regularização das intimações fiscais</p>
              </div>
              <div className="item-servico">
              <p>Parcelamento de impostos federais, estaduais e municipais</p>
              </div>
              <div className="item-servico">
              <p>Cálculo de rescisão trabalhista e extratos previdenciários</p>
              </div>  
    
              <div className="item-servico">
              <p>Pedido de aposentadoria urbana e/ou rural</p>
              </div>
              <div className="item-servico">
              <p>Pedido de auxílios (doença, acidente, pensão, etc.), junto ao INSS</p>
              </div>
              <div className="item-servico">
              <p>Prestação de contas de campanha eleitoral do candidato e/ou partido, junto ao TRE</p>
              </div>
            </div>
        </Container>
      </Container>
    );
}

export default Servicos;