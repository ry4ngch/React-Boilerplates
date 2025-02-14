import React, {useEffect, useState} from "react";
import reactDOM from 'react-dom';
import {initModal, toggleSection} from "../../utils/Salient/salient-modal";

const ModalOverlay = (props) => {
    return (
        <React.Fragment>
            {
                props.showModal &&
                <div className={`modal ${props.className}`}>
                    <div className='modal-content'>
                        <a className='modal-close' onClick={props.onCloseModal}></a>
                        {props.title.length > 0 && <header className="modal-header">{props.title}</header>}
                        <div className='modal-body'>
                            {props.children}
                            {props.hasSections && <a className="modal-control left-arrow" onClick={() => toggleSection('prev')}></a>}
                            {props.hasSections && <a className="modal-control right-arrow" onClick={() => toggleSection('next')}></a>}
                        </div>
                        <div className="modal-footer">
                            {props.hasSections && <ul className="modal-indicators">
                                {props.children.length > 0 && props.children.map((_,index) => (
                                    <li key={index} className={index == 0 ? 'active' : ''}></li>
                                ))}
                            </ul>}
                        </div>
                    </div>
                </div>
            }
        </React.Fragment>
    )
}

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    useEffect(() => {
        initModal();
    }, [props.showModal])

    return (
        <React.Fragment>
            {reactDOM.createPortal(
                <ModalOverlay {...props}>
                        {props.children}
                </ModalOverlay>, portalElement)}
            
        </React.Fragment>
    )
}

export default Modal;