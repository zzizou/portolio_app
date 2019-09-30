import React from 'react';

const content = (props) => {
    return(
        <div>
            <h3>Name: {props.name}</h3>
            <h5>Age: {props.age}</h5>
            <h5>Email: {props.email} </h5>
        </div>
    )
};
export default content;