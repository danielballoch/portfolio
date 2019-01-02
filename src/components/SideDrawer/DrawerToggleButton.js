import React from 'react';
import './DrawerToggleButton.css';

const drawerToggleButton = props => {
    let toggleClasses = 'toggle-button';
    if(props.open){
        toggleClasses = 'toggle-button toggle'
    }

return(
    <button className={toggleClasses} onClick={props.click}>
        <div className="toggle-button__line"/>
        <div className="toggle-button__line"/>
        <div className="toggle-button__line"/>
    </button>
    );
}


export default drawerToggleButton;

