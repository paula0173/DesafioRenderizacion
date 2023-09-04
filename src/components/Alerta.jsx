
const Alert = ({estadoAlerta}) => {
  return (
 <div className="text-center square border border-dark rounded">
    <p className="fw-bold" style={{color:estadoAlerta.color}}>
          {estadoAlerta.mensaje} 
    </p>
    </div>
  )
}

export default Alert