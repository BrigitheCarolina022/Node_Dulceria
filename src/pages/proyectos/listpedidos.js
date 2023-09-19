import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import SidebarContainer from "../../components/SidebarContainer";
import ContentHeader from "../../components/ContentHeader";
import Footer from "../../components/Footer";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import Pedido from "./pedido";
const Listpedidos = () => { 
        const [pedidos, setPedidos] = useState([
            {
                id: 2,
                nombre: "santi",
                email: "santi@2gmail.comm",
                entrega : "contra entrega",
                confiEntrega: "contra entrega",
              },
              {
                id: 3,
                nombre: "santi",
                email: "santi@2gmail.comm",
                entrega : "contra entrega",
                confiEntrega: "contra entrega",
              },
              {
                id: 5,
                nombre: "santi",
                email: "santi@2gmail.comm",
                entrega : "contra entrega",
                confiEntrega: "contra entrega",
              },
              {
                nombre: "santi",
                email: "santi@2gmail.comm",
                entrega : "contra entrega",
                confiEntrega: "contra entrega",
                id: 6
              },
              {
                nombre: "santi",
                email: "santi@2gmail.comm",
                entrega : "contra entrega",
                confiEntrega: "contra entrega",
                id: 7
              },
              {
                nombre: "santi",
                email: "santi@2gmail.comm",
                entrega : "contra entrega",
                confiEntrega: "contra entrega",
                id: 8
              },
              {
                nombre: "santi",
                email: "santi@2gmail.comm",
                entrega : "contra entrega",
                confiEntrega: "contra entrega",
                id: 9
              }          ]);
          const cargarProyectos = async () => {
            const response = await APIInvoke.invokeGET(`/pedidos`);
            setPedidos(response.pedidos)
        }
        
        
        
        const eliminarProyecto = async (e, id) => {
            e.preventDefault();
            const response = await APIInvoke.invokeDELETE(`/pedidos/${id}`);
            setPedidos(response.pedidos);
            if (response.msg === 'Producto Eliminado') {
                const msg = "El producto fue eliminado correctamente.";
                swal({
                    title: 'Información',
                    text: msg,
                    icon: 'success',
                    buttons: {
                        confirm: {
                            text: 'okey',
                            value: true,
                            className: 'btn btn-primary',
                            closeModal: true
                        }
                    }
                });
                cargarProyectos()
            } else {
                const msg = "El producto no fue borrado correctamente";
                swal({
                    title: 'Error',
                    text: msg,
                    icon: 'error',
                    buttons: {
                        confirm: {
                            text: 'okey',
                            value: true,
                            className: 'btn btn-danger',
                            closeModal: true
                        }
                    }
                });
            }
        
        }
        
        
          return (
            <div className="wrapper">
              <Navbar></Navbar>
              <SidebarContainer></SidebarContainer>
              <div className="content-wrapper" style={{ backgroundColor: "white" }}>
                <ContentHeader 
                titulo={"Listado de Pedidos"}
                ruta1={"/home"} />
        
                <section className="content">
                  <div className="container-fluid" >
                    <table className="table" >
                      <thead  style={{backgroundColor: 'DarkBlue' , color:'white'}}>
                        <tr>
                        <th scope="col">#</th>
                          <th scope="col">Nombre</th>
                          <th scope="col">Email</th>
                          <th scope="col">Entrega</th>
                          <th scope="col">Confirmación de entrega</th>
                          <th scope="col">Opciones</th>
                        </tr>
                      </thead>
        
                      <tbody>
        
                      {
                          pedidos.map((pedido) => {
                            return (
                              <tr key={pedido.id}>
                                <td><Pedido id={pedido.id}/></td>
                                <td><Pedido nombre={pedido.nombre}/></td>
                                <td><Pedido email={pedido.email}/></td>
                                <td><Pedido entrega={pedido.entrega}/></td>
                                <td><Pedido confiEntrega={pedido.confiEntrega}/></td>

                                <td>
                                <Link to={`/editar/${pedido.id}@${pedido.nombre}@${pedido.email}@${pedido.entrega}@${pedido.confiEntrega}`} className="btn btn-sm btn-primary">Editar</Link>
                                 <button onClick={(e) => eliminarProyecto(e, pedido.id)} className="btn btn-sm btn-danger">Borrar</button>
                                </td>
                              </tr>
                            );
                          })
                        }            
                      </tbody>
                    </table>
                  </div>
                </section>
              </div>
              <Footer></Footer>
            </div>
        
     );
}
 
export default Listpedidos;