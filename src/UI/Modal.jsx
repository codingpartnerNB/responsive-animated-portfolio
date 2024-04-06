import React from 'react';
import ReactDOM from 'react-dom';
import { IoClose } from "react-icons/io5";

const Backdrop = (props) => {
    return <div className='w-full h-full fixed top-0 left-0 z-20 bg-gray-900 bg-opacity-40' onClick={props.onHide} />
}

const ModalOverlay = (props) => {
    return <div
    className='w-80 sm:w-1/2 fixed top-1/2 left-1/2 z-30 bg-gray-900 rounded-lg transform -translate-x-1/2 -translate-y-1/2 p-5'>
        <div className="text-3xl text-gray-200 relative cursor-pointer mb-8 lg:mb-10" onClick={props.onHide}>
          <IoClose className="absolute top-0 right-0" />
        </div>
        {props.children}
    </div>
}

const Modal = (props) => {
  return (
    <React.Fragment>
        {ReactDOM.createPortal(<Backdrop onHide={props.onHide} />, document.getElementById('overlay'))}
        {ReactDOM.createPortal(<ModalOverlay onHide={props.onHide}>{props.children}</ModalOverlay>, document.getElementById('overlay'))}
    </React.Fragment>
  )
}

export default Modal
