import React from 'react';
import './DrawerToggleButton.css';

// const drawerToggleButton = props => {
//     let toggleClasses = 'toggle-button';
//     if(props.show){
//         toggleClasses = 'toggle-button open'
//     }

// return(
//     <button className={toggleClasses} onClick={props.click}>
//         <div className="toggle-button__line"/>
//         <div className="toggle-button__line"/>
//         <div className="toggle-button__line"/>
//     </button>
//     );
// }


class drawerToggleButton extends React.Component{
constructor(props){
    super(props);
}

    render(){
        return (
            <button className="toggle-button" onClick={this.props.click}>
                <div className="toggle-button__line"/>
                <div className="toggle-button__line"/>
                <div className="toggle-button__line"/>
             </button>
        );
    }
}

export default drawerToggleButton;

