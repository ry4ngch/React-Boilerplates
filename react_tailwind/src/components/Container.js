import React from "react";
import Content from "./Content";
import Breadcrumb from './Breadcrumb';

const Container = ({className}) => {
    return (
       <div className={className || ''}>
            <Breadcrumb />
            <Content />
       </div>
    )
}

export default Container;