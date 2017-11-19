import React, { Component } from 'react';
import { SectionServices } from '../../services/sectionsServices.services';
import { ClientsComponent } from '../../components/clients';

import './index.css';

export class ServicesComponent extends Component {
    state = {
        services: []
    }
    componentDidMount() {
        this.loadServices();
    }
    loadServices() {
        const services = this.state;
    const service = new SectionServices();
   service.getOurServices()
        .then(response => {
            console.log(response)
          this.setState({services: response})
        })
     
  }

  renderService(services) {
      return services.map((item, index) => {
      return (
          <section className={'feature' + ' ' + item.float} key={index}>
		 				<a href="#" className="image icon fa-signal"><img src="images/pic01.jpg" alt="" /></a>
		 				<div className="content">
		 					<h3>{item.title}</h3>
		 					<p>{item.desc}</p>
		 				</div>
					</section>
      )
          
      })
  }
  render() {
      const {services} = this.state;

    return (
        			<div id="main">

				<header className="major container 75%">
					<h2>ESTA GENERAIÓN ESTA EN CONSTANTE CAMBIO, EN CONSECUENCIA LA FLEXIBILIDAD Y AGILIDAD SON PIEZAS CLAVE.
					</h2>
					<p style={{fontSize: 13}}>En LiniUX Technology, permanecemos atentos a las nuevas actualizaciones, ya que buscámos que nuestros clientes <br/>
					estén siempre alineados con lo nuevo y recibir una excelente calidad de resultado.</p>
				</header>
			<div className="box alt container">
                {this.renderService(services)}
					
				</div>
				<ClientsComponent />
			</div>
    )
  }
}
