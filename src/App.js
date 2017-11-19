import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HomeComponent } from './components/home';
import { ServicesComponent } from './components/services';
import { FooterComponent } from './components/footer';

class App extends Component {
  state = {
    show: false
  }
  openModal =()=> {
    console.log('open modal')
    this.setState({show: true})
    // document.querySelector('#fluidModalRightSuccessDemo').addClass('.show')
  }
  closeModal=()=> {
    console.log('close modal')
    this.setState({show: false})

  }
  render() {
    return (
      <div className="App">
        <HomeComponent />
        <ServicesComponent />
        <FooterComponent />
        <button type="button" className="btn peach-gradient btn-rounded waves-effect waves-light cotizar" onClick={this.openModal} data-toggle="modal" data-target="#fluidModalRightSuccessDemo">Cotizar</button>
       <div class={(this.state.show) ? 'modal fade right show' : 'modal fade right' } id="fluidModalRightSuccessDemo" tabIndex="-1" role="dialog" aria-labelledby="fluidModalRightSuccessDemo" data-backdrop="false">
            <div class="modal-dialog modal-full-height modal-right modal-notify modal-success" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <p class="heading lead">Tecnologías actuales</p>

                        <button id="close" type="button" class="close" onClick={this.closeModal} data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true" class="white-text">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                        
                        <h1>tecnologias en liniux tech</h1>

                        <a type="button" onClick={this.closeModal} class="btn btn-outline-secondary-modal waves-effect" data-dismiss="modal">Cerrar</a>
                    </div>

                    
                </div>
            </div>
        </div>
        {/* tecnologia boton*/}
         <button type="button" className="btn aqua-gradient btn-rounded waves-effect waves-light tecnologias" onClick={this.openModal} data-toggle="modal" data-target="#fluidModalRightSuccessDemo">Tecnologías</button>
       
      </div>
    );
  }
}

export default App;
