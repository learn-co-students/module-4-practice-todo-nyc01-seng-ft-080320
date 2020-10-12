import React from 'react'

function ToggleButton(props) {

    function toggleButton() {
        props.toggleButton()
    }

    return(
        <button onClick={toggleButton} className={props.clicked ? "toggle on": "toggle off"}>{
            props.clicked ? "Stretch features abled" : "Stretch features disabled"
        }</button>
    )
}

export default ToggleButton