import React, { Component } from 'react';
import './index.css';

export class ClientsComponent extends Component {
  render() {
    return (
     <footer className="major container 75%">
					<h3>Algunos de nuestros clientes</h3>
					<p>La valoración por parte de nuestros clientes es de suma importancia para nosotros. No olvides contarnos tu experiencia!</p>

					<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#clientesModal">
    Ver clientes
</button>
					<div class="modal fade" id="clientesModal" tabIndex="-1" role="dialog" aria-labelledby="clientesModal" aria-hidden="true">
						<div class="modal-dialog" role="document">
								<div class="modal-content">
										<div class="modal-header">
												<h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
												<button type="button" class="close" data-dismiss="modal" aria-label="Close">
														<span aria-hidden="true">&times;</span>
												</button>
										</div>
										<div class="modal-body">
												...
										</div>
										<div class="modal-footer">
												<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
												<button type="button" class="btn btn-primary">Save changes</button>
										</div>
								</div>
						</div>
				</div>
				</footer>
    )
  }
}