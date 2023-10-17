import React from 'react';

function ResetButton(props) {
    return (
        <button className="reset-button" onClick={props.onClick}>
            AC
        </button>
    );
}

export default ResetButton;