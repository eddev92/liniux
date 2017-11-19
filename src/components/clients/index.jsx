import React, { Component } from 'react';
import './index.css';

export class ClientsComponent extends Component {
  render() {
    return (
     <footer className="major container 75%">
					<h3>Algunos de nuestros clientes</h3>
					<p>La valoración por parte de nuestros clientes es de suma importancia para nosotros. No olvides contarnos tu experiencia!</p>
					<ul className="actions">
						<li><a href="#" className="button">Ver clientes</a></li>
					</ul>
				</footer>
    )
  }
}