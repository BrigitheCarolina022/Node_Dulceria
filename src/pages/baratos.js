import Navbar from "../components/Navbar";
import SidebarContainer from "../components/SidebarContainer";
import ContentHeader from "../components/ContentHeader";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Baratos = () => {
    return ( 
        <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper">

                <ContentHeader
                    titulo={"Dulces tipicos Baratos"}
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
                                                        src="../../dist/img/img4.jpg"
                                                        alt="User profile picture" height={10} width={10}/>
                                                </div>
                                                <h3 className="profile-username text-center">Milo x 24</h3>
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
                                                        src="../../dist/img/img11.jpg"
                                                        alt="User profile picture"height={10} width={10} />
                                                </div>
                                                <h3 className="profile-username text-center">Chocorramo </h3>
                                                <p className="text-muted text-center">$3,000</p>
                                                <Link to={"/pedidos"} className="btn btn-primary btn-block"><b>Comprar</b></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className="card card-primary card-outline">
                                            <div className="card-body box-profile">
                                                <div className="text-center">
                                                    <img className="profile-user-img img-fluid"
                                                        src="../../dist/img/img12.jpg"
                                                        alt="User profile picture" height={10} width={10}/>
                                                </div>
                                                <h3 className="profile-username text-center">Barra Chocorramo Frutos Rojos</h3>
                                                <p className="text-muted text-center">$3,000</p>
                                                <Link to={"/pedidos"} className="btn btn-primary btn-block"><b>Comprar</b></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className="card card-primary card-outline">
                                            <div className="card-body box-profile">
                                                <div className="text-center">
                                                    <img className="profile-user-img img-fluid"
                                                        src="../../dist/img/img3.jpg"
                                                        alt="User profile picture"height={10} width={10} />
                                                </div>
                                                <h3 className="profile-username text-center">Frunas x30</h3>
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
                                                        src="../../dist/img/img13.jpg"
                                                        alt="User profile picture" height={10} width={10}/>
                                                </div>
                                                <h3 className="profile-username text-center">Festival Chocolate </h3>
                                                <p className="text-muted text-center">$4,000</p>
                                                <Link to={"/pedidos"} className="btn btn-primary btn-block"><b>Comprar</b></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className="card card-primary card-outline">
                                            <div className="card-body box-profile">
                                                <div className="text-center">
                                                    <img className="profile-user-img img-fluid"
                                                        src="../../dist/img/img5.jpg"
                                                        alt="User profile picture" height={10} width={10}/>
                                                </div>
                                                <h3 className="profile-username text-center">Nucitas x 12</h3>
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
                                                        src="../../dist/img/img6.jpg"
                                                        alt="User profile picture"height={10} width={10} />
                                                </div>
                                                <h3 className="profile-username text-center">Ponque Ramo</h3>
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
                                                        src="../../dist/img/img10.jpg"
                                                        alt="User profile picture" height={10} width={10}/>
                                                </div>
                                                <h3 className="profile-username text-center">Bridge x12</h3>
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
                                                        src="../../dist/img/img8.jpg"
                                                        alt="User profile picture" height={10} width={10}/>
                                                </div>
                                                <h3 className="profile-username text-center">Bubbalo x 30</h3>
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
                                                        src="../../dist/img/img9.jpg"
                                                        alt="User profile picture" height={10} width={10}/>
                                                </div>
                                                <h3 className="profile-username text-center">Supercoco x 6</h3>
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
                                                        src="../../dist/img/img14.jpg"
                                                        alt="User profile picture"height={10} width={10} />
                                                </div>
                                                <h3 className="profile-username text-center">Galletas Muuu</h3>
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
                                                        src="../../dist/img/img15.jpg"
                                                        alt="User profile picture" height={10} width={10}/>
                                                </div>
                                                <h3 className="profile-username text-center">Glasitas x 6</h3>
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
                                                        src="../../dist/img/img16.jpg"
                                                        alt="User profile picture" height={10} width={10}/>
                                                </div>
                                                <h3 className="profile-username text-center">Bon Bon Bum x 24</h3>
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
                                                        src="../../dist/img/img7.jpg"
                                                        alt="User profile picture" height={10} width={10}/>
                                                </div>
                                                <h3 className="profile-username text-center">Quipitos x12</h3>
                                                <p className="text-muted text-center">$3,000</p>
                                                <Link to={"/pedidos"} className="btn btn-primary btn-block"><b>Comprar</b></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className="card card-primary card-outline">
                                            <div className="card-body box-profile">
                                                <div className="text-center">
                                                    <img className="profile-user-img img-fluid"
                                                        src="../../dist/img/img2.jpg"
                                                        alt="User profile picture" />
                                                </div>
                                                <h3 className="profile-username text-center">Cocosette                 x12</h3>
                                                <p className="text-muted text-center">$2,000</p>
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
 
export default Baratos;