import React, { Component } from 'react';
import './index.css';

export default class ModalFormComponent extends Component {

  state={
    showForm: this.props.open,
    handleCloseForm: this.props.handleCloseForm
  }

  render() {
    const {showForm} = this.state;
    const {handleCloseForm} = this.props;

    return (
      <div class={(showForm) ? 'modal fade right show' : 'modal fade right' } id="fluidModalRightSuccessDemo" tabIndex="-1" role="dialog" aria-labelledby="fluidModalRightSuccessDemo" data-backdrop="false">
            
               <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={handleCloseForm}>Cerrar</button>
                            <button type="button" class="btn btn-primary">Cotizar</button>
                        </div>
                    </div>
                </div>
            </div>
    );
  }
}

