import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import '../content/css/Tarjetas.css';



class Tarjeta extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            infoCard: [
                {
                    tienda: [
                        {
                            columna: "Dato A",
                            gtq: 747,
                            margen: 380,
                            gap: 9839
                        },
                        {
                            columna: "Dato A",
                            gtq: 747,
                            margen: 380,
                            gap: 9839
                        },
                        {
                            columna: "Dato A",
                            gtq: 747,
                            margen: 380,
                            gap: 9839
                        },
                        {
                            columna: "Dato A",
                            gtq: 747,
                            margen: 380,
                            gap: 9839
                        }
                    ],
                    tienda: [
                        {
                            columna: "Dato A",
                            gtq: 747,
                            margen: 380,
                            gap: 9839
                        },
                        {
                            columna: "Dato A",
                            gtq: 747,
                            margen: 380,
                            gap: 9839
                        },
                        {
                            columna: "Dato A",
                            gtq: 747,
                            margen: 380,
                            gap: 9839
                        },
                        {
                            columna: "Dato A",
                            gtq: 747,
                            margen: 380,
                            gap: 9839
                        }
                    ],tienda: [
                        {
                            columna: "Dato A",
                            gtq: 747,
                            margen: 380,
                            gap: 9839
                        },
                        {
                            columna: "Dato A",
                            gtq: 747,
                            margen: 380,
                            gap: 9839
                        },
                        {
                            columna: "Dato A",
                            gtq: 747,
                            margen: 380,
                            gap: 9839
                        },
                        {
                            columna: "Dato A",
                            gtq: 747,
                            margen: 380,
                            gap: 9839
                        }
                    ]
                },
            ]
        }
    }

    GeneraInfo = data => {
        let columnas = [], datosgtq = [], datosmargen = [], datosgap = [];
        data.tienda.forEach(element => {
            columnas.push(<Col >{element.columna}</Col>);
            datosgtq.push(<Col >{element.gtq}</Col>);
            datosmargen.push(<Col >{element.margen}</Col>);
            datosgap.push(<Col >{element.gap}</Col>);
        });
        return <div>
            <Row>
                {columnas}
            </Row>
            <Row>
                {datosgtq}
            </Row>
            <hr/>
            <Row>
                {datosmargen}
            </Row>
            <hr/>
            <label>Margen</label>
            <Row>
                {datosgap}
            </Row>
            <hr/>
            <label>Precio GAP</label>
        </div>
    }

    render() {
        return (
            <div className="contenedor-tarjeta">
                {
                    this.state.infoCard.map((T, I) => {
                        this.GeneraInfo(T);

                        return <Card key={I}>
                            <Card.Header as="h5">Tienda A</Card.Header>
                            <Card.Body>
                                {this.GeneraInfo(T)}
                            </Card.Body>
                        </Card>
                    })
                }
            </div>
        );
    }
}

export default Tarjeta;