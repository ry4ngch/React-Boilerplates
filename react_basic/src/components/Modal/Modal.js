import React, {useEffect, useState} from "react";
import reactDOM from 'react-dom';
import {initModal, toggleSection, selectSection} from "../../utils/Salient/salient-modal";

const ModalOverlay = (props) => {
    return (
        <React.Fragment>
            {
                props.showModal &&
                <div className={`modal ${props.className}`}>
                    <div className='modal-content' tabIndex="-1" onBlur={props.onModalBlur}>
                        <a className='modal-close' onClick={props.onCloseModal}></a>
                        {((typeof(props.title)=='string' && props.title.length > 0) || typeof(props.title) === 'object') && <header className="modal-header">{props.title}</header>}
                        <div className='modal-body'>
                            {props.children}
                            {props.hasSections && <a className="modal-control left-arrow" onClick={() => toggleSection('prev')}></a>}
                            {props.hasSections && <a className="modal-control right-arrow" onClick={() => toggleSection('next')}></a>}
                        </div>
                        <div className="modal-footer">
                            {props.hasSections && <ul className="modal-indicators">
                                {props.children.length > 0 && props.children.map((_,index) => (
                                    <li key={index} className={index == 0 ? 'active' : ''} onClick={() => selectSection(index)}></li>
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

Modal.defaultProps = {
    hasSections: false
}

export default Modal;