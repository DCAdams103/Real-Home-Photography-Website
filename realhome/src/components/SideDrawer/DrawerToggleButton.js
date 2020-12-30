import React from 'react'
import './DrawerToggleButton.css'

function DrawerToggleButton(props)
{
    return (
        <div>
            <header className="text"> Menu </header>
            <button className="toggle-button" onClick={props.click}>
                <div className="toggle-button-line" />
                <div className="toggle-button-line" />
                <div className="toggle-button-line" />
            </button>
        </div>
        
    )
}

export default DrawerToggleButton;