import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { VscChromeClose } from 'react-icons/vsc';
import { Backdrop, ModalBox, CloseBtn } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseEsc);
  }

  handleCloseEsc = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };

  handelBackdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Backdrop onClick={this.handelBackdropClick}>
        <ModalBox>
          <CloseBtn onClick={() => this.props.onClose()}>
            <VscChromeClose />
          </CloseBtn>
          {this.props.children}
        </ModalBox>
      </Backdrop>,
      modalRoot
    );

    // return (
    //   <Backdrop>
    //     <ModalBox>
    //       <button type="button">Close</button>
    //       {this.props.children}
    //     </ModalBox>
    //   </Backdrop>
    // );
  }
}
