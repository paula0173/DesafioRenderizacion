

const Buscador = ({ filtrarDatos }) => {

  const buscarColaboradores = (e) => {

    const nombreBuscar = e.target.value
    filtrarDatos(nombreBuscar)      
   }

     
return (
  <div >

    <input type="text" className="form-control w-50 xs-auto" placeholder="Busca un colaborador" onChange={buscarColaboradores}
    />
      
  </div>

)
}

export default Buscador