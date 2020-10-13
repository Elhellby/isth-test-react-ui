import React from 'react';
import { Col, Container, Row, Button, Form, ListGroup } from 'react-bootstrap';
import '../content/css/Productos.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import JsonData from './productos.json';

import FormularioBusqueda from './FormularioBusqueda.js'
import Tarjeta from './Tarjeta.js'

class Productos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            productos: JsonData,
            txtUPC: "",
            activeIndex: 0
        };
    }

    valueToState = ({ name, value }) => {
        this.setState(() => {
            return { [name]: value };
        });
    };

    AgragaItem = () => {
        this.setState({
            productos: [...this.state.productos, {
                "precio": 9348.34,
                "estatus": "activo",
                "exento": "Excento",
                "descripcion": "producto demo T",
                "gtq": 90.9
            }]
        })
    }

    clickItem = (index, props) => {
        this.setState({
            activeIndex: index
        });

    }


    async informacion() {

    }

    render() {
        return (
            <div className="demodemo">
                <Container fluid>
                    <Row>
                        <Col xs="auto">
                            <Form.Control
                                className="mb-2"
                                name="txtUPC"
                                placeholder="Ítem o UPC"
                                onChange={event => this.valueToState(event.target)}
                            />
                        </Col>
                        <Col xs="auto">
                            <Button type="submit" className="mb-2" onClick={this.AgragaItem}>
                                <FontAwesomeIcon icon={faPlus} /> Agregar a la lista
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3}>

                            <ListGroup as="ul">
                                <ListGroup.Item as="li" disabled className="item-header" >
                                    <Row className="justify-content-md-center">
                                        <strong>Ítems agregados</strong>
                                    </Row>
                                </ListGroup.Item>
                                {
                                    this.state.productos.map((element, index) => {

                                        return <ListGroup.Item as="li" className={this.state.activeIndex === index ? "item-activo" : "item"} key={index} onClick={this.clickItem.bind(this, index)}>
                                            <Container>
                                                <Row>
                                                    <Col xs={4} className="item-separador">
                                                        <label>${element.precio}</label>
                                                    </Col>
                                                    <Col xs={4} className="item-separador">
                                                        <label>{element.estatus}</label>
                                                    </Col>
                                                    <Col xs={4}>
                                                        <label>{element.exento}</label>
                                                        <div className={this.state.activeIndex === index ? "indicador indicador-activo" : "indicador"}></div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs={8}>
                                                        <label>{element.descripcion}</label>
                                                    </Col>
                                                    <Col xs={4}>
                                                        <strong>{element.gtq} gtq</strong>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </ListGroup.Item>
                                    })
                                }
                            </ListGroup>
                        </Col>
                        <Col xs={9}>
                            <hr />
                            <FormularioBusqueda></FormularioBusqueda>
                            <hr />
                            <Row>
                                <Tarjeta></Tarjeta>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Productos;