import React from 'react';
import { Col, Form } from 'react-bootstrap';
import '../content/css/Formulario.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard, faGlobe, faFlag, faCompass } from '@fortawesome/free-solid-svg-icons';


class FormularioBusqueda extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="formulario-busqueda">
                <Form>
                    <Form.Row>
                        <Col xs={2}>
                            <Form.Group controlId="txtNombre">
                                <Form.Label><FontAwesomeIcon icon={faIdCard} /> Nombre proveedor</Form.Label>
                                <Form.Control type="text" className="custom-control-formulario"/>
                            </Form.Group>

                        </Col>
                        <Col xs={2}>
                            <Form.Group controlId="txtGTQ">
                                <Form.Label><FontAwesomeIcon icon={faGlobe}/> Precio país(GTQ)</Form.Label>
                                <Form.Control type="text" className="custom-control-formulario"/>
                            </Form.Group>
                        </Col>
                        <Col xs={2}>
                            <Form.Group controlId="txtMargen">
                                <Form.Label><FontAwesomeIcon icon={faFlag}/> Margen País</Form.Label>
                                <Form.Control type="text" className="custom-control-formulario"/>
                            </Form.Group>
                        </Col>
                        <Col xs={2}>
                            <Form.Group controlId="txtGap">
                                <Form.Label><FontAwesomeIcon icon={faCompass}/>Precio Gap país</Form.Label>
                                <Form.Control type="text" className="custom-control-formulario"/>
                            </Form.Group>
                        </Col>
                    </Form.Row>
                </Form>
            </div>
        );
    }
}

export default FormularioBusqueda;