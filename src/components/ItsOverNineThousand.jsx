import React from "react";


function ItSOverNineThousand(props) {
    if (props.value > 9000) {
        return <div className="over-9000">It's Over 9000 !!!</div>;
    } else {
        return null;
    }
}

export default ItSOverNineThousand;