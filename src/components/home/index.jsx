import React, { Component } from 'react';
import './index.css';

export class HomeComponent extends Component {
  render() {
    return (
      <div className="App">
			<div id="header">
				<span className="logo icon fa-paper-plane-o"></span>
				<h1>LiniUX Technology</h1>
				<p>Piensa, decídete y únete a la innovación tecnológica
				<br />
				Desarrolla tus soluciones de negocio de manera rápida y dinámica con lo mejor del mercado en tecnologías.</p>
			</div>
			<div id="main">

				<header className="major container 75%">
					<h2>ESTA GENERAIÓN ESTA EN CONSTANTE CAMBIO, EN CONSECUENCIA LA FLEXIBILIDAD Y AGILIDAD ES PIEZA CLAVE.
					</h2>
					<p style={{fontSize: 13}}>En LiniUX Technology, permanecemos atentos a las nuevas actualizaciones, ya que buscámos que nuestros clientes <br/>
					estén siempre alineados con lo nuevo y recibir una excelente calidad de resultado.</p>
				</header>

				<div className="box alt container">
					<section className="feature left">
						<a href="#" className="image icon fa-signal"><img src="images/pic01.jpg" alt="" /></a>
						<div className="content">
							<h3>Desarrollo de soluciones web</h3>
							<p>Vitae natoque dictum etiam semper magnis enim feugiat amet curabitur tempor orci penatibus. Tellus erat mauris ipsum fermentum etiam vivamus eget. Nunc nibh morbi quis fusce lacus.</p>
						</div>
					</section>
					<section className="feature right">
						<a href="#" className="image icon fa-code"><img src="images/pic02.jpg" alt="" /></a>
						<div className="content">
							<h3>Asesoría TI en general</h3>
							<p>Vitae natoque dictum etiam semper magnis enim feugiat amet curabitur tempor orci penatibus. Tellus erat mauris ipsum fermentum etiam vivamus eget. Nunc nibh morbi quis fusce lacus.</p>
						</div>
					</section>
					<section className="feature left">
						<a href="#" className="image icon fa-mobile"><img src="images/pic03.jpg" alt="" /></a>
						<div className="content">
							<h3>Impresión y modelado 3D</h3>
							<p>Vitae natoque dictum etiam semper magnis enim feugiat amet curabitur tempor orci penatibus. Tellus erat mauris ipsum fermentum etiam vivamus eget. Nunc nibh morbi quis fusce lacus.</p>
						</div>
					</section>
				</div>

			

				<footer className="major container 75%">
					<h3>Algunos de nuestros clientes</h3>
					<p>La valoración por parte de nuestros clientes es de suma importancia para nosotros. No olvides contarnos tu experiencia!</p>
					<ul className="actions">
						<li><a href="#" className="button">Ver clientes</a></li>
					</ul>
				</footer>

			</div>

			<div id="footer">
				<div className="container 75%">

					<header className="major last">
						<h2>Contáctanos</h2>
					</header>

					<p>Teléfonos: 994381708</p>
					<p>Email: llanca872@gmail.com</p>

					<form method="post" action="#">
						<div className="row">
							<div className="6u 12u(mobilep)">
								<input type="text" name="name" placeholder="Name" />
							</div>
							<div className="6u 12u(mobilep)">
								<input type="email" name="email" placeholder="Email" />
							</div>
						</div>
						<div className="row">
							<div className="12u">
								<textarea name="message" placeholder="Message" rows="6"></textarea>
							</div>
						</div>
						<div className="row">
							<div className="12u">
								<ul className="actions">
									<li><input type="submit" value="Contactar" /></li>
								</ul>
							</div>
						</div>
					</form>

					<ul className="icons">
						<li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
						<li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
						<li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
						<li><a href="#" className="icon fa-github"><span className="label">Github</span></a></li>
						<li><a href="#" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li>
					</ul>

					<ul className="copyright">
						<li>2017 &copy; Todos los derechos reservados.</li><li>Powered by: <a href="#">LiniUX</a></li>
					</ul>

				</div>
			</div>
      </div>
    );
  }
}

export default HomeComponent;
