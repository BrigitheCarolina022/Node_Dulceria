import Navbar from "../components/Navbar";
import SidebarContainer from "../components/SidebarContainer";
import ContentHeader from "../components/ContentHeader";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Intermedio = () => {
    return ( 
        <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper">

                <ContentHeader
                    titulo={"Dulces tipicos Valor Intermedio"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"Dashboard"}
                    ruta1={"/home"}
                />

                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-lg-3 col-6">
                                        <div className="card card-primary card-outline">
                                            <div className="card-body box-profile">
                                                <div className="text-center">
                                                    <img className="profile-user-img img-fluid"
                                                        src="../../dist/img/img28.jpg"
                                                        alt="User profile picture" height={10} width={10}/>
                                                </div>
                                                <h3 className="profile-username text-center">ALmojabanas</h3>
                                                <p className="text-muted text-center">$7,000</p>
                                                <Link to={"/pedidos"} className="btn btn-primary btn-block"><b>Comprar</b></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className="card card-primary card-outline">
                                            <div className="card-body box-profile">
                                                <div className="text-center">
                                                    <img className="profile-user-img img-fluid"
                                                        src="../../dist/img/img29.jpg"
                                                        alt="User profile picture"height={10} width={10} />
                                                </div>
                                                <h3 className="profile-username text-center">Mantecada </h3>
                                                <p className="text-muted text-center">$8,000</p>
                                                <Link to={"/pedidos"} className="btn btn-primary btn-block"><b>Comprar</b></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className="card card-primary card-outline">
                                            <div className="card-body box-profile">
                                                <div className="text-center">
                                                    <img className="profile-user-img img-fluid"
                                                        src="../../dist/img/img30.jpg"
                                                        alt="User profile picture" height={10} width={10}/>
                                                </div>
                                                <h3 className="profile-username text-center">Rosquitas</h3>
                                                <p className="text-muted text-center">$9,000</p>
                                                <Link to={"/pedidos"} className="btn btn-primary btn-block"><b>Comprar</b></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className="card card-primary card-outline">
                                            <div className="card-body box-profile">
                                                <div className="text-center">
                                                    <img className="profile-user-img img-fluid"
                                                        src="../../dist/img/img31.jpg"
                                                        alt="User profile picture"height={10} width={10} />
                                                </div>
                                                <h3 className="profile-username text-center">Cocadas de panela.</h3>
                                                <p className="text-muted text-center">$6,000</p>
                                                <Link to={"/pedidos"} className="btn btn-primary btn-block"><b>Comprar</b></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className="card card-primary card-outline">
                                            <div className="card-body box-profile">
                                                <div className="text-center">
                                                    <img className="profile-user-img img-fluid"
                                                        src="../../dist/img/img32.jpg"
                                                        alt="User profile picture" height={10} width={10}/>
                                                </div>
                                                <h3 className="profile-username text-center">Cuca.</h3>
                                                <p className="text-muted text-center">$5,000</p>
                                                <Link to={"/pedidos"} className="btn btn-primary btn-block"><b>Comprar</b></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className="card card-primary card-outline">
                                            <div className="card-body box-profile">
                                                <div className="text-center">
                                                    <img className="profile-user-img img-fluid"
                                                        src="../../dist/img/img33.jpg"
                                                        alt="User profile picture" height={10} width={10}/>
                                                </div>
                                                <h3 className="profile-username text-center">Arepas de chocolo.</h3>
                                                <p className="text-muted text-center">$9,000</p>
                                                <Link to={"/pedidos"} className="btn btn-primary btn-block"><b>Comprar</b></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className="card card-primary card-outline">
                                            <div className="card-body box-profile">
                                                <div className="text-center">
                                                    <img className="profile-user-img img-fluid"
                                                        src="../../dist/img/img34.jpg"
                                                        alt="User profile picture"height={10} width={10} />
                                                </div>
                                                <h3 className="profile-username text-center">Achiras</h3>
                                                <p className="text-muted text-center">$6,000</p>
                                                <Link to={"/pedidos"} className="btn btn-primary btn-block"><b>Comprar</b></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className="card card-primary card-outline">
                                            <div className="card-body box-profile">
                                                <div className="text-center">
                                                    <img className="profile-user-img img-fluid"
                                                        src="../../dist/img/img35.jpg"
                                                        alt="User profile picture" height={10} width={10}/>
                                                </div>
                                                <h3 className="profile-username text-center">Panelitas</h3>
                                                <p className="text-muted text-center">$6,000</p>
                                                <Link to={"/pedidos"} className="btn btn-primary btn-block"><b>Comprar</b></Link>
                                            </div>
                                        </div>
                                    </div>
                        </div>

                    </div>

                </section>


            </div>
            <Footer></Footer>


        </div>


     );
}
 
export default Intermedio;