import React, {useState} from "react";
import reactDOM from 'react-dom';

const ModalOverlay = (props) => {
    const [activeSectionIndex, setActiveSectionIndex] = useState(0)

    const toggleSection = (action) => {
        if(React.Children.count(props.children) > 0){
            if(action == 'prev'){
                if(activeSectionIndex > 0){
                    setActiveSectionIndex(activeSectionIndex - 1);
                }
            } else {
                if(activeSectionIndex + 1 < React.Children.count(props.children)){
                    setActiveSectionIndex(activeSectionIndex + 1);
                } 
            }
        }
    }

    return (
        <React.Fragment>
            {
                props.showModal &&
                <div style={props.style} className={`modal ${props.className}`}>
                    <div className='modal-content' tabIndex="-1" onBlur={props.onModalBlur}>
                        <a className='modal-close' onClick={props.onCloseModal}></a>
                        {((typeof(props.title)=='string' && props.title.length > 0) || typeof(props.title) === 'object') && <header className="modal-header">{props.title}</header>}
                        <div className='modal-body'>
                            {
                                props.hasSections 
                                ? React.Children.map(props.children, (child, index) => 
                                    React.isValidElement(child) ? React.cloneElement(child, {
                                        ...child.props, className: [child.props.className, index === activeSectionIndex ? 'active': ''].join(' ').trim()
                                    }) : child
                                )
                                : props.children
                            }
                            {props.hasSections && <a className="modal-control left-arrow" onClick={() => toggleSection('prev')}></a>}
                            {props.hasSections && <a className="modal-control right-arrow" onClick={() => toggleSection('next')}></a>}
                        </div>
                        <div className="modal-footer">
                            {props.hasSections && <ul className="modal-indicators">
                                {props.children.length > 0 && props.children.map((_,index) => (
                                    <li key={index} className={index === activeSectionIndex ? 'active' : ''} onClick={() => setActiveSectionIndex(index)}></li>
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