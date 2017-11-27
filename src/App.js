import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HomeComponent } from './components/home';
import { ServicesComponent } from './components/services';
import { FooterComponent } from './components/footer';
import ModalComponent from './tools/modal';
import ModalFormComponent from './tools/modal-form';

class App extends Component {
  state = {
    show: false,
    showForm: false
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


  openModalForm =()=> {
    console.log('open modal')
    this.setState({showForm: true})
    // document.querySelector('#fluidModalRightSuccessDemo').addClass('.show')
  }
  closeModalForm =()=> {
    console.log('close modal')
    this.setState({showForm: false})

  }


  renderModalForm() {
    const {showForm} = this.state;

    return (
      <ModalFormComponent title="Cotizar" titleContent="En LiniUX Tech" open={showForm} handleCloseForm={this.closeModalForm}>
        </ModalFormComponent>
    )
  }
  renderModal() {
    const {show} = this.state;

    return (
        <ModalComponent title="Tecnologías actuales" titleContent="En LiniUX Tech" open={show} handleClose={this.closeModal}>
       </ModalComponent>
    )
  }

  render() {
    const {show, showForm} = this.state;

    return (
      <div className="App">
        <HomeComponent />
        <ServicesComponent />
        <FooterComponent />
        <button type="button" className="btn peach-gradient btn-rounded waves-effect waves-light cotizar" onClick={this.openModal}>Cotizar</button>
          {(show) ? this.renderModal() : null}      
          <button type="button" className="btn aqua-gradient btn-rounded waves-effect waves-light tecnologias" onClick={this.openModalForm} data-toggle="modal" data-target="#exampleModal">Tecnologías</button>
           {(showForm) ? this.renderModalForm() : null}
      </div>
    );
  }
}

export default App;
