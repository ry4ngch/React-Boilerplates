import React, {useState} from "react";
import { Col } from 'react-bootstrap';

const Buttons = () => {
    const [isChecked, setIsChecked] = useState([false, false]);

    const checkHandler = (event) => {
        const { name, checked } = event.target;
        setIsChecked((prevState) => ({
            ...prevState,
            [name]: checked,
        }))
    };

    return (
        <Col md="12" lg="12" xs="12">
            <div className="card bg-dracula flat-em">
                <button className="clear-button">Hello</button>
                <button className="btn-blur">Hello2</button>
                <button className="btn-blue-blur">Hello3</button>
                <input type="checkbox" className="switch" name={0} checked={isChecked[0]} onChange={checkHandler}></input>
                <input type="checkbox" checked={isChecked[1]} name={1} onChange={checkHandler}></input>
                <input type="checkbox" checked disabled></input>
                <div className="btn-group">
                    <button className="btn-icon-wrapper">
                        <span className="left-arrow-icon"></span>
                    </button>
                    <button className="btn-icon-wrapper">
                        <span className="right-arrow-icon"></span>
                    </button>
                    <button className="btn-icon-wrapper">
                        <span className="top-arrow-icon"></span>
                    </button>
                    <button className="btn-icon-wrapper">
                        <span className="bottom-arrow-icon"></span>
                    </button>
                </div>
            </div>
        </Col>
    )
}

export default Buttons