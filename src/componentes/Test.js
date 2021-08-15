import React from 'react';
import { ProgressBar, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      respuesta1: "",
      respuesta2: "",
      respuesta3: "",
      respuesta4: "",
      respuesta5: "",
      respuesta6: "",
      respuesta7: "",
      respuesta8: ""
    }
  }

  Cambiovalor = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState({ state });
  }


  mostrarpregunta1() {
    document.getElementById("pr1").style.display = 'block';
    document.getElementById("pr2").style.display = 'none';
    document.getElementById("pr3").style.display = 'none';
    document.getElementById("pr4").style.display = 'none';
    document.getElementById("pr5").style.display = 'none';
    document.getElementById("pr6").style.display = 'none';
    document.getElementById("pr7").style.display = 'none';
    document.getElementById("pr8").style.display = 'none';
    document.getElementById("respuestas").style.display = 'none';

  }

  mostrarpregunta2() {
    document.getElementById("pr1").style.display = 'none';
    document.getElementById("pr2").style.display = 'block';
    document.getElementById("pr3").style.display = 'none';
    document.getElementById("pr4").style.display = 'none';
    document.getElementById("pr5").style.display = 'none';
    document.getElementById("pr6").style.display = 'none';
    document.getElementById("pr7").style.display = 'none';
    document.getElementById("pr8").style.display = 'none';
    document.getElementById("respuestas").style.display = 'none';

  }

  mostrarpregunta3() {
    document.getElementById("pr1").style.display = 'none';
    document.getElementById("pr2").style.display = 'none';
    document.getElementById("pr3").style.display = 'block';
    document.getElementById("pr4").style.display = 'none';
    document.getElementById("pr5").style.display = 'none';
    document.getElementById("pr6").style.display = 'none';
    document.getElementById("pr7").style.display = 'none';
    document.getElementById("pr8").style.display = 'none';
    document.getElementById("respuestas").style.display = 'none';

  }

  mostrarpregunta4() {
    document.getElementById("pr1").style.display = 'none';
    document.getElementById("pr2").style.display = 'none';
    document.getElementById("pr3").style.display = 'none';
    document.getElementById("pr4").style.display = 'block';
    document.getElementById("pr5").style.display = 'none';
    document.getElementById("pr6").style.display = 'none';
    document.getElementById("pr7").style.display = 'none';
    document.getElementById("pr8").style.display = 'none';
    document.getElementById("respuestas").style.display = 'none';

  }

  mostrarpregunta5() {
    document.getElementById("pr1").style.display = 'none';
    document.getElementById("pr2").style.display = 'none';
    document.getElementById("pr3").style.display = 'none';
    document.getElementById("pr4").style.display = 'none';
    document.getElementById("pr5").style.display = 'block';
    document.getElementById("pr6").style.display = 'none';
    document.getElementById("pr7").style.display = 'none';
    document.getElementById("pr8").style.display = 'none';
    document.getElementById("respuestas").style.display = 'none';

  }



  mostrarpregunta6() {
    document.getElementById("pr1").style.display = 'none';
    document.getElementById("pr2").style.display = 'none';
    document.getElementById("pr3").style.display = 'none';
    document.getElementById("pr4").style.display = 'none';
    document.getElementById("pr5").style.display = 'none';
    document.getElementById("pr6").style.display = 'block';
    document.getElementById("pr7").style.display = 'none';
    document.getElementById("pr8").style.display = 'none';
    document.getElementById("respuestas").style.display = 'none';

  }

  mostrarpregunta7() {
    document.getElementById("pr1").style.display = 'none';
    document.getElementById("pr2").style.display = 'none';
    document.getElementById("pr3").style.display = 'none';
    document.getElementById("pr4").style.display = 'none';
    document.getElementById("pr5").style.display = 'none';
    document.getElementById("pr6").style.display = 'none';
    document.getElementById("pr7").style.display = 'block';
    document.getElementById("pr8").style.display = 'none';
    document.getElementById("respuestas").style.display = 'none';

  }

  mostrarpregunta8() {
    document.getElementById("pr1").style.display = 'none';
    document.getElementById("pr2").style.display = 'none';
    document.getElementById("pr3").style.display = 'none';
    document.getElementById("pr4").style.display = 'none';
    document.getElementById("pr5").style.display = 'none';
    document.getElementById("pr6").style.display = 'none';
    document.getElementById("pr7").style.display = 'none';
    document.getElementById("pr8").style.display = 'block';
    document.getElementById("respuestas").style.display = 'none';
  }



  enviarTest = (event) => {
    event.preventDefault();
    const { respuesta1, respuesta2, respuesta3, respuesta4, respuesta5, respuesta6, respuesta7, respuesta8 } = this.state;
    console.log("RES 1: " + this.state.respuesta1);
    console.log("RES 2: " + this.state.respuesta2);
    console.log("RES 3: " + this.state.respuesta3);
    console.log("RES 4: " + this.state.respuesta4);
    console.log("RES 5: " + this.state.respuesta5);
    console.log("RES 6: " + this.state.respuesta6);
    console.log("RES 7: " + this.state.respuesta7);
    console.log("RES 8: " + this.state.respuesta8);

    document.getElementById("pr1").style.display = 'none';
    document.getElementById("pr2").style.display = 'none';
    document.getElementById("pr3").style.display = 'none';
    document.getElementById("pr4").style.display = 'none';
    document.getElementById("pr5").style.display = 'none';
    document.getElementById("pr6").style.display = 'none';
    document.getElementById("pr7").style.display = 'none';
    document.getElementById("pr8").style.display = 'none';
    document.getElementById("respuestas").style.display = 'block';
    document.getElementById("presentacion").style.display = 'none';
    this.color1(this.state.respuesta1);
    this.color2(this.state.respuesta2);
    this.color3(this.state.respuesta3);
    this.color4(this.state.respuesta4);
    this.color5(this.state.respuesta5);
    this.color6(this.state.respuesta6);
    this.color7(this.state.respuesta7);
    this.color8(this.state.respuesta8);

  }

  color1(respuesta1) {
    if (respuesta1 === "1") {
      return (<div className="alert alert-success" role="alert">
        <strong>Pregunta 1 : Correcta</strong>
      </div>);
    } else if (respuesta1 === "0") {
      return (<div className="alert alert-danger" role="alert">
        <strong>Pregunta 1 : Incorrecta</strong>
      </div>);
    } else {
      return (<div className="alert alert-dark" role="alert">
        <strong>Pregunta 1 : Falto</strong>
      </div>);
    }
  }

  color2(respuesta2) {
    if (respuesta2 === "1") {
      return (<div className="alert alert-success" role="alert">
        <strong>Pregunta 2 : Correcta</strong>
      </div>);
    } else if (respuesta2 === "0") {
      return (<div className="alert alert-danger" role="alert">
        <strong>Pregunta 2 : Incorrecta</strong>
      </div>);
    } else {
      return (<div className="alert alert-dark" role="alert">
        <strong>Pregunta 2 : Falto</strong>
      </div>);
    }
  }

  color3(respuesta3) {
    if (respuesta3 === "1") {
      return (<div className="alert alert-success" role="alert">
        <strong>Pregunta 3 : Correcta</strong>
      </div>);
    } else if (respuesta3 === "0") {
      return (<div className="alert alert-danger" role="alert">
        <strong>Pregunta 3 : Incorrecta</strong>
      </div>);
    } else {
      return (<div className="alert alert-dark" role="alert">
        <strong>Pregunta 3 : Falto</strong>
      </div>);
    }
  }

  color4(respuesta4) {
    if (respuesta4 === "1") {
      return (<div className="alert alert-success" role="alert">
        <strong>Pregunta 4 : Correcta</strong>
      </div>);
    } else if (respuesta4 === "0") {
      return (<div className="alert alert-danger" role="alert">
        <strong>Pregunta 4 : Incorrecta</strong>
      </div>);
    } else {
      return (<div className="alert alert-dark" role="alert">
        <strong>Pregunta 4 : Falto</strong>
      </div>);
    }
  }

  color5(respuesta5) {
    if (respuesta5 === "1") {
      return (<div className="alert alert-success" role="alert">
        <strong>Pregunta 5 : Correcta</strong>
      </div>);
    } else if (respuesta5 === "0") {
      return (<div className="alert alert-danger" role="alert">
        <strong>Pregunta 5 : Incorrecta</strong>
      </div>);
    } else {
      return (<div className="alert alert-dark" role="alert">
        <strong>Pregunta 5 : Falto</strong>
      </div>);
    }
  }

  color6(respuesta6) {
    if (respuesta6 === "1") {
      return (<div className="alert alert-success" role="alert">
        <strong>Pregunta 6 : Correcta</strong>
      </div>);
    } else if (respuesta6 === "0") {
      return (<div className="alert alert-danger" role="alert">
        <strong>Pregunta 6 : Incorrecta</strong>
      </div>);
    } else {
      return (<div className="alert alert-dark" role="alert">
        <strong>Pregunta 6 : Falto</strong>
      </div>);
    }
  }

  color7(respuesta7) {
    if (respuesta7 === "1") {
      return (<div className="alert alert-success" role="alert">
        <strong>Pregunta 7 : Correcta</strong>
      </div>);
    } else if (respuesta7 === "0") {
      return (<div className="alert alert-danger" role="alert">
        <strong>Pregunta 7 : Incorrecta</strong>
      </div>);
    } else {
      return (<div className="alert alert-dark" role="alert">
        <strong>Pregunta 7 : Falto</strong>
      </div>);
    }
  }

  color8(respuesta8) {
    if (respuesta8 === "1") {
      return (<div className="alert alert-success" role="alert">
        <strong>Pregunta 8 : Correcta</strong>
      </div>);
    } else if (respuesta8 === "0") {
      return (<div className="alert alert-danger" role="alert">
        <strong>Pregunta 8 : Incorrecta</strong>
      </div>);
    } else {
      return (<div className="alert alert-dark" role="alert">
        <strong>Pregunta 8 : Falto</strong>
      </div>);
    }
  }



  render() {


    const { respuesta1, respuesta2, respuesta3, respuesta4, respuesta5, respuesta6, respuesta7, respuesta8, color } = this.state;


    var res;
    if (respuesta1) {
      res = 12;
    }

    if (respuesta2) {
      res = 24;
    }

    if (respuesta3) {
      res = 36;
    }
    if (respuesta4) {
      res = 48;
    }

    if (respuesta5) {
      res = 48;
    }

    if (respuesta6) {
      res = 60;
    }

    if (respuesta7) {
      res = 72;
    }

    if (respuesta8) {
      res = 100;
    }


    return (
      <div>
        <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="nav navbar-nav">
            <Link className="nav-item nav-link active">{this.props.match.params.nombre}{this.props.match.params.apellido} <span className="sr-only"></span></Link>
            <Link className="nav-item nav-link active" to={"/"}>Salir <span className="sr-only"></span></Link>
          </div>
        </nav>

        <div className="card">


          <div class="card-header">
            <center><h1>Capitales del Mundo</h1></center>

          </div>
          <div id="presentacion">
            <br></br>
          <center><div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <button type="button" className="btn btn-primary" onClick={this.mostrarpregunta1}>1</button>
            <button type="button" className="btn btn-primary" onClick={this.mostrarpregunta2}>2</button>
            <button type="button" className="btn btn-primary" onClick={this.mostrarpregunta3}>3</button>
            <button type="button" className="btn btn-primary" onClick={this.mostrarpregunta4}>4</button>
            <button type="button" className="btn btn-primary" onClick={this.mostrarpregunta5}>5</button>
            <button type="button" className="btn btn-primary" onClick={this.mostrarpregunta6}>6</button>
            <button type="button" className="btn btn-primary" onClick={this.mostrarpregunta7}>7</button>
            <button type="button" className="btn btn-primary" onClick={this.mostrarpregunta8}>8</button>
          </div>
          </center>
          <br></br>
          
          <div className="progressBar">
            <ProgressBar now={res} />
          </div>

          <form onSubmit={this.enviarTest}>
            <div id="pr1">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">PREGUNTA No. 1</h4>
                  <div className="form-group">
                    <p><strong>1. Capital de Colombia</strong> </p>
                    <div className="form-check">
                      <input type="radio" className="form-check-input" name="respuesta1" value="0" onChange={this.Cambiovalor} />
                      <label className="form-check-label">
                        <p className="card-text"><strong>A.</strong> Leticia</p>
                      </label>
                    </div>
                    <div className="form-check">
                      <input type="radio" className="form-check-input" name="respuesta1" value="0" onChange={this.Cambiovalor} />
                      <label className="form-check-label">
                        <p className="card-text"><strong>B.</strong> Barraquilla</p>
                      </label>
                    </div>
                    <div className="form-check">
                      <input type="radio" className="form-check-input" name="respuesta1" value="1" onChange={this.Cambiovalor} />
                      <label className="form-check-label">
                        <p className="card-text"><strong>C.</strong> Bogota</p>
                      </label>
                    </div>
                    <br />
                    <button type="button" className="btn btn-primary" onClick={this.mostrarpregunta2}>Siguiente</button>
                  </div>

                </div>
                <div className="card-footer">
                  Pregunta 1 de 8
                </div>
              </div>

            </div>


            <div id="pr2">
              <div className="card">
                <div className="card-body">

                  <h4 className="card-title">PREGUNTA No. 2</h4>

                  <div className="form-group">
                    <p><strong>2. Capital de Brazil</strong> </p>
                    <div className="form-check">
                      <input type="radio" className="form-check-input" name="respuesta2" value="0" onChange={this.Cambiovalor} />
                      <label className="form-check-label">
                        <p className="card-text"><strong>A.</strong> Sau Pablo</p>
                      </label>
                    </div>
                    <div className="form-check">
                      <input type="radio" className="form-check-input" name="respuesta2" value="1" onChange={this.Cambiovalor} />
                      <label className="form-check-label">
                        <p className="card-text"><strong>B.</strong> Brazilia</p>
                      </label>
                    </div>
                    <div className="form-check">
                      <input type="radio" className="form-check-input" name="respuesta2" value="1" onChange={this.Cambiovalor} />
                      <label className="form-check-label">
                        <p className="card-text"><strong>C.</strong> Rio de Janeiro</p>
                      </label>
                    </div>
                    <br />
                    <button type="button" className="btn btn-primary" onClick={this.mostrarpregunta1}>Atrás</button>&nbsp;&nbsp;

                    <button type="button" className="btn btn-primary" onClick={this.mostrarpregunta3}>Siguiente</button>
                  </div>
                </div>
                <div className="card-footer">
                  Pregunta 2 de 8
                </div>
              </div>
            </div>

            <div id="pr3">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">PREGUNTA No. 3</h4>

                  <div className="form-group">
                    <p><strong>3. Capital de Japon</strong> </p>
                    <div className="form-check">
                      <input type="radio" className="form-check-input" name="respuesta3" value="1" onChange={this.Cambiovalor} />
                      <label className="form-check-label">
                        <p className="card-text"><strong>A.</strong> Tokio</p>
                      </label>
                    </div>
                    <div className="form-check">
                      <input type="radio" className="form-check-input" name="respuesta3" value="0" onChange={this.Cambiovalor} />
                      <label className="form-check-label">
                        <p className="card-text"><strong>B.</strong> China</p>
                      </label>
                    </div>
                    <div className="form-check">
                      <input type="radio" className="form-check-input" name="respuesta3" value="0" onChange={this.Cambiovalor} />
                      <label className="form-check-label">
                        <p className="card-text"><strong>C.</strong> Okinawa</p>
                      </label>
                    </div>
                    <br />
                    <button type="button" className="btn btn-primary" onClick={this.mostrarpregunta2}>Atrás</button>&nbsp;&nbsp;

                    <button type="button" className="btn btn-primary" onClick={this.mostrarpregunta4}>Siguiente</button>
                  </div>

                </div>
                <div className="card-footer">
                  Pregunta 3 de 8
                </div>
              </div>
            </div>

            <div id="pr4">
              <div className="card">
                <div className="card-body">

                  <h4 className="card-title">PREGUNTA No. 4</h4>

                  <div className="form-group">
                    <p><strong>4. Capital de China</strong> </p>
                    <div className="form-check">
                      <input type="radio" className="form-check-input" name="respuesta4" value="0" onChange={this.Cambiovalor} />
                      <label className="form-check-label">
                        <p className="card-text"><strong>A.</strong> Shanghai</p>
                      </label>
                    </div>
                    <div className="form-check">
                      <input type="radio" className="form-check-input" name="respuesta4" value="1" onChange={this.Cambiovalor} />
                      <label className="form-check-label">
                        <p className="card-text"><strong>B.</strong> Pekín</p>
                      </label>
                    </div>
                    <div className="form-check">
                      <input type="radio" className="form-check-input" name="respuesta4" value="0" onChange={this.Cambiovalor} />
                      <label className="form-check-label">
                        <p className="card-text"><strong>C.</strong> Tianjin</p>
                      </label>
                    </div>
                    <br />
                    <button type="button" className="btn btn-primary" onClick={this.mostrarpregunta3}>Atrás</button>&nbsp;&nbsp;
                    <button type="button" className="btn btn-primary" onClick={this.mostrarpregunta5}>Siguiente</button>
                  </div>

                </div>
                <div className="card-footer">
                  Pregunta 4 de 8
                </div>
              </div>
            </div>

            <div id="pr5">
              <div className="card">
                <div className="card-body">

                  <h4 className="card-title">PREGUNTA No. 5</h4>

                  <div className="form-group">
                    <p><strong>5. Capital de Honduras</strong> </p>
                    <div className="form-check">
                      <input type="radio" className="form-check-input" name="respuesta5" value="0" onChange={this.Cambiovalor} />
                      <label className="form-check-label">
                        <p className="card-text"><strong>A.</strong> San Pedro Sul</p>
                      </label>
                    </div>
                    <div className="form-check">
                      <input type="radio" className="form-check-input" name="respuesta5" value="0" onChange={this.Cambiovalor} />
                      <label className="form-check-label">
                        <p className="card-text"><strong>B.</strong> Amapala</p>
                      </label>
                    </div>
                    <div className="form-check">
                      <input type="radio" className="form-check-input" name="respuesta5" value="1" onChange={this.Cambiovalor} />
                      <label className="form-check-label">
                        <p className="card-text"><strong>C.</strong> Tegucigalpa</p>
                      </label>
                    </div>
                    <br />
                    <button type="button" className="btn btn-primary" onClick={this.mostrarpregunta4}>Atrás</button>&nbsp;&nbsp;
                    <button type="button" className="btn btn-primary" onClick={this.mostrarpregunta6}>Siguiente</button>
                  </div>
                </div>
                <div className="card-footer">
                  Pregunta 5 de 8
                </div>
              </div>
            </div>

            <div id="pr6">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">PREGUNTA No. 6</h4>

                  <div className="form-group">
                    <p><strong>6. Capital de Belgica</strong> </p>
                    <div className="form-check">
                      <input type="radio" className="form-check-input" name="respuesta6" value="0" onChange={this.Cambiovalor} />
                      <label className="form-check-label">
                        <p className="card-text"><strong>A.</strong> Brujas</p>
                      </label>
                    </div>
                    <div className="form-check">
                      <input type="radio" className="form-check-input" name="respuesta6" value="1" onChange={this.Cambiovalor} />
                      <label className="form-check-label">
                        <p className="card-text"><strong>B.</strong> Bruselas</p>
                      </label>
                    </div>
                    <div className="form-check">
                      <input type="radio" className="form-check-input" name="respuesta6" value="0" onChange={this.Cambiovalor} />
                      <label className="form-check-label">
                        <p className="card-text"><strong>C.</strong> Amberes</p>
                      </label>
                    </div>
                    <br />
                    <button type="button" className="btn btn-primary" onClick={this.mostrarpregunta5}>Atrás</button>&nbsp;&nbsp;
                    <button type="button" className="btn btn-primary" onClick={this.mostrarpregunta7}>Siguiente</button>
                  </div>
                </div>
                <div className="card-footer">
                  Pregunta 6 de 8
                </div>
              </div>
            </div>

            <div id="pr7">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">PREGUNTA No. 7</h4>

                  <div className="form-group">
                    <p><strong>7. Capital de EE.UU</strong> </p>
                    <div className="form-check">
                      <input type="radio" className="form-check-input" name="respuesta7" value="1" onChange={this.Cambiovalor} />
                      <label className="form-check-label">
                        <p className="card-text"><strong>A.</strong> Washington</p>
                      </label>
                    </div>
                    <div className="form-check">
                      <input type="radio" className="form-check-input" name="respuesta7" value="0" onChange={this.Cambiovalor} />
                      <label className="form-check-label">
                        <p className="card-text"><strong>B.</strong> Chicago</p>
                      </label>
                    </div>
                    <div className="form-check">
                      <input type="radio" className="form-check-input" name="respuesta7" value="0" onChange={this.Cambiovalor} />
                      <label className="form-check-label">
                        <p className="card-text"><strong>C.</strong> New York</p>
                      </label>
                    </div>
                    <br />
                    <button type="button" className="btn btn-primary" onClick={this.mostrarpregunta6}>Atrás</button>&nbsp;&nbsp;
                    <button type="button" className="btn btn-primary" onClick={this.mostrarpregunta8}>Siguiente</button>
                  </div>
                </div>
                <div className="card-footer">
                  Pregunta 7 de 8
                </div>
              </div>
            </div>

            <div id="pr8">
              <div className="card">
                <div className="card-body">


                  <h4 className="card-title">PREGUNTA No. 8</h4>

                  <div className="form-group">
                    <p><strong>8. Capital de Bolivia</strong> </p>
                    <div className="form-check">
                      <input type="radio" className="form-check-input" name="respuesta8" value="0" onChange={this.Cambiovalor} />
                      <label className="form-check-label">
                        <p className="card-text"><strong>A.</strong> Cochabamba</p>
                      </label>
                    </div>
                    <div className="form-check">
                      <input type="radio" className="form-check-input" name="respuesta8" value="0" onChange={this.Cambiovalor} />
                      <label className="form-check-label">
                        <p className="card-text"><strong>B.</strong> Sucre</p>
                      </label>
                    </div>
                    <div className="form-check">
                      <input type="radio" className="form-check-input" name="respuesta8" value="1" onChange={this.Cambiovalor} />
                      <label className="form-check-label">
                        <p className="card-text"><strong>C.</strong> La Paz</p>
                      </label>
                    </div>
                    <br />
                    <button type="button" className="btn btn-primary" onClick={this.mostrarpregunta7}>Atrás</button>&nbsp;&nbsp;
                    <button type="submit" className="btn btn-primary">Final</button>
                  </div>
                </div>
                <div className="card-footer">
                  Pregunta 8 de 8
                </div>
              </div>
            </div>


            
          </form>
        </div>
        </div>

        <div id="respuestas">
              <div className="card">
                <div className="card-body">


                  <h4 className="card-title">Respuesta al Test</h4>

                  <div className="form-group">
                    <p><strong>LAS RESPUESTAS</strong> </p>

                    {this.color1(respuesta1)}
                    {this.color2(respuesta2)}
                    {this.color3(respuesta3)}
                    {this.color4(respuesta4)}
                    {this.color5(respuesta5)}
                    {this.color6(respuesta6)}
                    {this.color7(respuesta7)}
                    {this.color8(respuesta8)}
                    <a href="" className="btn btn-primary">Comenzar</a>
                  </div>
                </div>
                <div className="card-footer">
                  Universidad de Cordoba
                </div>
              </div>
            </div>

      </div>



    );
  }
}


export default Test;