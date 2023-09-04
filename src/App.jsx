import './App.css'
import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Buscador from "./components/Buscador";
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import Alerta from './components/Alerta';

import { baseColaboradores } from "../src/Basecolaboradores.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'

function App() {

  const [listaColaboradores, setColaboradores] = useState(baseColaboradores);

  const [listaBusqueda, setListaBusqueda] = useState(listaColaboradores);
  const [estadoAlerta, setestadoAlerta] = useState({ mensaje: "Complete todos los campos", color: "Red" })

  const agregarColaborador = (datosColaborador) => {

    setColaboradores([...listaColaboradores, { ...datosColaborador }]);
    setListaBusqueda([...listaColaboradores, { ...datosColaborador }]);

  };

  const filtrarDatos = (nomtexto) => {

    const listaFiltrada = listaColaboradores.filter(colab => colab.nombre.toLowerCase().includes(nomtexto)
      || colab.correo.toLowerCase().includes(nomtexto)
      || colab.edad.toLowerCase().includes(nomtexto)
      || colab.cargo.toLowerCase().includes(nomtexto)
      || colab.telefono.toLowerCase().includes(nomtexto))
    setListaBusqueda(listaFiltrada);
  }

  return (
    <>
      <Container >
        <Row>
          <h3 className='mt-3'><FontAwesomeIcon icon={faUsers} />Lista de Colaboradores</h3>
          <Col className="mt-2"  > <Buscador filtrarDatos={filtrarDatos} /> </Col>
        </Row>

        <Row className="d-flex mt-4 justify-content-center">
          <Col sm={12} md={9} lg={8}> <Listado listaColaboradores={listaBusqueda} />  </Col>
          <Col sm={12} md={3} lg={4}> 
             
                <Formulario estadoAlerta={setestadoAlerta} agregarColaborador={agregarColaborador} /> 
                <Alerta className="mt-2" estadoAlerta={estadoAlerta} />      
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App