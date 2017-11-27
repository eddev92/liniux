import React, { Component } from 'react';
import './index.css';

export default class ModalComponent extends Component {

  state={
    show: this.props.open
  }

  render() {
    const {show} = this.state;
    const {handleClose} = this.props;

    return (
      <div class={(show) ? 'modal fade show' : 'modal fade' } id="fluidModalRightSuccessDemo" tabIndex="-1" role="dialog" aria-labelledby="fluidModalRightSuccessDemo" data-backdrop="false">
            <div class="modal-dialog modal-full-height modal-right modal-notify modal-success" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <p class="heading lead">{this.props.title}</p>

                    </div>
                    <div class="modal-body">
                        
                        <h1>{this.props.titleContent}</h1>

                        <a type="button" onClick={handleClose} class="btn btn-outline-secondary-modal waves-effect" data-dismiss="modal">Cerrar</a>
                    </div>

                    
                </div>
            </div>
        </div>
    );
  }
}

