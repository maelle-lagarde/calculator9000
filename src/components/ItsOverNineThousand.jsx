import React from "react";
import Modal from './Modal';

function ItSOverNineThousand(props) {
    if (props.value > 9000) {
        return <div className="over-9000"><iframe src="https://giphy.com/embed/tPKoWQJk3cEbC" width="480" height="359" frameBorder="0" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/dc-cinematic-universe-tPKoWQJk3cEbC"></a></p></div>;
    } else {
        return null;
    }
}

export default ItSOverNineThousand;