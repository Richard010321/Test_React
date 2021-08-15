import React from 'react';
import { Link } from "react-router-dom";


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            nombre:"", 
            apellido:""
         }
    }

    cambiovalor = (e) =>{
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState({state});
    }

    Enviardatos = (e) =>{
        e.preventDefault();
        console.log("Formulario enviado");
        const{nombre, apellido} = this.state;
 
        console.log(nombre);
        console.log(apellido);
    
        this.props.history.push("/test/"+nombre+":"+apellido); // regresa a la lista direccionar en react
    }
 
    render() { 
        return ( 
                       
            <div className="card">
                <div className="card-header">
                   Registro para test de las capitales del Mundo
                </div>
                <div className="card-body">
                    <form onSubmit={this.Enviardatos}>
                        <div className="form-group">
                          <label htmlFor=""></label>
                          <input type="text" name="nombre" id="nombre" onChange={this.cambiovalor}  className="form-control" placeholder="Nombre del estudiante" />
                          <small id="helpId">Escribir el nombre del estudiante</small>
                        </div>

                          <div className="form-group">
                          <label htmlFor=""></label>
                          <input type="text" name="apellido" id="apellido" onChange={this.cambiovalor}  className="form-control" placeholder="Apellido del estudiante" />
                          <small id="helpId">Escribir el apellido del estudiante</small>
                        </div>
                        <div className="btn-group" role="group" aria-label="">
                            <button type="submit" className="btn btn-success">Acceder</button>
                            <Link  className="btn btn-primary" to={"/"}>Cancelar</Link>
                        </div>

                    </form>
                </div>
                <div className="card-footer text-muted">
                    Universidad de Cordoba
                </div>
            </div>
         );
    }
}
 
export default Login;