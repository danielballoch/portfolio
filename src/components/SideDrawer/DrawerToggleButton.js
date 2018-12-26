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


// class drawerToggleButton extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//         toggleOpen: false 
//         };
//         // this.handleClick = this.handleClick.bind(this)   
//     }
//     handleToggle(e){
//         e.preventDefault();
//         this.setState({
//             toggleOpen: !this.state.toggleOpen
//         })
//     }
//     render(){
//         let className = "toggle-button";
//         if (this.state.toggleOpen){
//             className += "toggle-button open"
//         }
//         return (
//             // this.props.click

//             <button className="toggle-button"  onClick={this.props.click} >
//                 <div className="toggle-button__line"/>
//                 <div className="toggle-button__line"/>
//                 <div className="toggle-button__line"/>
//              </button>
//         );
//     }
// }


  


 // <button className={toggleClasses} onClick={this.props.click}>
            //     <div className="toggle-button__line"/>
            //     <div className="toggle-button__line"/>
            //     <div className="toggle-button__line"/>
            //  </button>

export default drawerToggleButton;

