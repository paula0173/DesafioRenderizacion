import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { v4 as uuidv4 } from "uuid";

const Formulario = ({estadoAlerta, agregarColaborador}) => {

  const [nombre, setNombre] = useState("")
  const [correo, setCorreo] = useState("")
  const [edad, setEdad] = useState("")
  const [cargo, setCargo] = useState("")
  const [telefono, setTelefono] = useState("")

  const validarInput = (e) => {
    e.preventDefault()
    // //Validacion nombre
    if (nombre == "") {
      estadoAlerta({ mensaje: "El nombre esta vacio", color: "red" })
      return
    }
    //Validacion correo
    if (correo === "") {
      estadoAlerta({ mensaje: "El correo esta vacio", color: "red" })
      return
    }
    else {
      const patronCorreo = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
      if (!patronCorreo.test(correo)) {
        estadoAlerta({ mensaje: "Formato de correo incorrecto", color: "red" })
        return
      }
    }
    //Validacion edad
    if (edad == "") {
      estadoAlerta({ mensaje: "Campo edad esta vacio", color: "red" })
      return
    }
    //Validacion cargo
    if (cargo == "") {
      estadoAlerta({ mensaje: "Campo Cargo esta vacio", color: "red" })
      return
    }
    //Validacion telefono
    if (telefono == "") {
      estadoAlerta({ mensaje: "Campo Telefono esta vacio", color: "red" })
      return
    }
    else {
      const patronTelefono = /^[09][0-9]{1,7}$/
      if (!patronTelefono.test(telefono)) {
        estadoAlerta({ mensaje: "Formato de telefono incorrecto", color: "red" })
        return
      }
    }

    agregarColaborador({ id:uuidv4(), nombre: nombre, correo: correo, edad: edad, cargo: cargo, telefono: telefono })   
        
    //LImpia los campos en pantalla
    setNombre('')
    setCorreo('')
    setEdad('')
    setCargo('')
    setTelefono('')

    estadoAlerta({ mensaje: "Registro exitoso", color: "green" })

    return
  }

  return (
    <Form className="square border rounded-3" onSubmit={validarInput}>

      <Form.Group className="p-3">
        <h5 className=''>Agregar Colaborador</h5>
        <Form.Control name="nombre" className="mb-3" placeholder="Ingrese nombre" onChange={(e) => setNombre(e.target.value)}
          value={nombre} />

        <Form.Control name="correo" className="mb-3" type="text" placeholder="Ingrese email" onChange={(e) => setCorreo(e.target.value)}
          value={correo} />

        <Form.Control name="edad" className="mb-3" type="number" placeholder="Ingrese edad" onChange={(e) => setEdad(e.target.value)}
          value={edad} />

        <Form.Control  name="cargo"  className="mb-3" type="text" placeholder="Ingrese cargo" onChange={(e) => setCargo(e.target.value)}
          value={cargo} />

        <Form.Control name="telefono" className="mb-3" type="text" placeholder="Ingrese telefono 8 digitos" onChange={(e) => setTelefono(e.target.value)}
          value={telefono} />

        <Button className='w-100 mb-3' variant="info" type="submit" > Agregar colaborador
        </Button>
      </Form.Group>
    </Form>
  )
}

export default Formulario