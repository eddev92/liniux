import React, { Component } from 'react';
import './index.css';

export class FooterComponent extends Component {
  render() {
    return (
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
								<input type="text" name="telefono" placeholder="Telefono" />
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
						<li><a href="https://www.facebook.com/eddy.llh" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
						<li><a href="https://github.com/eddev92" className="icon fa-github"><span className="label">Github</span></a></li>
					</ul>

					<ul className="copyright">
						<li>2017 &copy; Todos los derechos reservados.</li><li>Powered by: <a href="#">LiniUX</a></li>
					</ul>

				</div>
			</div>
    )
  }
}