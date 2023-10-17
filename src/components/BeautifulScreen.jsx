import React from "react";

function BeautifulScreen(props) {
    return (
        <div className="display">
            <div className="current-operation">{props.currentOperation}</div>
            <div className="result">{props.result}</div>
        </div>
    );
}

export default BeautifulScreen;