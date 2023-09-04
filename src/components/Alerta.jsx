
const Alert = ({estadoAlerta}) => {
  return (
 <div className="m-2 text-center square border border-dark rounded">
    <p className="fw-bold" style={{color:estadoAlerta.color}}>
          {estadoAlerta.mensaje} 
    </p>
    </div>
  )
}

export default Alert