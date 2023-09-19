import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert";

const CrearCuenta = () => {

  const [usurio,setUsuario] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmar: ''

    });

  const{nombre,email,password,confirmar}=usurio;

  const onChange=(e)=> {
    setUsuario({
      ...usurio,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() =>{
    document.getElementById("nombre").focus();
  },[])

  const crearCuenta = async()=>{

    if(password !== confirmar){
      const msg="las contraseñas son diferentes"
      swal({
        title: 'Error',
        text: msg,
        icon: 'error',
        buttons: {
          confirm:{
            text:'okey',
            value: true,
            className:'btn btn-danger',
            closeModal: true
          }
        }
      });
      
    }else if (password.length < 6){

      const msg="las contraseñas debe ser al menos de 6 caracteres "
      swal({
        title: 'Error',
        text: msg,
        icon: 'error',
        buttons: {
          confirm:{
            text:'okey',
            value: true,
            className:'btn btn-danger',
            closeModal: true
          }
        }
      });

    } else {
      const data ={
        nombre : usurio.nombre,
        email : usurio.email,
        password : usurio.password,
  
      }
      
      const response = await APIInvoke.invokePOST("/clientes", data);
      const mensaje = response.msg;
  
      if(mensaje === 'El usuario ya existe'){
        const msg="El usuario ya existe.";
        swal({
          title: 'Error',
          text: msg,
          icon: 'error',
          buttons: {
            confirm:{
              text:'okey',
              value: true,
              className:'btn btn-danger',
              closeModal: true
            }
          }
        });
    } else {
      const msg="El usuario fue creado correctamente.";
      swal({
        title: 'Información',
        text: msg,
        icon: 'success',
        buttons: {
          confirm:{
            text:'okey',
            value: true,
            className:'btn btn-primary',
            closeModal: true
          }
        }
      });
        setUsuario({
          nombre: '',
          email: '',
          password: '',
          confirmar: ''
        })
    }
  }
 }

  const onSubmit=(e)=> {
    e.preventDefault();
    crearCuenta()

  }

    return ( 
    <div className="hold-transition register-page">
<div className="register-box">
  <div className="register-logo">
  <Link to={"#"}><b>Registro de cuenta</b></Link>
  </div>
  <div className="card">
    <div className="card-body register-card-body">
      <p className="login-box-msg">Bienvenido ingrese sus datos</p>

      <form onSubmit={onSubmit}>
          <div className="input-group mb-3">
              <input type="text"
                  className="form-control" 
                  placeholder="nombre" 
                  id="nombre"
                  name="nombre"
                  value={nombre}
                  onChange={onChange}
                  required
             />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-user" />
              </div>
            </div>
          </div>

        <div className="input-group mb-3">
          <input type="email" 
          className="form-control" 
          placeholder="Email" 
          id="email"
          name="email"
          value={email}
          onChange={onChange}
          required
          />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>

        <div className="input-group mb-3">
          <input type="password" 
          className="form-control" 
          placeholder="Password" 
          id="password"
          name="password"
          value={password}
          onChange={onChange}
          required
          />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>

        <div className="input-group mb-3">
          <input type="password" 
          className="form-control" 
          placeholder="Confirmar Password" 
          id="confirmar"
          name="confirmar"
          value={confirmar}
          onChange={onChange}
          required
          />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>



        <div className="social-auth-links text-center">
        <button type="submit" class="btn btn-block btn-primary">
         Ingresar
        </button>
        <Link to={"/"} className="btn btn-block btn-danger">
          Login
        </Link>

        </div>
      </form>
    </div>
  </div>
</div>


    </div>
     );
}
 
export default CrearCuenta;