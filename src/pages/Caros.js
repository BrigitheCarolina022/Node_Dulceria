import Navbar from "../components/Navbar";
import SidebarContainer from "../components/SidebarContainer";
import ContentHeader from "../components/ContentHeader";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Caros = () => {
    return ( 
        <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper">

                <ContentHeader
                    titulo={"Dulces tipicos Caros"}
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
                                                        src="../../dist/img/img19.jpg"
                                                        alt="User profile picture" height={10} width={10}/>
                                                </div>
                                                <h3 className="profile-username text-center">Arequipe</h3>
                                                <p className="text-muted text-center">$16,000</p>
                                                <Link to={"/pedidos"} className="btn btn-primary btn-block"><b>Comprar</b></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className="card card-primary card-outline">
                                            <div className="card-body box-profile">
                                                <div className="text-center">
                                                    <img className="profile-user-img img-fluid"
                                                        src="../../dist/img/img20.jpg"
                                                        alt="User profile picture"height={10} width={10} />
                                                </div>
                                                <h3 className="profile-username text-center">Manjar blanco </h3>
                                                <p className="text-muted text-center">$10,000</p>
                                                <Link to={"/pedidos"} className="btn btn-primary btn-block"><b>Comprar</b></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className="card card-primary card-outline">
                                            <div className="card-body box-profile">
                                                <div className="text-center">
                                                    <img className="profile-user-img img-fluid"
                                                        src="../../dist/img/img21.jpg"
                                                        alt="User profile picture" height={10} width={10}/>
                                                </div>
                                                <h3 className="profile-username text-center">Cocada de alta calidad.</h3>
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
                                                        src="../../dist/img/img22.jpg"
                                                        alt="User profile picture"height={10} width={10} />
                                                </div>
                                                <h3 className="profile-username text-center">Dulce de guanábana.</h3>
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
                                                        src="../../dist/img/img23.jpg"
                                                        alt="User profile picture" height={10} width={10}/>
                                                </div>
                                                <h3 className="profile-username text-center">Bocadillo Veleño.</h3>
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
                                                        src="../../dist/img/img24.jpg"
                                                        alt="User profile picture" height={10} width={10}/>
                                                </div>
                                                <h3 className="profile-username text-center">Dulce de leche de cabra.</h3>
                                                <p className="text-muted text-center">$12,000</p>
                                                <Link to={"/pedidos"} className="btn btn-primary btn-block"><b>Comprar</b></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className="card card-primary card-outline">
                                            <div className="card-body box-profile">
                                                <div className="text-center">
                                                    <img className="profile-user-img img-fluid"
                                                        src="../../dist/img/img25.jpg"
                                                        alt="User profile picture"height={10} width={10} />
                                                </div>
                                                <h3 className="profile-username text-center">Natilla</h3>
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
                                                        src="../../dist/img/img26.jpg"
                                                        alt="User profile picture" height={10} width={10}/>
                                                </div>
                                                <h3 className="profile-username text-center">Brevas con arequipe.</h3>
                                                <p className="text-muted text-center">$10,000</p>
                                                <Link to={"/pedidos"} className="btn btn-primary btn-block"><b>Comprar</b></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className="card card-primary card-outline">
                                            <div className="card-body box-profile">
                                                <div className="text-center">
                                                    <img className="profile-user-img img-fluid"
                                                        src="../../dist/img/img27.jpg"
                                                        alt="User profile picture" />
                                                </div>
                                                <h3 className="profile-username text-center">Cocadas de coco fresco. </h3>
                                                <p className="text-muted text-center">$10,000</p>
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
 
export default Caros;